// Star Art & Character Art
function drawLeftStars(num,char) {
    var chars = "";
    for(var i = 1; i <= 75; i++) {
        chars += (i <= num) ? char : "=";
    }
    console.log(chars);
}
function drawRightStars(num,char) {
    var chars = "";
    for(var i = 1; i <= 75; i++) {
        chars += (i > 75-num) ? char : "=";
    }
    console.log(chars);
}
function drawCenteredChars(num,char) {
    var chars = "";
    for(var i = 1; i <= 75; i++) {
        chars += ( i > Math.floor((10-num)/2) && i <= num+Math.floor((10-num)/2) ) ? char : "=";
    }
    console.log(chars);
}

// Generate Coin Change
function generateCoinChange(cents) {
    var q = 0,
        d = 0,
        n = 0,
        p = 0;
    console.log(cents+" cents can be represented by:");
    if(cents > 25) {
        q = Math.floor(cents/25);
        cents = cents % 25;
    }
    if(cents > 10) {
        d = Math.floor(cents/10);
        cents = cents % 10;
    }
    if(cents > 5) {
        n = Math.floor(cents/5);
        cents = cents % 5;
    }
    p = cents;
    console.log("\tquarters:\t",q);
    console.log("\tdimes:\t\t",d);
    console.log("\tnickels:\t",n);
    console.log("\tpennies:\t",p);
}

// Messy Math Mashup
function messyMath(num) {
    var sum = 0;
    for(var i = 1; i <= num; i++) {
        if(i == num/3) return -1;
        else {
            if(i % 3 == 0) continue;
            if(i % 7 == 0) sum += i;
        }
        sum += i;
    }
    console.log("Sum:", sum);
}

// Fibonacci
function fibonacci(num) {
    var fib0 = 0;
    var fib1 = 1;
    for(var i = 1; i <= num-1; i++) {
        var temp = fib1;
        fib1 = fib0 + fib1;
        fib0 = temp;
    }
    console.log("fibonacci(%d) = %d", num, fib1);
}

//Sum to One Digit
//MSD
function sumToOne(num) {
    var one = num;
    while(one >= 10) {
        var n = digitsNum(one);
        num = one;
        one = 0;
        for(var i = 0; i < n; i++) {
            one += Math.floor(num/Math.pow(10, i)) % 10;
        }
        console.log("one:", one);
    }
    return one;
}
function digitsNum(num) {
    var counter = 0;
    while(num != 0) {
        num = Math.floor(num / 10);
        counter ++;
    }
    return counter;
}
// LSD
function sumToOne2(num) {
    while(1) {
        var one = 0;
        while(num > 0) {
            one += num % 10;
            console.log(num%10);
            num = Math.floor(num / 10);
        }
        if(one >= 10) {
            num = one;
            console.log("one:", one);
        }
        else {
            console.log("one:", one);
            break;
        }
    }
}

// Clock HAnd Angles
function clockHandAngles(seconds) {
    var hour = 30, min = 6, sec = 6;
    var hourPerMin = 0.5, hourPerSec = 1/120, minPerSec = 0.1;
    var hourHandDeg = 0, minHandDeg = 0, secHandDeg = 0;
    if(seconds >= 3600*12) {
        seconds = seconds % 43200;
    }
    if(seconds >= 3600) {
        hourHandDeg += Math.floor(seconds / 3600) * hour;
        seconds = seconds % 3600;
    }
    if(seconds >= 60) {
        minHandDeg += Math.floor(seconds / 60) * min;
        hourHandDeg += Math.floor(seconds / 60) * hourPerMin;
        seconds = seconds % 60;
    }
    secHandDeg = seconds * sec;
    minHandDeg += seconds * minPerSec;
    hourHandDeg += seconds * hourPerSec;
    hourHandDeg = Math.round(hourHandDeg*1000) / 1000;
    console.log("Hour hand: %f degs. Minute hand: %f degs. Second hand: %d degs.", hourHandDeg, minHandDeg, secHandDeg);
}

//Extract-o-matic
function extractDigit(num, digitNum) {
    return Math.floor(num/Math.pow(10, digitNum)) % 10;
}

//Most Significant digit
function msd(num) {
    if(num != 0) {
        if(num < 0) num = -num;
        while(Math.floor(num) == 0) {
            num *= 10;
        }
        while(Math.floor(num) >= 10) {
            num = Math.floor(num / 10);
        }
        console.log("MSD is:", Math.floor(num));
    }
    else return console.log("No MSD!");
}

//Gaming Fun
function rollOne() {
    return Math.floor(Math.random()*6 + 1);
}

function playFives(num) {
    for(var i = 0; i < num; i++) {
        var dice = rollOne();
        console.log(dice);
        if(dice == 5) console.log("That's good luck!");
    }
}

