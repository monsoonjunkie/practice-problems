function fibSequence(length){
    let first = 0
    let second = 1;
    let sum = 0
    let sequence = '0 1'
    
    if(length === 0){ //conditional for first number
      return '0';
    
    }else if(length === 1){ //conditional for second number
      
      return sequence;
    
    }else{

      for( i = 3; i <= length ; i++){ //conditional for 3rd number and on
        
        sum = first + second;
        first = second;
        second = sum;
        sequence = sequence + ' '+ sum
    }
      return sequence;
    }
}

