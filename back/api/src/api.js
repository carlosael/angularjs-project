var router = require("./router");

var app = router(8080);

var contatos = [
  {serial: 'PQS2(', nome: "Pedro gurgel", telefone: "99998888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
  {serial: '234E%', nome: "ana furtado", telefone: "99998877", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
  {serial: '654GT', nome: "Maria DE PAULA", telefone: "99998866", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];

var operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular", preco: 100},
    {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 120},
    {nome: "Tim", codigo: 41, categoria: "Celular", preco: 110},
    {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 60},
    {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 40}
  ];

  app.get("/contatos", function(req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
  });

  app.post("/contatos", function(req, res) {
    var contato = req.body;
    contatos.push(JSON.parse(contato));
    res.end();
  });

  app.options("/contatos", function(req, res) {
    res.end();
  });

  app.get("/operadoras", function(req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
  });
