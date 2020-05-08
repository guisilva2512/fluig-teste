var filterTransportadora;
var filterMotorista;
var filterFornecedor;

//AQUI DEVEM SER IMPLEMENTADAS VALIDACOES PARA ABORTAR A EXECUCAO DA PAGINA
function initValidate() {
    return true;
}

$('.nav, .nav-tabs a[href="#dados_coleta"]').tab('show');

//AQUI DEVEM SER IMPLEMENTADOS O BIND DE EVENTOS / MASCARAS
function aplicaEventos() {
    FLUIGC.switcher.init('#banca_coberta');
    FLUIGC.switcher.init('#banca_sem_cobertura');
    FLUIGC.switcher.init('#chao_forrado');
    FLUIGC.switcher.init('#no_solo');

    FLUIGC.switcher.init('#branca_escorr_agua');
    FLUIGC.switcher.init('#clara_umida');
    FLUIGC.switcher.init('#creme_seca');
    FLUIGC.switcher.init('#marrom_seca');
    FLUIGC.switcher.init('#escura_seca');

    FLUIGC.switcher.init('#folha_galho_semente');
    FLUIGC.switcher.init('#terra_arreia');
    FLUIGC.switcher.init('#plastico_caixa_copos');
    FLUIGC.switcher.init('#borracha_luva_elastico');
    FLUIGC.switcher.init('#fibras_nylo_cord_tec');
    FLUIGC.switcher.init('#metais');
    FLUIGC.switcher.init('#pedra_mat_constr');
    FLUIGC.switcher.init('#cern_fitil');
    FLUIGC.switcher.init('#latex_coag_tamb');
    FLUIGC.switcher.init('#outros');

    FLUIGC.switcher.init('#folha_galho_semente_for');
    FLUIGC.switcher.init('#terra_arreia_for');
    FLUIGC.switcher.init('#plastico_caixa_copos_for');
    FLUIGC.switcher.init('#borracha_luva_elastico_for');
    FLUIGC.switcher.init('#fibras_nylo_cord_tec_for');
    FLUIGC.switcher.init('#metais_for');
    FLUIGC.switcher.init('#pedra_mat_constr_for');
    FLUIGC.switcher.init('#cern_fitil_for');
    FLUIGC.switcher.init('#latex_coag_tamb_for');
    FLUIGC.switcher.init('#outros_for');
}

//AQUI DEVEM SER IMPLEMENTADO A FUNCAO PARA GUARDAR OS VALORES ANTES DO CARREGAMENTO POIS SERAO RESTAURADOS NO RESTAURAVALORES
function guardaValores() {

}

//AQUI DEVEM SER IMPLEMENTADOS OS CARREGAMENTOS DE DATASETS PARA PREENCHER SELECTS E AUTOCOMPLETES
//NAO DEVERA SER SETADO NENHUM VALOR PADRAO O MESMO DEVE SER FEITO NO METODO NOVO REGISTRO
//NAO DEVERA SER RESTAURADO NENHUM VALOR O MESMO DEVERA SER FEITO NO RESTAURA VALORES APOS O CARREGAMENTO
function preencheDados() {

}

//AQUI DEVE SER RESTAURADOS OS DADOS GUARDADOS NO GUARDA VALORES
function restauraValores() {

}

//AQUI DEVEM SER RESTAURADOS OS ESTADOS DA TELA, COMO EXIBIR OU OCULTAR ELEMENTOS
function restauraEstados(novoRegistro) {

    FLUIGC.switcher.isReadOnly('#banca_coberta', true);
    FLUIGC.switcher.isReadOnly('#banca_sem_cobertura', true);
    FLUIGC.switcher.isReadOnly('#chao_forrado', true);
    FLUIGC.switcher.isReadOnly('#no_solo', true);

    FLUIGC.switcher.isReadOnly('#branca_escorr_agua', true);
    FLUIGC.switcher.isReadOnly('#clara_umida', true);
    FLUIGC.switcher.isReadOnly('#creme_seca', true);
    FLUIGC.switcher.isReadOnly('#marrom_seca', true);
    FLUIGC.switcher.isReadOnly('#escura_seca', true);

    FLUIGC.switcher.isReadOnly('#folha_galho_semente', true);
    FLUIGC.switcher.isReadOnly('#terra_arreia', true);
    FLUIGC.switcher.isReadOnly('#plastico_caixa_copos', true);
    FLUIGC.switcher.isReadOnly('#borracha_luva_elastico', true);
    FLUIGC.switcher.isReadOnly('#fibras_nylo_cord_tec', true);
    FLUIGC.switcher.isReadOnly('#metais', true);
    FLUIGC.switcher.isReadOnly('#pedra_mat_constr', true);
    FLUIGC.switcher.isReadOnly('#cern_fitil', true);
    FLUIGC.switcher.isReadOnly('#latex_coag_tamb', true);
    FLUIGC.switcher.isReadOnly('#outros', true);
}

//AQUI DEVEM SER PREENCHIDOS OS CAMPOS COM VALORES DEFAULT E INICIALIZACOES PADROES PARA UM NOVO REGISTRO
function novoRegistro() {

}