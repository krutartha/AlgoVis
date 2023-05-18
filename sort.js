const inputArray = [9, 5, 11, 5, 111, 55];
var ascending = true;

if(process.argv[2] == "descending"){
    ascending = false;
}
function compare(i, j){
    if(ascending){
        return i < j;
    }
    return i > j;
}
function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr){
    var n = arr.length;
    var didSwap = true;

    while(didSwap){
        didSwap = false;

        for(var i = 0; i < n - 1; i++){
            if(!(compare(arr[i], arr[i+1]))){
                didSwap = true;
                swap(arr, i, i+1);
            }
        }
        n--;
    }
    return arr;
}

function insertionSort(arr){
    var n = arr.length;
    for(var i = 0; i < n; i++){
        var index = i;
        var value = arr[i];
        while(index > 0 && compare(value, arr[index-1])){
            arr[index] = arr[index - 1];
            index--;
        }
        arr[index] = value;
    }
    return arr;
}

function selectionSort(arr){
    var n = arr.length;
    for(var i = 0; i < n - 1; i++){
        var indexOfMin = i;
        for(var j = i+1; j < n; j++){
            if(compare(arr[indexOfMin], arr[j])){
                indexOfMin = j;
            }
        }
        swap(arr[i], arr[indexOfMin]);
    }
    return arr;
}

function mergeSort(arr){
    var n = arr.length;
    if(n > 1){
        var mid = Math.floor(n / 2);
        var left = new Array(mid);
        for(var i = 0; i < left.length; i++){
            left[i] = arr[i];
        }
        var right = new Array(n - mid);
        for(var i = 0; i < right.length; i++){
            right[i] = arr[mid + i];
        }
        mergeSort(left);
        mergeSort(right);
        merge(left, right, arr);
    }
    return arr;
}

function merge(left, right, arr){
    var leftIndex = 0;
    var rightIndex = 0;
    for(var i = 0; i < arr.lengt; i++){
        if(rightIndex == right.length || (leftIndex < left.length && compare(left[leftIndex], right[rightIndex]))){
            arr[i] = left[leftIndex];
            leftIndex++;
        }
        else{
            arr[i] = right[rightIndex];
            rightIndex++;
        }
    }
}

function quickSort(arr){
    var n = arr.length;
    quickSort(arr, 0, n - 1);
}

function quickSort(arr, low, high){
    if(compare(low, high)){
        var pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(a, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high){
    var pivot = arr[low];
    var boundaryIndex = low + 1;
    for(var i = low; i < high; i++){
        if(compare(arr[i], pivot)){
            if (i != boundaryIndex){
                swap(arr, i, boundaryIndex);
            }
            boundaryIndex++;
        }
    }
    swap(arr, low, boundaryIndex - 1);
    return boundaryIndex - 1;
}


console.log(bubbleSort(inputArray));
console.log(insertionSort(inputArray));
console.log(selectionSort(inputArray));
console.log(mergeSort(inputArray));
console.log(quickSort(inputArray));
