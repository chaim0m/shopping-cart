var STORAGE_ID = 'shoppingCart';
var saveToLocalStorage = function () {
    localStorage.setItem(STORAGE_ID, JSON.stringify(cart));
}
// Get filled array or empty array if none exists from LS
var getFromLocalStorage = function () {
    return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
}
// Populating cart from LS
var cart = getFromLocalStorage();
var cart = []; // an array with all of our cart items
// var idgenerator = 0;
var total = 0;
// var freq = 1;
// var isIn = true;
// var freq = $(this).closest('.card.item').data().freq;
var source = $('#cartinfo').html();
var template = Handlebars.compile(source);
var updateCart = function() {
  $('.cart-list').contents().remove();
  $('.total').contents().remove();
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    var newHTML = template(cart[i]);
    $('.cart-list').append(newHTML);
    total += cart[i].freq * cart[i].price;
    saveToLocalStorage();
  }
  $('.total').append(total);

  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}
// var total = function() {
//   let sum = 0;
//   for (let i = 0; i < length.cart; i++) {
//     sum += cart[i].freq * cart[i].price;
//   }
//   return sum
// }
// function findItem(itemName) {
//   for (let i = 0; i < cart.length; i++) {
//     if (itemName == cart[i].name) {
//       return cart[i];
//     }
//   }
//   return null;

// return -1 if the item is not in the list
// return i
// }
// var addItem = function(name,id,price) {
//   var item = findItem(name);
//
//   if (item == null) {
//     var newItem = {
//       id: id,
//       name: name,
//       price: price
//     };
//     cart.push(newItem);
//     newItem.freq = freq;
//     totalArray.push(item.price);
//   } else {
//       item.freq++;
//       totalArray.push(item.price);
//   }
//
// }

// adds item AND checks frequency of items inserting it into key 'freq' of item object.

var addItem = function(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item.name === cart[i].name) {
      cart[i].freq += 1;
      saveToLocalStorage();
      return;
    }
  }
  cart.push(item)
  saveToLocalStorage();
}
var clearCart = function() {
  cart = [];
  saveToLocalStorage();
  // totalArray = [];
  $('.cart-list').contents().remove();
  $('.total').contents().remove();
  $('.total').text('0');
  // TODO: Write a function that clears the cart ;-)
}

$('.view-cart').on('click', function() {
  $('.shopping-cart').toggle();
  // TODO: hide/show the shopping cart!
});

$('.add-to-cart').on('click', function() {
  var name = $(this).closest('.card.item').data().name;
  var price = $(this).closest('.card.item').data().price;
  // var id = idgenerator++;
  var item = {
    name: name,
    price: price,
    freq: 1
  };


  // TODO: get the "item" object from the page
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function() {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
