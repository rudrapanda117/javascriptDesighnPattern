// It´s difficult to change the visibility of the methods

// If we change the visibility one function
var ShoppingCart = (function () {
 
    var  items = [];
   
    function printShoppingCart(isVerbose)
      {
        console.log("Number of items in cart: "+items.length);
        if (isVerbose)
          console.log("Items: "+items);
      }
   
    return {
      addItem: function (a) {
        items.push(a);
        ShoppingCart.printShoppingCart(false);
      },
      removeItem: function (a)
      {
        items.splice(items.indexOf(a),1);
        ShoppingCart.printShoppingCart(false);
      }
    };
    })();
  ShoppingCart.addItem("Book");

  // If we run this , we will get As you may have guessed the snippet above results in an error again:
  // ReferenceError: items is not defined

  // Solution 
  var ShoppingCart = (function () {
 
    var  items = [];
   
    function printShoppingCart(isVerbose)
      {
        console.log("Number of items in cart: "+items.length);
        if (isVerbose)
          console.log("Items: "+items);
      }
   
    return {
      addItem: function (a) {
        items.push(a);
        printShoppingCart(false);
      },
      removeItem: function (a)
      {
        items.splice(items.indexOf(a),1);
        printShoppingCart(false);
      }
    };
    })();
  ShoppingCart.addItem("Book");

  // Now we have to have different approch for getting reference to private function and public function