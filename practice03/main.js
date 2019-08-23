function groupArray(arr){
    let numArr = [];
    let strArr = [];
    let booArr = [];
    let groupArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number'){
            numArr.push(arr[i]);
        }
        if(typeof arr[i] === 'string') {
            strArr.push(arr[i]);
        }
        if(typeof arr[i] === 'boolean') {
            booArr.push(arr[i]);
        }
    }
    groupArr.push(strArr, numArr, booArr);
    return groupArr;
}