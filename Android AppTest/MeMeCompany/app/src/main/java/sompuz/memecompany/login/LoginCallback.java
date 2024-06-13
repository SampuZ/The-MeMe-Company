package sompuz.memecompany.login;

public interface LoginCallback {
    void onLoginSuccess(UserData userData);
    void onLoginFailure(String response);
}
