angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI) {
  $scope.app = "Lista Telefonica";
  
  var carregarContatos = function () {
    contatosAPI.getContatos().then(function (response) {
      $scope.contatos = response.data;
    }).catch(function (response) {
      $scope.error = "Não foi possível carregar os contatos";
    });
  };  

  var carregarOperadoras = function () {
    operadorasAPI.getOperadoras().then(function (response) {
      $scope.operadoras = response.data;
    });
  };  
  
  $scope.contatos = [];
  
  $scope.adicionarContato = function (contato) {
    contato.data = new Date();
    contatosAPI.saveContato(contato).then(function (response) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    });
  };
  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato;
    });
  };
  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    })
  };
  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };
  $scope.classe1 = "selecionado";
  $scope.classe2 = "negrito";
  carregarContatos();  
  carregarOperadoras();
})