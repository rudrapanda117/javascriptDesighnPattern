/**
 * 
 * The Revealing Module Pattern (RMP) creates objects that don't behave well with respect to overriding.
 *  As a consequence, objects made using the RMP don't work well as prototypes.
 *  So if you're using RMP to create objects that are going to be used in an inheritance chain, just don't. 
 */

 // Example
 function rmpUrlBuilder(){
    var _urlBase = "http://my.default.domain/";
    var _build = function(relUrl){
      return _urlBase + relUrl;
    };
  
    return {
      urlBase: _urlBase,
      build: _build
    }
  }

  var builder = new rmpUrlBuilder();
builder.urlBase = "http://stackoverflow.com";
console.log(builder.build("/questions"); 
// prints "http://my.default.domain/questions" not "http://stackoverflow.com/questions"

// Actual 
function urlBuilder(){
    return {
      urlBase: "http://my.default.domain/".
      build: function(relUrl){ return this.urlBase + relUrl;}
    }
  }
  
  var builder = new urlBuilder();
  builder.urlBase = "http://stackoverflow.com";
  console.log(builder.build()); // prints "http://stackoverflow.com/questions"


 // correct the Revealing Module Pattern's behavior by using this scope as in the following

function rmpUrlBuilder(){
  var _urlBase = "http://my.default.domain/";
  var _build = function(relUrl){
    return this.urlBase + relUrl;
  };

  return {
    urlBase: _urlBase,
    build: _build
  }
}

// But using this defeats the purpose.