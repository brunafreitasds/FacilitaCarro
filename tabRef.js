var axios = require("axios");
var dados;

var config = {
    headers: {
        'Host': 'veiculos.fipe.org.br',
        'Referer': 'http://veiculos.fipe.org.br',
        'Content-Type': 'application/json'
    }
}

function postFipe() {
    return axios.post("http://veiculos.fipe.org.br/api/veiculos/ConsultarTabelaDeReferencia", config);
}

dados = postFipe();

dados.then((resposta) => {
    console.log(resposta.data);
}).catch((error) => {
    if (error) {
        console.log(error)
    }
})