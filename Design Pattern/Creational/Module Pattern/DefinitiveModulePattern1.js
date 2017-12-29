var module = (function () {

    // private
    var _private = {
        privateOne: function () {},
        privateTwo: function () {}
    };

    // public
    var _public = {
        publicOne: _private.privateOne,
        publicTwo: _private.privateTwo
    };

    return _public;

})();

