angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator, $location) {
  $scope.app = "Lista Telefonica";
  $scope.contatos = [];
  $scope.operadoras = []; 

  var carregarOperadoras = function () {
    operadorasAPI.getOperadoras().then(function (response) {
      $scope.operadoras = response.data;
    });
  };  
  
  $scope.adicionarContato = function (contato) {
    contato.serial = serialGenerator.generate();
    contatosAPI.saveContato(contato).then(function (response) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      $location.path("/contatos");
    });
  };
 
  carregarOperadoras();
})