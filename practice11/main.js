function sort(arr){
    const oddArr = [];
    const evenArr = [];
    const cleanArr = [];
    let sameNum;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number' && !cleanArr.includes(arr[i])){
            cleanArr.push(arr[i]);
            
        }
    }
    
    for(let k = 0; k < cleanArr.length; k++){
        if(cleanArr[k] % 2 === 0){
           evenArr.push(cleanArr[k]);
        } else {
            oddArr.push(cleanArr[k]);
        }
    }
    return {odd: oddArr, even: evenArr}
}