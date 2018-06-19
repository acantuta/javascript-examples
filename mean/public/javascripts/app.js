angular.module('NgApp', []);
angular.module('NgApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.message = "Hello World";
}

