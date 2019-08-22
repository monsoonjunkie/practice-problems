

function getPath(str){
    let newArray = str.split("/");
    return newArray;
}

function getPathParts(str){
    let split = str.split('/', 3);
    let join = split.join('');
    let newsplit = join.split(':');
    let lastIndexSlash = str.lastIndexOf('/');
    var pos1 = str.indexOf("/");
    let pos2 = str.indexOf("/", pos1 + 2);
    let filepath = str.slice(lastIndexSlash+1, str.length);
    let path = str.slice(pos2 +1 , lastIndexSlash)
    let obj = {};
    obj.protocol = newsplit[0];
    obj.host = newsplit[1];
    obj.port = parseInt(newsplit[2]);
    obj.path = path;
    obj.file = filepath;
    return obj;
}

function getCapitalCount(array){
    let count = 0;
    for( let i = 0; i < array.length; i++){
        if(array[i][0] === array[i][0].toUpperCase()){
            count++;
        }
    }
    return count;
}

function correctCalcChecker(array){
    let correctCal = [];
    for( let i = 0; i < array.length; i++){
        let result = doMath(array[i]);
        if(array[i].result === result){
            correctCal.push(array[i]);
        }
    }
    return correctCal;
}

function doMath(obj){
    if(obj.op === "+"){
        let result = obj.num1 + obj.num2;
        return result;
    }
    if(obj.op === "-"){
        let result = obj.num1 - obj.num2;
        return result;
    }
    if(obj.op === "*"){
        let result = obj.num1 * obj.num2;
        return result;
    }
    if(obj.op === "/"){
        let result = obj.num1 / obj.num2;
        return result;
    }
}
