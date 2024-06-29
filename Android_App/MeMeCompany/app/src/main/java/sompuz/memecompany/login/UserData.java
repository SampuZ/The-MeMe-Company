package sompuz.memecompany.login;

public class UserData {
    String username;
    String password;

    public UserData(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getDisplayName() {
        return username;
    }
}
