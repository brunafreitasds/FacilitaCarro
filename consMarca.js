//1 = carros
//2 = motos
//3 = caminhões
var axios = require("axios");
var dados;

var config = {
    headers: {
        'Host': 'veiculos.fipe.org.br',
        'Referer': 'http://veiculos.fipe.org.br',
        'Content-Type': 'application/json'
    }
}

var content_body = {
    body = {
        "codigoTabelaReferencia": 231,
        "codigoTipoVeiculo": 1
    }

}

function postFipe() {
    return axios.post("http://veiculos.fipe.org.br/api/veiculos/ConsultarMarcas", config, content_body);
}

dados = postFipe();

dados.then((resposta) => {
    console.log(resposta.data);
}).catch((error) => {
    if (error) {
        console.log(error)
    }
})