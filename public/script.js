var cart = []; // an array with all of our cart items
var idgenerator = 0;
var total = 0;
var freq = 1;
var isIn = true;
// var freq = $(this).closest('.card.item').data().freq;
var source = $('#cartinfo').html();
var template = Handlebars.compile(source);
var updateCart = function() {
  $('.cart-list').contents().remove();
  $('.total').contents().remove();

  for (let i = 0; i < cart.length; i++) {
    var newHTML = template(cart[i]);
    total += cart[i].price;
    $('.cart-list').append(newHTML);

  }
  $('.total').append(total);

  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}

function findItem(itemName) {
  for (let i = 0; i < cart.length; i++) {
    if (itemName == cart[i].name) {
      return cart[i];
    }
  }
  return null;

  // return -1 if the item is not in the list
  // return i
}
var addItem = function(name,id,price) {
  var item = findItem(name);

  if (item == null) {
    var newItem = {
      id: id,
      name: name,
      price: price
    };
    cart.push(newItem);
    newItem.freq = freq;
  } else {
      item.freq++;
  }

}
}
// adds item AND checks frequency of items inserting it into key 'freq' of item object.


var clearCart = function() {
  cart = [];
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
  var id = idgenerator++;


  // TODO: get the "item" object from the page
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function() {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
