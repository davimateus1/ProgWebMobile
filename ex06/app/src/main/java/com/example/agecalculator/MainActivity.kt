package com.example.agecalculator

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.agecalculator.databinding.ActivityMainBinding
import java.util.*

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.calculateButton.setOnClickListener { calculateAge() }
    }

    fun calculateAge(){
        val stringInTextFieldDay = binding.day.text.toString()
        val stringInTextFieldMonth = binding.month.text.toString()
        val stringInTextFieldYear = binding.year.text.toString()

        val day = stringInTextFieldDay.toIntOrNull()
        val month = stringInTextFieldMonth.toIntOrNull()
        val year = stringInTextFieldYear.toIntOrNull()

        val cal = Calendar.getInstance()
        val dayNow = cal.get(Calendar.DAY_OF_MONTH)// current day
        val monthNow = cal.get(Calendar.MONTH) // current month
        val yearNow = cal.get(Calendar.YEAR) // current year

        if (day == null || month == null || year == null) {
            binding.ageResult.text = ""
            return
        }

        var age = yearNow - year
        if (monthNow < month - 1) {
            age -= 1
        }else if(dayNow < day){
            age -= 1
        }

        var ageFormatted = age.toString()
        binding.ageResult.text = getString(R.string.age_result, ageFormatted)
    }
}