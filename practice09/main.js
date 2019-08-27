function fittingWords(str, arr){
    let newArr = [];
    const strArr ={};

    for(let k = 0; k < str.length; k++){
        
        if(strArr[str[k]]){
            strArr[str[k]]++;
        } else {
            strArr[str[k]] = 1;
        }

    }
    const strKeyLength = Object.keys(strArr).length;
    
    for( let i = 0; i < arr.length; i++){
        let tempStrObj = {...strArr,counter:0};

        for(let y = 0; y < arr[i].length; y++){

            let KeyVal = arr[i][y];
            if(tempStrObj[KeyVal]){
                
                tempStrObj[KeyVal]--;
                if(!tempStrObj[KeyVal]){
                    delete tempStrObj[KeyVal];
                    tempStrObj.counter++;
                }
            }
        }

        if(tempStrObj.counter >= strKeyLength){
            newArr.push(arr[i]);
        }   
    }
    return newArr;
}

