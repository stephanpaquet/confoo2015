define([], function () {
    var returnedModule = function () {
        var _name = 'module1 name';
        this.getName = function () {
            return _name;
        }
    };
 
    return returnedModule;
 
});
