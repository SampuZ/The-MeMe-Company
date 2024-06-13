package sompuz.memecompany.login;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import sompuz.memecompany.R;
import sompuz.memecompany.dashboard.Dashboard;
import sompuz.memecompany.databinding.ActivityLoginBinding;

public class LoginActivity extends AppCompatActivity implements LoginCallback {


    private ActivityLoginBinding binding;
    LoginComponent loginComponent;
    ProgressBar loadingProgressBar;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityLoginBinding.inflate(getLayoutInflater());
        loginComponent=LoginComponent.getInstance(this);
        setContentView(binding.getRoot());

        final EditText usernameEditText = binding.username;
        final EditText passwordEditText = binding.password;
        final Button loginButton = binding.login;
        loadingProgressBar = binding.loading;


        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                loadingProgressBar.setVisibility(View.VISIBLE);
                loginComponent.login(new UserData(usernameEditText.getText().toString(),
                        passwordEditText.getText().toString()));
            }
        });
    }

    @Override
    public void onLoginSuccess(UserData userData) {
        String welcome = getString(R.string.welcome) + userData.getDisplayName();
        // TODO : initiate successful logged in experience
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                loadingProgressBar.setVisibility(View.INVISIBLE);
                Toast.makeText(getApplicationContext(), welcome, Toast.LENGTH_LONG).show();
            }
        });

        Intent intent = new Intent(this, Dashboard.class);
        startActivity(intent);
    }

    @Override
    public void onLoginFailure(String response) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                loadingProgressBar.setVisibility(View.INVISIBLE);
                Toast.makeText(getApplicationContext(), response, Toast.LENGTH_SHORT).show();
            }
        });

    }

}