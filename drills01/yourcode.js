
function sumArray(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
    
    
}

function fitWithinVal(array, total){
    var newArray = [];
    var sum = null;
    var i = 0;
    while(i < array.length){
        if(sum + array[i] <= total){
            sum = sum + array[i];
            newArray.push(array[i]);
            i++
        }else{
            i++;
        }
    }
    return newArray;

}

function getAllNamesShorterThan(array, lengthVal){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(array[i].length <= lengthVal){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function makeLabel(label){
    return ""+label.greeting+" "+label.givenName+" "+label.familyName+"\n"+label['home address'].streetNumber+" "+label['home address'].streetName+"\n"+label['home address'].city+","+" "+label['home address'].state+" "+label['home address'].zip;
}
