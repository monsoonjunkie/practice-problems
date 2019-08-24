function translate(str){
    let arr1 = str.split(' ');
    let arr2 = [];
    for( let i = 0; i < arr1.length; i++){
        let strArr = arr1[i].split('');
        let firstConst = strArr.shift();
        strArr.push(firstConst, 'ay');
        let newStr = strArr.join('');
        let lowerStr = newStr.toLowerCase();
        arr2.push(lowerStr);
        
    }
    arr2[0]= arr2[0].charAt(0).toUpperCase() + arr2[0].slice(1)
    let tranStr = arr2.join(' ');
    return tranStr;
}
