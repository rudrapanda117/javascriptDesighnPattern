// You can't use inheritance with this pattern. For example:
var Obj = function(){
    //do some constructor stuff
}

var InheritingObj = function(){
    //do some constructor stuff
}

InheritingObj.prototype = new Obj();

InheritingObj.prototype.constructor = InheritingObj;

InheritingObj.prototype = (function(){
    //some prototype stuff here
}());

// which will override you inheritance.