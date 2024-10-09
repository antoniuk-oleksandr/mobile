package com.example.lab1.handlers

import android.app.Activity
import android.widget.Button
import com.example.lab1.utils.ButtonState
import com.example.lab1.viewmodels.MainViewModel

class MainButtonHandler(
    private val activity: Activity,
    private val viewModel: MainViewModel
) {

    fun handleButtonClick(buttonId: Int, buttonState: ButtonState) {
        activity.findViewById<Button>(buttonId).setOnClickListener {
            viewModel.changeButtonState(buttonState)
        }
    }
}