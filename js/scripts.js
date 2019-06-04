"use strict";

//import {RomanNumeral} from './RomanNumeralConverter.js';
console.log('js here')
let inputField = document.getElementById("numb");

let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener('click', function () { submit(inputField.value) });

let btnClear = document.getElementById("btnClear");
btnClear.addEventListener('click', clear);


function submit(val) {
    console.log('submit');
    //Check for whole number, no decimals, and is between 1 and 9999.
    if (isNaN(val) || val < 1 || val > 9999 || val.indexOf(".") != -1 ) {
        inputField.value = 'Input not valid';
    } else {
        inputField.value = convertNumberToRoman(val);
    }   
}

function convertNumberToRoman(num) {
    let numString = new String(num);
    let thousands = 0;
    let hundreds = 0;
    let tens = 0;
    let ones = 0;
    let romanNumeral = "";
    let result = "";
    
    switch(numString.length) {
        case 4:
            thousands = parseInt(numString[0]);
            hundreds = parseInt(numString[1]);
            tens = parseInt(numString[2]);
            ones = parseInt(numString[3]);
            break;
        case 3:
            hundreds = parseInt(numString[0]);
            tens = parseInt(numString[1]);
            ones = parseInt(numString[2]);
            break;
        case 2:
            tens = parseInt(numString[0]);
            ones = parseInt(numString[1]);
            break;
        case 1:
            ones = parseInt(numString[0]);
            break;
    }

    /************************************************ Thousands Column *******************************/
    if (thousands > 0)
    {
        result = (function (thousands) {
        let romanValue = "";
        switch(thousands)
            {
                case 1:
                    romanValue = "M";
                    break;
                case 2:
                    romanValue = "MM";
                    break;
                case 3:
                    romanValue = "MMM";
                    break;
                case 4:
                    romanValue = "MMMM";
                    break;
                case 5:
                    romanValue = "MMMMM";
                    break;
                case 6:
                    romanValue = "MMMMMM";
                    break;
                case 7:
                    romanValue = "MMMMMMM";
                    break;
                case 8:
                    romanValue = "MMMMMMMM";
                    break;
                case 9:
                    romanValue = "MMMMMMMMM";
                    break;
            }
        
            return romanValue;
        }) (thousands);

        romanNumeral += result;
    } 

    /************************************************ Hundreds Column *******************************/
    if (hundreds > 0)
    {
        result = (function (hundreds) {
            let romanValue = "";
            switch(hundreds)
                {
                    case 1:
                        romanValue = "C";
                        break;
                    case 2:
                        romanValue = "CC";
                        break;
                    case 3:
                        romanValue = "CCC";
                        break;
                    case 4:
                        romanValue = "CD";
                        break;
                    case 5:
                        romanValue = "D";
                        break;
                    case 6:
                        romanValue = "DC";
                        break;
                    case 7:
                        romanValue = "DCC";
                        break;
                    case 8:
                        romanValue = "DCCC";
                        break;
                    case 9:
                        romanValue = "CM";
                        break;
                }
    
            return romanValue;
        }) (hundreds);

        romanNumeral += result;
    } 

    /************************************************ Tens Column *******************************/
    if (tens > 0)
    {
        result = (function (tens) {
            let romanValue = "";
            switch(tens)
                {
                    case 1:
                        romanValue = "X";
                        break;
                    case 2:
                        romanValue = "XX";
                        break;
                    case 3:
                        romanValue = "XXX";
                        break;
                    case 4:
                        romanValue = "XL";
                        break;
                    case 5:
                        romanValue = "L";
                        break;
                    case 6:
                        romanValue = "LX";
                        break;
                    case 7:
                        romanValue = "LXX";
                        break;
                    case 8:
                        romanValue = "LXXX";
                        break;
                    case 9:
                        romanValue = "XC";
                        break;
                }
            
            return romanValue;
        }) (tens);
        
        romanNumeral += result; 
    } 

    /************************************************ Ones Column *******************************/
    if (ones > 0)
    {
        result = (function (ones) {
            let romanValue = "";
            
            switch(ones)
                {
                    case 1:
                        romanValue = "I";
                        break;
                    case 2:
                        romanValue = "II";
                        break;
                    case 3:
                        romanValue = "III";
                        break;
                    case 4:
                        romanValue = "IV";
                        break;
                    case 5:
                        romanValue = "V";
                        break;
                    case 6:
                        romanValue = "VI";
                        break;
                    case 7:
                        romanValue = "VII";
                        break;
                    case 8:
                        romanValue = "VIII";
                        break;
                    case 9:
                        romanValue = "IX";
                        break;
                }
                
            return romanValue;
        }) (ones);
        
        romanNumeral += result;  
    } 

    return romanNumeral;
}


function clear() {
    console.log('clear')
    inputField.value = '';
 }

