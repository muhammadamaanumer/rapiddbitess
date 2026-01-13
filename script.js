
function togglePaymentFields() {
    let paymentDetails = document.getElementById('paymentDetails');
    let deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;
    
    if (deliveryMethod === 'online') {
        paymentDetails.style.display = 'block';
    } else {
        paymentDetails.style.display = 'none'; 
    }
}

function processCheckout() {
    let deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    
    let checkoutError = document.getElementById('checkoutError');
    
    if (name === '' || address === '' || phone === '') {
        checkoutError.style.display = 'block';
        return;
    }

    if (deliveryMethod === 'online') {
        let cardNumber = document.getElementById('cardNumber').value;
        let expiryDate = document.getElementById('expiryDate').value;
        let cvv = document.getElementById('cvv').value;

        if (cardNumber === '' || expiryDate === '' || cvv === '') {
            checkoutError.style.display = 'block';
            return;
        }
    }

    checkoutError.style.display = 'none';
    alert("Your order has been placed successfully!");

    window.location.href = 'thankyou.html';
}
