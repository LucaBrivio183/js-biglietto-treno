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








