

function populateRecords(array){
    console.log(array);
    let charge = 0;
    let cashAdvance = 0;
    let headingCont = $("<div>").addClass('transactionRecord');
    let typeH = $("<div>").text('TYPE').addClass('transactionType');
    let typeS = $("<div>").text('SOURCE').addClass('transactionLocation');
    let typeA = $("<div>").text('AMOUNT').addClass('transactionAmount');
    let heading = headingCont.append(typeH, typeS, typeA);
    let main = $('#testArea').append(heading);
    for(let i = 0; i < array.length; i++){
        let typeC = $("<div>").text(array[i].type).addClass("transactionType");
        let typeP = $("<div>").text(array[i].source).addClass("transactionLocation");
        let typeCost = $("<div>").text(array[i].amount).addClass("transactionAmount");
        let row = $('<div>').addClass("transactionRecord").append(typeC, typeP, typeCost);
        main.append(row);
        if(array[i].type === "charge"){
            charge += parseFloat(array[i].amount);
        }
        if(array[i].type === "cash advance"){
            cashAdvance += parseFloat(array[i].amount);
        }
    };
    
    return { charge: charge, 'cash advance': cashAdvance };

    




}


