/**
 * Created by shawn.zhang on 9/12/2015.
 */
(function () {
    var app = angular.module('app', [
        /*
         * Angular modules
         */
        'ngRoute',

        /*
        * all controller modules
        */
        'app.main'

    ]);

    app.config(['$routeProvider', '$locationProvider', configRoutes]);
    function configRoutes($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when('/', {
                templateUrl: '/partials/main',
                controller: 'main',
                controllerAs: 'vm'
            });
    }

})();
