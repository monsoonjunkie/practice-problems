function arrayReverse (arr) {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        let last = arr.pop();
        newArr.push(last);
    }
    return newArr;
}