package com.example.lab1

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import com.example.lab1.handlers.MainButtonHandler
import com.example.lab1.viewmodels.MainViewModel
import com.example.lab1.observers.MainButtonObserver
import com.example.lab1.utils.ButtonState

class MainActivity : AppCompatActivity() {
    private lateinit var viewModel: MainViewModel
    private lateinit var mainButtonHandler: MainButtonHandler
    private lateinit var mainButtonObserver: MainButtonObserver

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        viewModel = ViewModelProvider(this)[MainViewModel::class.java]

        mainButtonHandler = MainButtonHandler(this, viewModel)
        mainButtonHandler.handleButtonClick(R.id.button_green, ButtonState.GREEN)
        mainButtonHandler.handleButtonClick(R.id.button_yellow, ButtonState.YELLOW)
        mainButtonHandler.handleButtonClick(R.id.button_red, ButtonState.RED)

        mainButtonObserver = MainButtonObserver(this, viewModel)
        mainButtonObserver.observeButtonState()
    }
}