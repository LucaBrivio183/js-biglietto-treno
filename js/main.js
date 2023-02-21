//strict rules

'use strict'

//define standard price for Km

let standardKmPrice = 0.21;

//define 20% discounted price for Km for minors

let discountMinors = 20/100;

let minorsKmPrice = standardKmPrice * (1 - discountMinors);

//define 40% discounted price for Km for over 65

let discountOld = 40/100;

let oldKmPrice = standardKmPrice * (1 - discountOld);

//define kms from user prompt

let userKm = Number(prompt('How long is your trait (Km)?'));

if (isNaN(userKm)) {
    alert('It is not a number'); 
} 

//define age from user prompt

let userAge = Number(prompt('What is your age?'));

if (isNaN(userAge)) {
    alert('It is not a number'); 
} 

//calc and show right ticked price

let userTicketPrice = userKm * standardKmPrice;

if ( userAge < 18) {
    userTicketPrice = userKm * minorsKmPrice;
} else if ( userAge >= 65 ) {
    userTicketPrice = userKm * oldKmPrice;
}

//show final ticket price

document.querySelector('h1').innerHTML = `${userTicketPrice.toFixed(2)} €`









