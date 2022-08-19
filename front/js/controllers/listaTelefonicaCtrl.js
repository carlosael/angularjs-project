angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, serialGenerator, contatosAPI) {
  $scope.app = "Lista Telefonica";
  $scope.contatos = [];
  
  var carregarContatos = function () {
    contatosAPI.getContatos().then(function (response) {
      var generateSerial = function (contatos) {
        contatos.forEach(function (item) {
          item.serial = serialGenerator.generate();
        });
      };
      generateSerial(response.data);
      $scope.contatos = response.data;
    }).catch(function (response) {
      $scope.error = "Não foi possível carregar os dados.";
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
   
})