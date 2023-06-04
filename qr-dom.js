//Get reference from to the DOM elements
const counterDiv = document.querySelector('.counter');
const btnIncrement = document.querySelector('#incrementBtn');
const btnDecrement = document.querySelector('#decrementBtn');

//Factory instance
let queR = Qr();

//Events

// btnIncrement.addEventListener('click', function(){
//     queR.increment();
//     counterDiv.innerHTML = queR.value();
// });

btnDecrement.addEventListener('click', function(){
    queR.decrement();
    counterDiv.innerHTML = queR.value();
});


//QR scanner

function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
    queR.increment();
    counterDiv.innerHTML = queR.value();
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);