const axios = require('axios')

/**
 * API response example:
 *  {
 *      "dthInicioVigencia":"01/11/2019 00:00:00",
 *      "numResolucao":"2633/2019",
 *      "vlrTEConvencional":"0.26603",
 *      "sigDistribuidora":"AmE",
 *      "vlrTUSDConvencional":"0.39881",
 *      "sigRegiao":"N ",
 *      "dthProcessamento":"13/11/2019 00:00:00",
 *      "ideTarifaFornecimento":523,
 *      "nomConcessao":"Concession�ria",
 *      "vlrTRFBrancaForaPonta":"0.58291",
 *      "sigUF":"AM",
 *      "vlrTRFBrancaPonta":"1.17862",
 *      "vlrTRFBrancaIntermediaria":"0.79389",
 *      "vlrTotaTRFConvencional":"0.66484"
 *  }
 */

async function getAllDistributors() {
    const response = await axios.default.get("http://www.aneel.gov.br/dados/relatorios?p_p_id=dadosabertos_WAR_dadosabertosportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=gerarTarifaFornecimentoResidencialJSON&p_p_col_id=column-2&p_p_col_count=1");
    const data = response.data;
    let distribuidoras = data.map(distrib => {
        return {
            distribuidora: distrib.sigDistribuidora,
            estado: distrib.sigUF,
            valorTarifaConvencional: distrib.vlrTotaTRFConvencional
        };
    });
    return distribuidoras;
}

module.exports = {
    getAllDistributors
}