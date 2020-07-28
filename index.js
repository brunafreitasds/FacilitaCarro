var mongoose = require("mongoose");
var axios = require("axios");
var db = mongoose.connection;
//var dbSearch = require("./dbSearch").dbSearch;
//var dbErase = require("./dbErase").dbErase;

//All calls out of the server
mongoose.connect(
    `mongodb+srv://1234:2801@teste-axios.7h7gv.mongodb.net/teste-axios?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
    function (err) {
        if (err) throw err;

        console.log("Successfully connected");
    }
);

//dbErase();

var config = {
    headers: {
        'Host': 'veiculos.fipe.org.br',
        'Referer': 'http://veiculos.fipe.org.br',
        'Content-Type': 'application/json'
    }
}

var data = {
    "codigoTabelaReferencia": 231,
    "codigoTipoVeiculo": 1,
    "codigoMarca": 26,
    "ano": "2011-1",
    "codigoTipoCombustivel": 1,
    "anoModelo": 2011,
    "codigoModelo": 4403,
    "tipoConsulta": "tradicional"

}

axios
    .post(
        "http://veiculos.fipe.org.br/api/veiculos/ConsultarValorComTodosParametros", data, config
    )
    .then(function (response) {
        console.log(response.data);
        var valor = response.data.Valor;
        var marca = response.data.Marca;
        var modelo = response.data.Modelo;
        var anoModelo = response.data.AnoModelo;
        var combustivel = response.data.Combustivel;
        var codigoFipe = response.data.CodigoFipe;
        var mesReferecia = response.data.MesReferecia;
        var autenticacao = response.data.Autenticacao;
        var tipoVeiculo = response.data.TipoVeiculo;
        var siglaCombustivel = response.data.SiglaCombustivel;
        var dataConsulta = response.data.DataConsulta;

        atualizaBanco(valor, marca, modelo, anoModelo, combustivel, codigoFipe, mesReferecia,
            autenticacao, tipoVeiculo, siglaCombustivel, dataConsulta);

    })
    .catch(function (error) {
        console.log(error);
    });

var repSchema = mongoose.Schema({
    valor: String,
    Marca: String,
    modelo: String,
    anoModelo: Number,
    combustivel: String,
    codigoFipe: String,
    mesReferencia: String,
    autenticaçao: String,
    tipoVeiculo: Number,
    siglaCombustivel: String,
    dataConsulta: String
});
var Data2 = mongoose.model("Data2", repSchema);

function atualizaBanco(valor, marca, modelo, anoModelo, combustivel,
    codigoFipe, mesReferecia, autenticacao, tipoVeiculo,
    siglaCombustivel, dataConsulta) {
    var upData = new Data2();
    upData.valor = valor;
    upData.marca = marca;
    upData.modelo = modelo;
    upData.anoModelo = anoModelo;
    upData.combustivel = combustivel;
    upData.codigoFipe = codigoFipe;
    upData.mesReferecia = mesReferecia;
    upData.autenticaçao = autenticacao;
    upData.tipoVeiculo = tipoVeiculo;
    upData.siglaCombustivel = siglaCombustivel;
    upData.dataConsulta = dataConsulta;

    upData.save();
}

//dbSearch(Data);