// document.getElementById('sub-btn').addEventListener('click',function(){
//     const inputFielddata = getInputFieldValueById('count-items');
//     const inputdataPlus = inputFielddata- 1;
    
//     setInputFieldValueById('count-items', inputdataPlus);
    
//     // set price
    
// })

// document.getElementById('add-btn').addEventListener('click',function(){
//     const inputFielddata = getInputFieldValueById('count-items');
//     const inputdataPlus = inputFielddata + 1;
    
//     setInputFieldValueById('count-items', inputdataPlus);
//     const priceOfMobile = getTextElementValueByid('per-price')
    
//     const totalPriceOfMobile = inputdataPlus * priceOfMobile;
   

//     setTextElementValueById('total-price', totalPriceOfMobile);
// })


function decrement(countItems){
    const inputFielddata = getInputFieldValueById(countItems);
    const inputdataPlus = inputFielddata- 1;
    
    setInputFieldValueById(countItems, inputdataPlus);
    
    // set price
    
}

function encrement(countItems, perPrice, totalPrice){
    const inputFielddata = getInputFieldValueById(countItems);
    const inputdataPlus = inputFielddata + 1;
    
    setInputFieldValueById(countItems, inputdataPlus);
    const priceOfMobile = getTextElementValueByid(perPrice)
    
    const totalPriceOfMobile = inputdataPlus * priceOfMobile;
   

    setTextElementValueById(totalPrice, totalPriceOfMobile);

}




    

