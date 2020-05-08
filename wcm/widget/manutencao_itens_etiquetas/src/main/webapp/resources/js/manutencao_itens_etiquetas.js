var MyWidget = SuperWidget.extend({
    autoCompleteItem: null,
    listaItemAutoComplete: [],

    //método iniciado quando a widget é carregada
    init: function () {
        $(".pageTitle").parent().remove();

        var that = this;
        that.carregarListItem();

        autoCompleteItem = FLUIGC.autocomplete('#item', {
            source: function findMatches(q, cb) {
                var matches, substrRegex;

                matches = [];

                substrRegex = new RegExp(q, 'i');

                $.each(listaItemAutoComplete, function (i, objeto) {
                    if (substrRegex.test(objeto['busca'])) {
                        matches.push(objeto);
                    } // else if (substrRegex.test(objeto['mail'])) {
                    //     matches.push(objeto);
                    // } else if (substrRegex.test(objeto['login'])) {
                    //     matches.push(objeto);
                    // }
                });
                cb(matches);
            },
            displayKey: 'busca',
            tagClass: 'tag-gray',
            // maxTags: 1,
            type: 'tagAutocomplete',
            tagMaxWidth: 600,
        });

        // autoCompleteItem.on('fluig.autocomplete.itemAdded', function (ev) {
        //     $('#' + campoId).val(ev.item.documentid);
        //     $('#' + campoCod).val(ev.item.codigo);
        //     var tp_convenio = ev.item.tipo.toLowerCase();
        //     $("#tp_convenio").val(tp_convenio);
        // });


        // autoCompleteItem.on('fluig.autocomplete.itemRemoved', function (ev) {
        //     $('#' + campoId).val("");
        //     $('#' + campoCod).val("");
        // });
    },

    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction'],
            'justificativa': ['click_justificativa'],
        },
        global: {}
    },

    executeAction: function (htmlElement, event) {},

    carregarListItem: function () {
        // var colunas = new Array('colleagueName', 'mail', 'login');
        // var colleague = DatasetFactory.getDataset('colleague', colunas, null, null);

        // if (colleague && colleague.values && colleague.values.length > 0) {
        //     listaItemAutoComplete = colleague.values;
        // }

        listaItemAutoComplete = [{
                busca: "1234 - Herbicida XPTO",
                codigo: "1234",
                descricao: "Herbicida XPTO"
            },
            {
                busca: "1235 - Herbicida XPTO 2",
                codigo: "1235",
                descricao: "Herbicida XPTO 2"
            }
        ];
    },

    tipoEtiqueta: function () {},

    justificativa: function () {
        var content = '<div class="row"> \n' +
            '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group"> \n' +
            '<label>Justificativa</label> \n' +
            '<textarea id="justificativa" rows="3" class="form-control" style="resize: none;"></textarea> \n' +
            '</div>' +
            '</div>';

        FLUIGC.modal({
            title: 'Encerrar',
            content: content,
            id: 'fluig-modal',
            actions: [{
                'label': 'Encerrar',
                'bind': 'data-salvar-justificativa',
                'autoClose': true
            }, {
                'label': 'Cancelar',
                'autoClose': true
            }]
        }, function (err, data) {
            if (err) {
                // do error handling
            } else {
                // do something with data
            }
        });
    },

});