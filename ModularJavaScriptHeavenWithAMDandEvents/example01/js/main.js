// Load modules and use them
require(['module1', 'module2'], function(module1ref, module2ref){
    // do something with the loaded modules    
    var module1 = new module1ref(),
		module2 = new module2ref();

	console.log(module1.getName() === module2.getModule1Name()); // true
});
