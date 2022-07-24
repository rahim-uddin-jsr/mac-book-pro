// needed id's in variable
const bestPriceId = document.getElementById('best-price');
const extraMemoryCostId = document.getElementById('extra-memory-cost');
const extraStorageCostId = document.getElementById('extra-storage-cost');
const delevaryChargeId = document.getElementById('delevary-charge');
const primaryTotal = document.getElementById('primary-total');
const finalTotal = document.getElementById('final-total');

// all button events 
function button(btnId, priceId, price,) {
    document.getElementById(btnId).addEventListener('click', function () {
        document.getElementById(priceId).innerText = price;
        cuponCode();
        totalPrice();
    })
}
// total price section 
function totalPrice() {
    const bestPriceValue = parseFloat(bestPriceId.innerText);
    const extraStorageCostValue = parseFloat(extraStorageCostId.innerText);
    const extraMemoryCostValue = parseFloat(extraMemoryCostId.innerText);
    const delevaryChargeValue = parseFloat(delevaryChargeId.innerText);
    let total = bestPriceValue + extraMemoryCostValue + extraStorageCostValue + delevaryChargeValue;
    const applied20Parsent = total * 0.2;
    const AfterCuponAppliedTotal = total - applied20Parsent;
    document.getElementById('primary-total').innerText = total;
    finalTotal.innerText = total;
    return AfterCuponAppliedTotal;
}
// cupon code section 
function cuponCode() {
    document.getElementById('btn-apply').addEventListener('click', function () {
        const inputFild = document.getElementById('cupon-input').value;
        if (inputFild == 'code') {
            finalTotal.innerText = totalPrice();
        }
    })
}

// btn memory
button('btn-8gb', 'extra-memory-cost', 0);
button('btn-16gb', 'extra-memory-cost', 180);
// btn storage
button('btn-256gb', 'extra-storage-cost', 0);
button('btn-512gb', 'extra-storage-cost', 100);
button('btn-1tb', 'extra-storage-cost', 180);
// delevary charge
button('btn-aug-25', 'delevary-charge', 0);
button('btn-aug-18', 'delevary-charge', 20);
cuponCode();
memoryButton();