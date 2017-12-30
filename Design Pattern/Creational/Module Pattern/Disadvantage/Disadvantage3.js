// We cannot add/patch public methods that reference private variables
// If we add a new public method
ShoppingCart.getNumberOfItemsInCart = function()
{
 return items.length;
}
ShoppingCart.getNumberOfItemsInCart();

// This public methos is a static method.
// As this is not in the lexical scope of private methods , this method cannot access rivate methods.
// Error  ReferenceError: items is not defined
// We can minify the impact of this issue by adding public get methods for our private variables whenever we use the module pattern to implement our modules:
var ShoppingCart = (function () {
    var items = [];
    function printShoppingCart(isVerbose) {
      console.log("Number of items in cart: "+items.length);
      if (isVerbose)
        console.log("Items: "+items);
    } return {
      getItems: function(){
        return items;
      },
      addItem: function (a) {
        items.push(a);
        printShoppingCart(false);
      },
      removeItem: function (a) {
        items.splice(items.indexOf(a),1);
        printShoppingCart(false);
      }
    };
  })(); 
   
  ShoppingCart.getNumberOfItemsInCart = function()
  {
   return ShoppingCart.getItems().length;
  }
   
  ShoppingCart.addItem("Book");
  console.log(ShoppingCart.getNumberOfItemsInCart());

  // We have to add public getter and setter for acesing the private members.


  // We can´t patch private methods
  // In the example above if there is a bug in the private method printShoppingCart, 
  ShoppingCart.printShoppingCart = function(isVerbose)
{
  console.log("New version 1.1");
}
//So far so good
ShoppingCart.printShoppingCart(true);
// But look at this:
ShoppingCart.addItem("Book");

/** 
 * We patched the printShoppingCart, except that we really did not: we have merely added a new public function called also printShoppingCart  but our addItem method is still pointing to the original private printShoppingCart.

So we now have two options: modify the original code, or patch not the private function,
 which was our original intention, but patch all the public functions that interact with the offending private function:
 */

ShoppingCart.printShoppingCart = function()
{
  console.log("New version 1.1");
  console.log("Number of items in cart: "+ShoppingCart.getItems().length);
  console.log("Items: "+ShoppingCart.getItems());
}
 
ShoppingCart.addItem = function(a)
{
  ShoppingCart.getItems().push(a);
  ShoppingCart.printShoppingCart();
}
 
ShoppingCart.removeItem = function(a)
{
  ShoppingCart.getItems().splice(ShoppingCart.getItems().indexOf(a),1);
  ShoppingCart.printShoppingCart();
}

// Seriously this is wierd