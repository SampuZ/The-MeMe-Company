package sompuz.memecompany.login;

import android.util.Log;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.Executors;

import org.json.JSONException;
import org.json.JSONObject;

public class LoginComponent {

    private static LoginComponent sInstance;
    private LoginCallback loginCallback;

    private LoginComponent(LoginCallback loginCallback) {
        this.loginCallback=loginCallback;
    }

    public static LoginComponent getInstance(LoginCallback loginCallback) {
        if(sInstance==null){
            sInstance=new LoginComponent(loginCallback);
        }
        return sInstance;
    }

    public void login(UserData userData) {

        Executors.newSingleThreadExecutor().execute(new Runnable() {
            @Override
            public void run() {
                try {
//                    Thread.sleep(1000);
                    // URL of your server for authentication
                    URL url = new URL("http://10.172.32.107:8085/api/login");

                    // Create connection
                    HttpURLConnection connection = (HttpURLConnection) url.openConnection();

                    connection.setRequestMethod("POST");
                    connection.setRequestProperty("Content-Type", "application/json");
                    connection.setDoOutput(true);

                    // Build the JSON object
                    JSONObject jsonParams = new JSONObject();
                    jsonParams.put("username", userData.username);
                    jsonParams.put("password", userData.password);

                    // Send the JSON data
                    // Send the POST data
                    OutputStream outputStream = connection.getOutputStream();
                    outputStream.write(jsonParams.toString().getBytes());
                    outputStream.flush();

                    // Get the response
                    InputStream inputStream = connection.getInputStream();
                    BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
                    String line;
                    String response = "";
                    while ((line = reader.readLine()) != null) {
                        response += line;
                    }

                    loginCallback.onLoginSuccess(new UserData(response,""));

                    // Close streams
                    outputStream.close();
                    inputStream.close();

                    // Disconnect
                    connection.disconnect();
                } catch (IOException e) {
                    Log.e("Sampu", "Error: " + e.getMessage());
                    loginCallback.onLoginFailure();
                } catch (JSONException e) {
                    throw new RuntimeException(e);
                }
            }
        });
    }

}
