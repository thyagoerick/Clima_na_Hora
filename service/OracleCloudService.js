import axios from 'axios'

const oracleCloudInstance = axios.create({
  baseURL: 'https://g4cd95dfc23d355-b5ncinu4ob8cj7tf.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin',
  headers: {'Content-Type': 'application/json'}
})


export const armazenarNoHistorico = (item) => {
  return oracleCloudInstance.post('/fatec_ipi_202022_pdm_noite_tb_historico/', item)
}

export const obterHistorico = () => {
  return oracleCloudInstance.get('/fatec_ipi_202022_pdm_noite_tb_historico/')
}