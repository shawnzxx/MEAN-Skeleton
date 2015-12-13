/**
 * Created by shawn.zhang on 9/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('main', main);

    main.$inject = [];

    function main() {
        /* jshint validthis: true */
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.myVar = "Hello Angular"
        }

        
    }
})();

