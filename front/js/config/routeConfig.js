angular.module("listaTelefonica").config(function ($routeProvider) {
  $routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
		controller: "listaTelefonicaCtrl",
		resolve: {
			contatos: function (contatosAPI) {
				return contatosAPI.getContatos();
			}
		}
	});

  $routeProvider.when("/novoContato", {
    templateUrl: "view/novoContato.html",
    controller: "novoContatoCtrl",
    resolve: {
      operadoras: function (operadorasAPI) {
        return operadorasAPI.getOperadoras();
      }
    }
  });

  $routeProvider.when("/detalhesContato", {
    templateUrl: "view/novoContato.html",
    controller: "novoContatoCtrl",
    resolve: {
      operadoras: function (operadorasAPI) {
        return operadorasAPI.getOperadoras();
      }
    }
  });

  $routeProvider.otherwise({redirectTo: "/contatos"});
});