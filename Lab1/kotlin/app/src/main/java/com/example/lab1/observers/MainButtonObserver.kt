package com.example.lab1.observers

import android.widget.TextView
import androidx.core.content.ContextCompat
import com.example.lab1.MainActivity
import com.example.lab1.R
import com.example.lab1.viewmodels.MainViewModel
import com.example.lab1.utils.ButtonState

class MainButtonObserver(
    private val activity: MainActivity,
    private val viewModel: MainViewModel
) {
    private val map = hashMapOf(
        ButtonState.GREEN to Pair(R.string.textview_text_green, R.color.green),
        ButtonState.YELLOW to Pair(R.string.textview_text_yellow, R.color.yellow),
        ButtonState.RED to Pair(R.string.textview_text_red, R.color.red),
        ButtonState.NOTHING to Pair(R.string.textview_text, R.color.black),
    )

    fun observeButtonState() {
        viewModel.buttonState.observe(activity) { buttonState ->
            val textView: TextView = activity.findViewById(R.id.textView)

            val pair = map[buttonState]

            if (pair != null) {
                textView.setText(pair.first)
                textView.setTextColor(ContextCompat.getColor(activity, pair.second))
            }
        }
    }
}
