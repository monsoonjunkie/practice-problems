function character_convert(str){
    let strArr = "";
    for( let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);
        strArr = strArr + code;
    }
    return strArr;
}