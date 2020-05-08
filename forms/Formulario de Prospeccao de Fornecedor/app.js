//var _table;

//AQUI DEVEM SER IMPLEMENTADAS VALIDACOES PARA ABORTAR A EXECUCAO DA PAGINA
function initValidate() {
    return true;
}

//AQUI DEVEM SER IMPLEMENTADOS O BIND DE EVENTOS / MASCARAS
function aplicaEventos() {
    //iniciarTabelaFornecedor();
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

}

//AQUI DEVEM SER PREENCHIDOS OS CAMPOS COM VALORES DEFAULT E INICIALIZACOES PADROES PARA UM NOVO REGISTRO
function novoRegistro() {

}

// function iniciarTabelaFornecedor() {
//     _table = $('#tblFornecedor').DataTable({
//         "scrollX": true,
//         //"order": [[15, "desc"], [0, "asc"]],
//         "columns": [
//             { "data": "razao_social" },
//             { "data": "nome_fantasia" },
//             { "data": "cnpj" },
//             { "data": "telefone" },
//             { "data": "celular" }
//         ],
//         "language": {
//             "sEmptyTable": "Nenhum registro encontrado",
//             "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
//             "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
//             "sInfoFiltered": "(Filtrados de _MAX_ registros)",
//             "sInfoPostFix": "",
//             "sInfoThousands": ".",
//             "sLengthMenu": "_MENU_ resultados por página",
//             "sLoadingRecords": "Carregando...",
//             "sProcessing": "Processando...",
//             "sZeroRecords": "Nenhum registro encontrado",
//             "sSearch": "Pesquisar",
//             "oPaginate": {
//                 "sNext": "Próximo",
//                 "sPrevious": "Anterior",
//                 "sFirst": "Primeiro",
//                 "sLast": "Último"
//             },
//             "oAria": {
//                 "sSortAscending": ": Ordenar colunas de forma ascendente",
//                 "sSortDescending": ": Ordenar colunas de forma descendente"
//             },
//             "select": {
//                 "rows": {
//                     "_": "Selecionado %d linhas",
//                     "0": "Nenhuma linha selecionada",
//                     "1": "Selecionado 1 linha"
//                 }
//             }
//         }
//     });
// };

// $("#pesquisar").on("click", function () {
//     var dados = new Array(
//         new {
//             "razao_social": "Tool Service SA",
//             "nome_fantasia": "Tool Service",
//             "cnpj": "11.111.111/1111-80",
//             "telefone": "(17) 3354-0404",
//             "celular": "(17) 98186-9567"
//         },
//         new {
//             "razao_social": "Estoril Utilidades",
//             "nome_fantasia": "Estoril Utilidades",
//             "cnpj": "11.111.111/1111-80",
//             "telefone": "(17) 3354-0404",
//             "celular": "(17) 98186-9567"
//         },
//         new {
//             "razao_social": "Bom fim LTDA",
//             "nome_fantasia": "Bom fim serviços em geral",
//             "cnpj": "11.111.111/1111-80",
//             "telefone": "(17) 3354-0404",
//             "celular": "(17) 98186-9567"
//         }
//     );

//     _table.rows.add(dados).draw();
// });