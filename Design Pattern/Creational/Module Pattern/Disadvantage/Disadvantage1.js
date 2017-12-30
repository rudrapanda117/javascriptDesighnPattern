 // Difficulties re-using a public function from other public functions

 var ShoppingCart = (function () {
 
    var  items = [];
   
    return {
      printShoppingCart: function(isVerbose)
      {
        console.log("Number of items in cart: "+items.length);
        if (isVerbose)
          console.log("Items: "+items);
      },
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
   
  ShoppingCart.addItem("book");
/** 
If you execute the code above you will obtain this outcome:
	
ReferenceError: printShoppingCart is not defined

When using the module pattern, if you try to call a public function from a public function you will run into the function is not defined error.

*/
  // Solution 
  var ShoppingCart = (function () {
 
    var  items = [];
   
    return {
      printShoppingCart: function(isVerbose)
      {
        console.log("Number of items in cart: "+items.length);
        if (isVerbose)
          console.log("Items: "+items);
      },
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
   
  ShoppingCart.addItem("book");

  /**
   * If you had a module with a large number of public functions that are reused in other functions,
   *  prefixing the call with the object name can become quickly tiresome (and error inducing).
   */