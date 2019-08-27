function permutations(str){
    let permutation  = [];
    for( let i = 0; i < str.length; i++ ){
        let firstChar = str[i];
        let restStr = str.substring(0, i) + str.substring(i + 1);
        let restStrArray = restStr.split('');
        
        for(let y = 0; y < restStrArray.length; y++){

            permutation.push(firstChar + restStrArray.join(''));
            restStrArray.unshift(restStrArray.pop());
        }
    }
    return permutation;
}