var MyWidget = SuperWidget.extend({
    dt_criacao: null,
    dt_lacracao: null,
    dt_envio: null,
    dt_devolucao: null,
    autoCompleteFornecedor: null,
    listaFornecedorAutoComplete: null,
    autoCompleteMotorista: null,
    listaMotoristaAutoComplete: null,

    //método iniciado quando a widget é carregada
    init: function () {
        var that = this;

        $(".pageTitle").parent().remove();

        dt_criacao = FLUIGC.calendar('#dt_criacao');
        dt_lacracao = FLUIGC.calendar('#dt_lacracao');
        dt_envio = FLUIGC.calendar('#dt_envio');
        dt_devolucao = FLUIGC.calendar('#dt_devolucao');

        dt_criacao.setDate(moment(new Date()).format("DD/MM/YYYY"));

        that.carregarListFornecedor();
        that.carregarListMotorista();

        autoCompleteFornecedor = FLUIGC.autocomplete('#destino', {
            source: function findMatches(q, cb) {
                var matches, substrRegex;

                matches = [];

                substrRegex = new RegExp(q, 'i');

                $.each(listaFornecedorAutoComplete, function (i, objeto) {
                    if (substrRegex.test(objeto['colleagueName'])) {
                        matches.push(objeto);
                    } else if (substrRegex.test(objeto['mail'])) {
                        matches.push(objeto);
                    } else if (substrRegex.test(objeto['login'])) {
                        matches.push(objeto);
                    }
                });
                cb(matches);
            },
            displayKey: 'colleagueName',
            tagClass: 'tag-gray',
            maxTags: 1,
            type: 'tagAutocomplete',
            tagMaxWidth: 600,
        });

        autoCompleteMotorista = FLUIGC.autocomplete('#motorista', {
            source: function findMatches(q, cb) {
                var matches, substrRegex;

                matches = [];

                substrRegex = new RegExp(q, 'i');

                $.each(listaMotoristaAutoComplete, function (i, objeto) {
                    if (substrRegex.test(objeto['colleagueName'])) {
                        matches.push(objeto);
                    } else if (substrRegex.test(objeto['mail'])) {
                        matches.push(objeto);
                    } else if (substrRegex.test(objeto['login'])) {
                        matches.push(objeto);
                    }
                });
                cb(matches);
            },
            displayKey: 'colleagueName',
            tagClass: 'tag-gray',
            type: 'tagAutocomplete',
            tagMaxWidth: 600,
        });
    },

    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },

    executeAction: function (htmlElement, event) {},

    carregarListFornecedor: function () {
        var colunas = new Array('colleagueName', 'mail', 'login');
        var colleague = DatasetFactory.getDataset('colleague', colunas, null, null);

        if (colleague && colleague.values && colleague.values.length > 0) {
            listaFornecedorAutoComplete = colleague.values;
        }
    },

    carregarListMotorista: function () {
        var colunas = new Array('colleagueName', 'mail', 'login');
        var colleague = DatasetFactory.getDataset('colleague', colunas, null, null);

        if (colleague && colleague.values && colleague.values.length > 0) {
            listaMotoristaAutoComplete = colleague.values;
        }
    }

});