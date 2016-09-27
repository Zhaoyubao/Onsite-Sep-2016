// Push Front
function pushFront(arr, val) {
    for(var i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[i] = val; //arr[0] = val;
    return arr;
}

//Pop Front
function popFront(arr) {
    var val = arr[0];
    for(var i = 0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length--;
    return val;
}

//Insert At
function insertAt(arr, idx, val) {
    for(var i = arr.length-1; i >= idx; i--) {
        arr[i+1] = arr[i];
    }
    arr[idx] = val;
    return arr;
}

//Remove At
function removeAt(arr, idx) {
    if(idx >= 0 && idx < arr.length) {
        var val = arr[idx];
        for(var i = idx; i < arr.length-1; i++) {
            arr[i] = arr[i+1];
        }
        arr.length--;
        return val;
    }
}

//Swap Pairs
function swapPairs(arr) {
    for(var i = 0; i < arr.length; i += 2) {
        if(arr[i+1]) {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
}

//Remove Duplicates
function removeDuplicates(arr) {
    var idx = 0;
    while(idx < arr.length) {
        if(arr[idx] == arr[idx+1]) {
            removeAt(arr, idx+1);
        }
        else idx += 1;
    }
    return arr;
}
function removeDuplicates2(arr) {
    var val = arr[0], idx = 1, flag = 0;
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] != val) {
            if(flag == 1) {
                arr[idx] = arr[i];
            }
            val = arr[i];
            idx += 1;
        }
        else {
            flag = 1;
            continue;
        }
    }
    arr.length = idx;   //arr.length = idx+1-1
    return arr;
}


//Min to Front
function minToFront(arr) {
    var min = arr[0];
    var minIdx = 0;
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
            minIdx = i;
        }
    }
    removeAt(arr, minIdx);
    pushFront(arr, min);
    return arr;
}

//Reverse
function reverseArr(arr) {
    for(var i = 0; i < arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

//Rotate
function rotateArr(arr, shiftBy) {
    var len = arr.length;
    var flag = counter = 0;
    var offset = shiftBy % len;
    if(offset < 0 && -offset > len/2) {
        offset = offset + len;
    }
    if(offset > 0 && offset > len/2) {
        offset = offset - len;
    }
    if(offset > 0) {
        while(offset) {
            rotateR(arr);
            counter++;
            offset--;
            flag = 1;
        }
    }
    else {
        while(offset) {
            rotateL(arr);
            counter++;
            offset++;
            flag = -1;
        }
    }
    if(flag == 1) console.log("Rotate right %d time(s).", counter);
    else if(flag == -1) console.log("Rotate left %d time(s).", counter);
    else console.log("No need to move!");
    return arr;
}

function rotateR(arr) {
    var last = arr[arr.length-1];
    for(var i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[i] = last;  //arr[0]
    return arr;
}
function rotateL(arr) {
    var first = arr[0];
    for(var i = 0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr[i] = first;  //arr[arr.length-1]
    return arr;
}

//Filter Range
function filterRange(arr, min, max) {
    var idx = 0;
    while(idx < arr.length) {
        if(arr[idx] >= min && arr[idx] <= max) {
            // removeAt(arr, idx);
            for(var i = idx; i < arr.length-1; i++) {
                arr[i] = arr[i+1];
            }
            arr.length -= 1;
        }
        else idx += 1;
    }
    return arr;
}

//Concat
function arrConcat(arr1, arr2) {
    var newArr = [];
    for(var i = 0; i < arr1.length; i++) {
        newArr[i] = arr1[i];
    }
    for(var j = 0; j < arr2.length; j++) {
        newArr[arr1.length+j] = arr2[j];
    }
    return newArr;
}

//Skyline Heights
function skylineHeights(arr) {
    var max = 0;
    var newarr = [];
    for(var i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

//Remove Negatives    removeAt(arr, idx)
function removeNegatives(arr) {
    var idx = flag = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            if(flag == -1) {
                arr[idx] = arr[i];
            }
            flag = 1;
            idx += 1;
            console.log(arr);
            console.log("Idx:", idx);
        }
        else {
            flag = -1;
            continue;
        }
    }
    arr.length = idx;   //arr.length = idx+1-1
    return arr;
}

//Nth-to-Last
function nthToLast(arr, n) {
    if(n > 0 && n <= arr.length) {
        return arr[arr.length-n];
    }
    return null;
}

//Nth-Largest
function nthLargest(arr, n) {
    var len = arr.length;
    for(var i = 0; i < len-1; i++) {
        for(var j = 0; j < len-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    if(n <= 0) return null;
    if(n == 1) return arr[len-1];
    n -= 1;
    for(var i = len-2; i >= 0; i--) {
        if(arr[i] == arr[i+1]) continue;
        n -= 1;
        if(n == 0) return arr[i];
    }
    return null;
}

//Credit Card Validation
function isCreditCardValid(digitArr) {
    // if(digitArr.length < 13 || digitArr.length > 19) return null;
    var lastVal = digitArr[digitArr.length-1];
    var sum = 0;
    digitArr.length -= 1;
    for(var i = digitArr.length-1, j = 1; i >= 0; i--, j++) {
        if(j%2 != 0) {
            digitArr[i] *= 2;
            if(digitArr[i] > 9) digitArr[i] -= 9;
        }
        sum += digitArr[i];
    }
    sum += lastVal;
    if(sum % 10 == 0) return true;
    return false;
}

//Shuffle
function shuffle(arr) {
    var len = arr.length, temp, rand;
    while(len) {
        rand = Math.floor(Math.random() * len);
        len -= 1;
        temp = arr[len];
        arr[len] = arr[rand];
        arr[rand] = temp;
    }
    return arr;
}

//Remove Range
function removeRange(arr, start, end) {
    if(start > end) {
        console.log("Wrong range!");
        return null;
    }
    for(var i = 0; i < arr.length-start; i++) {
        arr[start+i] = arr[end+1+i];
    }
    arr.length -= end-start+1;
    return arr;
}

//Intermediate Sums
function intermediateSums(arr) {
    var sum = count = 0;
    for(var i = 0; i < arr.length; i++) {
        count += 1;
        sum += arr[i];
        if(i == arr.length-1) {
            arr[arr.length] = sum;
            return arr;
        }
        if(count % 10 == 0) {
            for(var j = arr.length-1; j > i; j--) {
                arr[j+1] = arr[j];
            }
            arr[i+1] = sum;
            i += 1;
            sum = 0;
        }
    }
}

//Double Trouble
function doubleTrouble(arr) {
    for(var i = 0; i < arr.length; i += 2) {
        for(var j = arr.length-1; j >= i; j--) {
            arr[j+1] = arr[j];
        }
    }
    return arr;
}

//Zip It
function zipIt(arr1, arr2) {
    var i = j = 0;
    while(i < arr1.length && j < arr2.length) {
        for(var k = arr1.length-1; k > i; k--) {
            arr1[k+1] = arr1[k];
        }
        arr1[i+1] = arr2[j];
        j += 1;
        i += 2;
    }
    while(arr2[j]) {
        arr1[i] = arr2[j];
        i++;
        j++;
    }
    return arr1;
}
