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
        "codigoTipoVeiculo": 1,
        "codigoMarca": 26,
        "ano": "2011-1",
        "codigoTipoCombustivel": 1,
        "anoModelo": 2011,
        "codigoModelo": 4403,
        "tipoConsulta": "tradicional"
    }

}

function postFipe() {
    return axios.post("http://veiculos.fipe.org.br/api/veiculos/ConsultarValorComTodosParametros", config, content_body);
}

dados = postFipe();

dados.then((resposta) => {
    console.log(resposta.data);
}).catch((error) => {
    if (error) {
        console.log(error)
    }
})