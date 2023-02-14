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
    const inputdataPlus = inputFielddata - 1;
    
    setInputFieldValueById(countItems, inputdataPlus);
     
    
}

function encrement(countItems, perPrice, totalPrice, totalAmount){
    const inputFielddata = getInputFieldValueById(countItems);
    const inputdataPlus = inputFielddata + 1;
    
    setInputFieldValueById(countItems, inputdataPlus);
    const priceOfMobile = getTextElementValueByid(perPrice)
    
    const totalPriceOfMobile = inputdataPlus * priceOfMobile;
   

    setTextElementValueById(totalPrice, totalPriceOfMobile);

   const totalAmountNumber = getTextElementValueByid(totalAmount);
   const total = totalAmountNumber + priceOfMobile;
   setTextElementValueById(totalAmount, total);

}

document.getElementById("btn-Apply").addEventListener('click', function(){
    const promo = document.getElementById('promo-code');
    const promoString = promo.value;
    const shipingCost = 10;

    if(promoString == 'discount'){
        const total = getTextElementValueByid('total-amount');
        const sum = total * 0.1;
        const sumMinusDiscount = total- sum;
        const addSumShipingCost = sumMinusDiscount + shipingCost;
        
        setTextElementValueById("total-final", addSumShipingCost);
    }
    else(
        alert('invalid promo Code')
    )
    
   
})




    

