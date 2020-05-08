var MyWidget = SuperWidget.extend({
	datatable: null,
	nomeDataset: "dsCadastroCartaConvite",
	columnSearch: ['descricao'],
//	camposExportar: ['documentid', 'status', 'codigo', 'escritorio'],

	// CAMPOS QUE SERÃO EXIBIDOS NA TELA
	headerDatatable: [{
			'title': 'Tipo'
		}, {
			'title': 'Ordenação'
		}, {
			'title': 'Descrição'
		} , {
			'title': 'Ações'
		}
	],

	// método iniciado quando a widget é carregada
	init: function () {

		$(".pageTitle").parent().remove();

		if (!this.isEditMode) {
			this.initFastsales();
		}
	},

	// BIND de eventos
	bindings: {
		local: {
			'novo-registro': ['click_novoRegistro'],
			'edita-registro': ['click_editaRegistro'],
			'excluir-registro': ['click_excluirRegistro'],
			'download-dados-csv': ['click_downloadCSV']
		},
		global: {
			'save-modal': ['click_saveModal']
		}
	},

	initFastsales: function () {

		var ref = this;

		fastsales(ref.nomeDataset, ref.headerDatatable, null,
			function (datatable) {
				ref.datatable = datatable;

			},
			function (row) {

			}, ['descricao'], ref.columnSearch);
	},

	novoRegistro: function (htmlElement, event) {
		var ref = this;
		novo('Novo');
	},

	editaRegistro: function () {
		var ref = this;

		var row = ref.datatable.selectedRows()[0],
			data = ref.datatable
			.getRow(row);

		console.log("dados da linha: ", data);

		editar(data["metadata#id"], data["metadata#version"],
			true, 'Atualizar');

	},

	excluirRegistro: function () {
		var ref = this;
		var row = ref.datatable.selectedRows()[0],
			data = ref.datatable.getRow(row);

		console.log("dados da linha: ", data);

		excluir(data["metadata#id"], function () {

		});

	},

	saveModal: function (e) {
		var ref = this;

		salvar(true, function () {

		});
	},

	downloadCSV: function () {

		var texto = this.camposExportar.join(";");

		var dataset = DatasetFactory.getDataset(this.nomeDataset, null, null, null);

		if (dataset.values && dataset.values.length > 0) {

			var item = dataset.values;

			for (var i = 0; i < item.length; i++) {

				var linha = new Array();
				for (var e = 0; e < this.camposExportar.length; e++) {
					linha.push(item[i][this.camposExportar[e]]);
				}

				texto += '\n' + linha.join(";");

			}

		}

		let blob = new Blob([texto], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob, "escritorios.csv");

	}

});