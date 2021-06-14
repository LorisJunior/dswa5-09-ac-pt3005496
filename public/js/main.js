angular.module('ifsp', ['ngRoute', 'ngResource']).config(function($routeProvider) {
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    });

    $routeProvider.when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });

    $routeProvider.otherwise({redirectTo: '/contatos'});

    $routeProvider.when('/cursos', {
        templateUrl: 'partials/cursos.html',
        controller: 'CursosController'
    });

    $routeProvider.when('/curso/:cursoId', {
        templateUrl: 'partials/curso.html',
        controller: 'CursoController'
    });

    $routeProvider.otherwise({redirectTo: '/cursos'});

    $routeProvider.when('/contato', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });

    $routeProvider.when('/curso', {
        templateUrl: 'partials/curso.html',
        controller: 'CursoController'
    });

});

