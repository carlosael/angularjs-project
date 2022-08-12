angular.module("listaTelefonica").factory("contatosAPI", function ($http) {
    var _urlBase = "http://localhost:8080/contatos";
    var _getContatos = function () {
        return $http.get(_urlBase);
    };
    
    var _getContato = function (id) {
        return $http.get(_urlBase + "/" + id);
    };
    var _saveContato = function (contato) {
        return $http.post(_urlBase, contato);
    };
    var _deleteContato = function (id) {
        return $http.delete(_urlBase + "/" + id);
    };
    return {
        getContatos: _getContatos,
        getContato: _getContato,
        saveContato: _saveContato,
        deleteContato: _deleteContato
    };
});