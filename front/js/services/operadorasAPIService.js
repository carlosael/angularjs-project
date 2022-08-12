angular.module("listaTelefonica").factory("operadorasAPI", function ($http) {
    var _urlBase = "http://localhost:8080/operadoras";
    var _getOperadoras = function () {
        return $http.get(_urlBase);
    };
    return {
        getOperadoras: _getOperadoras
    };
});