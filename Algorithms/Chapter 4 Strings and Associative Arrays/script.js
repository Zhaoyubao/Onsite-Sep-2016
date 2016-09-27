//Remove Blanks
function removeBlanks(str) {
    var newStr = "";
    for(var i = 0; i < str.length; i++) {
        if(str[i] != " ") newStr += str[i];
    }
    return newStr;
}

function removeBlanks2(str) {
    return str.split(" ").join("");
}

//Get Digits
function getDigits(str) {
    var num = "";
    for(var i = 0; i <str.length; i++) {
        if(str[i] >= '0' && str[i] <= '9') num += str[i];
    }
    console.log(num);
    return Number(num);
}

//Acronyms
function acronyms(str) {
    var acronyms = "";
    var strArr = str.split(" ");
    for(var i = 0; i < strArr.length; i++) {
        if(strArr[i][0])  acronyms += strArr[i][0].toUpperCase();
    }
    return acronyms;
}

//Count Non-Spaces
function countNonSpaces(str) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] != " ") count++;
    }
    return count;
}

//Remove shorter Strings
function removeShorterStr(strArr, val) {
    var i = 0;
    while(i < strArr.length) {
        if(strArr[i].length < val) {
            for(var j = i; j < strArr.length-1; j++) {
                strArr[j] = strArr[j+1];
            }
            strArr.length -= 1;
            continue;
        }
        i += 1;
    }
    return strArr;
}

//Reverse
function reverse(str) {
    var strArr = str.split("");
    for(var i = 0; i < strArr.length/2; i++) {
        var temp = strArr[i];
        strArr[i] = strArr[strArr.length-1-i];
        strArr[strArr.length-1-i] = temp;
    }
    return strArr.join("");
}

//Remove Even-Length Strings
function removeEvenLenStrs(strArr) {
    var idx = 0;
    while(idx < strArr.length) {
        if(strArr[idx].length % 2 == 0) {
            for(var i = idx; i < strArr.length-1; i++) {
                strArr[i] = strArr[i+1];
            }
            strArr.length -= 1;
        }
        else idx += 1;
    }
    return strArr;
}

//Integer to Roman Numerals
function intToRomanNum(int) {
    if(int < 1 || int > 3999) return console.log("Invalid Integer!");
    var romanNum = "";
    var char = [
        ["","I","II","III","IV","V","VI","VII","VIII","IX"],
        ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
        ["","M","MM","MMM"]
    ];
    for(var i = 3; i >= 0; i--) {
        var c = char[i][Math.floor(int/Math.pow(10, i)) % 10];
        if(c) {
            romanNum += c;
        }
    }
    return romanNum;
}

//Parens Valid
function parensValid(str) {
    var valid = count = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] == "(") {
            valid += 1;
            count++;
        }
        if(str[i] == ")") {
            valid -= 1;
            count++;
        }
        if(valid < 0) return false;
    }
    if(!count) {
        console.log("No parentheses!");
        return null;
    }
    return (valid == 0);
}

//Braces valid
function bracesValid(str) {
    var paren = brace = bracket = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] == "(") paren += 1;
        if(str[i] == ")") {
            paren -= 1;
            if(paren == 0 && (bracket != 0 || brace != 0 )) return false;
        }
        console.log("Paren:",paren);
        if(str[i] == "[") bracket += 1;
        if(str[i] == "]") {
            bracket -= 1;
            if(bracket == 0 && (paren != 0 || brace != 0 )) return false;
        }
        console.log("Bracket:", bracket);
        if(str[i] == "{") brace += 1;
        if(str[i] == "}") {
            brace -= 1;
            if(brace == 0 && (paren != 0 || bracket != 0 )) return false;
        }
        console.log("Brace:", brace);
        if(paren < 0 || bracket < 0 || brace < 0) return false;
    }
    return (paren == 0 && bracket == 0 && brace == 0);
}

//Is Palindrome
//First: Do not ignore spaces,punctuation,capitalization
function isPalindrome(str) {           //Using built-in functions
    var  reverseStr = str.split('').reverse().join('');
    return reverseStr === str;
}
function isPalindrome2(str) {
    for(var i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length-1-i]) {
            return false;
        }
    }
    return true;
}
//Second: Do ignore spaces,punctuation,capitalization
function isPalindrome3(str) {         //Using RegExp
    var clearStr = str.toLowerCase().replace(/[^a-z]/g, '');
    for(var i = 0; i < clearStr.length/2; i++) {
        if(clearStr[i] !== clearStr[clearStr.length-1-i]) {
            return false;
        }
    }
    return true;
}
function isPalindrome4(str) {
    var i = 0, j = str.length-1, flag = false;
    str = str.toLowerCase();
    while(i < j) {
        if(str[i] < 'a' || str[i] > 'z') {
            i += 1;
            continue;
        }
        if(str[j] < 'a' || str[j] > 'z') {
            j -= 1;
            continue;
        }
        if(str[i] !== str[j]) {
            flag = false;
            break;
        }
        i += 1;
        j -= 1;
        flag = true;
    }
    return flag;
}

//Longest Palindrome
