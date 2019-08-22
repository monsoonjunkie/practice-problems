

function changeElements(convert){
    
    $(convert).each(function(){
    let current = $(this);
    if( current.text() === 'one'){
        return current.text(1);
    }
    else if( current.text() === 'two'){
        return current.text(2);
    }
    else if( current.text() === 'three'){
        return current.text(3);
    }
    else if( current.text() === 'four'){
        return current.text(4);
    }
    else if( current.text() === 'five'){
        return current.text(5);
    }
    else if( current.text() === 'six'){
        return current.text(6);;
    }
    else if( current.text() === 'seven'){
        return current.text(7);
    }
    else if( current.text() === 'eight'){
        return current.text(8);
    }
    else if( current.text() === 'nine'){
        return current.text(9);
    }
    else {
        return undefined;
    
    }
    });

}

function appendTextToElement(selector, appendText){
    $(selector).each(function(){
        let current = $(this);
        let currentText = current.text();
        return current.text(currentText + appendText);
    })
}

function addClass(str1, str2){
    let eleChangeCount = 0;
    $(str1).each(function(){
        let current = $(this);
        current.addClass(str2);
        eleChangeCount++;
        return;
        
    });
    return eleChangeCount;
}

function removeElements(selector){
    $(selector).remove();
}

