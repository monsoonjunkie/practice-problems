

function countOccurences(array, word){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] === word){
            count++
        }
    }
    return count;
}

function wordLengths(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push(array[i].length);
    }
    return newArray;
}

function getMinMaxMean(array){
    var min = array[0];
    var max = array[0];
    var mean = null;
    var sum = null;
    var obj = {}
    
    for(var i = 0; i < array.length; i++){
        var currentNumber = array[i];
        
        if(currentNumber < min){
            min = currentNumber
        }
        if(currentNumber > max){
            max = currentNumber;
        }
       sum = sum + array[i];
    }
    
    mean = sum / array.length;
    
    obj.min = min;
    obj.max = max;
    obj.mean = mean;
    return obj;
}

function findMode(array){
    var maxCount = 1;
    var count = 0;
    var item;
    for (var i = 0; i<array.length; i++){
        for (var j = 0; j<array.length; j++){
                if (array[i] === array[j]){
                    count++;
                }
                if (maxCount <= count){
                maxCount = count; 
                item = array[i];
                }
        }
        count = 0;
    }
    return item;

}
