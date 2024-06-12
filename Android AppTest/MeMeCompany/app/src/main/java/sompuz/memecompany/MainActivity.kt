package sompuz.memecompany

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import sompuz.memecompany.dashboard.Dashboard
import sompuz.memecompany.login.LoginActivity
import sompuz.memecompany.ui.theme.MeMeCompanyTheme

class MainActivity : ComponentActivity() {
    @SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MeMeCompanyTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) {
                        paddingValues ->
                    Column(
                        modifier = Modifier
                            .fillMaxSize()
                            .padding(paddingValues), // Apply Scaffold padding
                        verticalArrangement = Arrangement.Center, // Center vertically
                        horizontalAlignment = Alignment.CenterHorizontally // Center horizontally
                    ) {
                        Button(onClick = { doLogin() }) {
                            Text(text = "Login")
                        }
                    }
                };
            }
        }
    }

    private fun doLogin() {
        val intent = Intent(this, LoginActivity::class.java)
        startActivity(intent)
    }
}

