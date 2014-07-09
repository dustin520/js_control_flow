
var data = require("./products.json")

var count = 0; 
// Write your solutions below

// 1.) The `kind` of results you're are dealing  are `shopping#products`. 
// Go through the `items` and find all results that have `kind` of 
// `shopping#product`. How many are there? Where else is this count 
// information stored in the search results?


// for(var i = 0; i < data.items.length; i++) {
// 	if(data.items[i]['kind'] === "shopping#product") {
// 		count++; 
// 	}
// };

// console.log(count); 

// The count is stored in the json file under itemsPerPage, 
// currentItemCount.
// "itemsPerPage": 25,
//  "currentItemCount": 25,

// 2.) Find all items with a `backorder` availability in `inventories`.

for(var i = 0; i < data.items.length; i++) {
	if (data.items[i]['product'].inventories[0]['availability'] === 'backorder') {
		console.log(data.items[i]['product'].title);
	};
};


// 3.) Find all items with more than one image link.


// 4.) Find all `canon` products in the items (careful with case sensitivity).

// 5.) Find all `items` that have **product** **author** **name** of "eBay" 
// and are brand "Canon".

// 6.) Print all the products with their **brand**, **price**, and a **image 
// link**


// console.log(data["items"]);






