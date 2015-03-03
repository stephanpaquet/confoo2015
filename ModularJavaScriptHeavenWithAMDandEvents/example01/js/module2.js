define(['module1'], function (module1ref) {
	var module1 = new module1ref();

    var returnedModule = function () {
        this.getModule1Name = function () {
            return module1.getName();
        }
    };
  
    return returnedModule;
});
