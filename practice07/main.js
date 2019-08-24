function translate(str){
    let arr1 = str.split(' ');
    let arr2 = [];
    for( let i = 0; i < arr1.length; i++){
        let strArr = arr1[i].split('');
        let firstConst = strArr.shift();
        strArr.push(firstConst, 'ay');
        let newStr = strArr.join('');
        arr2.push(newStr);
        
    }
    arr[0].charAt(0).toUpperCase();
    
    let tranStr = arr2.join(' ');
    return tranStr;
}