// an array with all of our cart items
var cart = [];
var idgenerator = 0;
var source = $('#cartinfo').html();
var template = Handlebars.compile(source);
var updateCart = function () {
  for (let i = 0; i < cart.length; i++) {
        var newHTML = template(cart[i]);
        $('.shopping-cart').append(newHTML);
    }
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}


var addItem = function (item) {
  cart.push(item);
  // TODO: Write this function. Remember this function has nothing to do with display.
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
}

var clearCart = function () {
  $('#cartinfo').find('div').remove();
  // TODO: Write a function that clears the cart ;-)
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
});

$('.add-to-cart').on('click', function () {
  var name = $('.add-to-cart').closest('.card item').data().name;
  var price = $('.add-to-cart').closest('.card item').data().price;
  var id = idgenerator++;
  var item = {id: id, name: name, price: price};

  // TODO: get the "item" object from the page
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
