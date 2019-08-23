function biggerWords (str, arr){
    let newArr = [];
    for( let i = 0; i < arr.length; i++){
        if(str.length < arr[i].length){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}