function playStatistics() {
    var max = min = rollOne();
    for(var i = 0; i < 7; i++) {
        var dice = rollOne();
        if(dice > max) max = dice;
        if(dice < min) min = dice;
    }
    console.log("The lowest value: %d\tThe highest value:%d", min, max);
}

function playStatistics2() {
    var max = min = sum = rollOne();
    for(var i = 0; i < 7; i++) {
        var dice = rollOne();
        sum += dice;
        if(dice > max) max = dice;
        if(dice < min) min = dice;
    }
    console.log("The lowest value: %d\tThe highest value:%d\nThe total sum of all eight rolls: %d", min, max, sum);
}

function playStatistics3(num) {
    if(num <= 0) return console.log("Invalid roll number!");
    num = Math.floor(num);
    var max = min = sum = rollOne();
    for(var i = 0; i < num-1; i++) {
        var dice = rollOne();
        sum += dice;
        if(dice > max) max = dice;
        if(dice < min) min = dice;
    }
    console.log("The lowest value: %d\tThe highest value:%d\nThe total sum of all %d rolls: %d", min, max, num, sum);
}

function playStatistics4(num) {
    if(num <= 0) return console.log("Invalid roll number!");
    num = Math.floor(num);
    var max = min = sum = rollOne();
    console.log(sum);
    for(var i = 0; i < num-1; i++) {
        var dice = rollOne();
        console.log(dice);
        sum += dice;
        if(dice > max) max = dice;
        if(dice < min) min = dice;
    }
    console.log("The lowest value: %d\tThe highest value:%d\nThe average of all %d rolls: %f", min, max, num, sum/num);
}

// Statistics Until Doubles
function statsDoubles() {
    var arr = [];
    for(var i = 0; i < 21; i++) arr[i] = 0;
    var sum = min = max = rand = roll();
    console.log(rand);
    arr[rand] += 1;
    var counter = 1;
    while(true) {
        rand = roll();
        if(arr[rand] == 1) {
            console.log("Number of rolls: %d\nMin: %d\tMax: %d\tAvg: %f", counter, min, max, sum/counter);
            break;
        }
        console.log(rand);
        arr[rand] += 1;
        counter += 1;
        sum += rand;
        if(rand > max) max = rand;
        if(rand < min) min = rand;
    }
}
function roll() {
    return Math.floor(Math.random()*20+1);
}

// Date, on a Deserted Island
function weekdayName(weekdayNum) {
    var weekday = "";
    switch (weekdayNum) {
        case 1:
            weekday = "Sunday";
            break;
        case 2:
            weekday = "Monday";
            break;
        case 3:
            weekday = "Tuesday";
            break;
        case 4:
            weekday = "Wednesday";
            break;
        case 5:
            weekday = "Thursday";
            break;
        case 6:
            weekday = "Friday";
            break;
        case 7:
            weekday = "Saturday";
            break;
    }
    console.log(weekday);
}

function monthName(monthNum) {
    var month = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    console.log(month[monthNum]);
}

function dayToMonth(dayNum) {
    var monthName = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var monthDay = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    for(var i = 1; i <= 12; i++) {
        dayNum -= monthDay[i];
        if(dayNum <= 0) {
            console.log(monthName[i]);
            break;
        }
    }
}

function fullDate(dayNum) {
    var weekName = ['Sat','Sun','Mon','Tue','Wed','Thur','Fri'];
    var monthName = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var monthDay = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    var num = dayNum;
    for(var i = 1; i <= 12; i++) {
        var day = num;
        num -= monthDay[i];
        if(num <= 0) {
            console.log('%s, %s %d, 2017',weekName[dayNum%7], monthName[i], day);
            break;
        }
    }
}

function fullDate2(dayNum) {
    var year = 2017;
    var weekName = ['Sat','Sun','Mon','Tue','Wed','Thur','Fri'];
    var monthName = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var monthDay = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    var num = dayNum;
    while(1) {
        if(year % 4 == 0) monthDay[2] = 29;
        else monthDay[2] = 28;
        for(var i = 1; i <= 12; i++) {
            var day = num;
            num -= monthDay[i];
            if(num <= 0) {
                console.log('%s, %s %d, %d',weekName[dayNum%7], monthName[i], day, year);
                return null;
            }
        }
        if(i == 13) year += 1;
    }
}

function fullDate3(dayNum) {
    var year = 2017;
    var weekName = ['Sat','Sun','Mon','Tue','Wed','Thur','Fri'];
    var monthName = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var monthDay = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    var num = dayNum;
    while(1) {
        if((year%4 == 0 && year%100 != 0) || year%400 == 0) monthDay[2] = 29;
        else monthDay[2] = 28;
        for(var i = 1; i <= 12; i++) {
            var day = num;
            num -= monthDay[i];
            if(num <= 0) {
                console.log('%s, %s %d, %d',weekName[dayNum%7], monthName[i], day, year);
                return null;
            }
        }
        if(i == 13) year += 1;
    }
}
