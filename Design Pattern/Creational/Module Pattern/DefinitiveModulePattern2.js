var module = (function () {

    // private
    var _private = {
        privateOne: function () {},
        privateTwo: function () {},
        privateThree: function () {}
    };

    // public (set 1)
    var _public1 = {
        publicOne: _private.privateOne,
        publicTwo: _private.privateTwo
    };

    // public (set 2)
    var _public2 = {
        publicOne: _private.privateOne,
        publicThree: _private.privateThree
    };

    // configurable public scopes
    var _publics = [_public1, _public2];

    return _publics;

})();