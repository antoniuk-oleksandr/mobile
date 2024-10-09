package com.example.lab1.viewmodels

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.lab1.utils.ButtonState

class MainViewModel : ViewModel() {
    private val _buttonState = MutableLiveData<ButtonState>()
    val buttonState: LiveData<ButtonState> get() = _buttonState

    init {
        _buttonState.value = ButtonState.NOTHING
    }

    fun changeButtonState(newButtonState: ButtonState){
        _buttonState.value = newButtonState
    }
}