var Grafico = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	
    	//dados primeiro exemplo fixo
//    	var data = {
//    		    labels: ["Janeiro", "Fevereiro", "Março", "Abil", "Maio", "Junho", "Julho", "Agosto", "Setembro"],
//    		    datasets: [
//    		        {
//    		            label: "My First dataset",
//    		            fillColor: "rgba(220,220,220,0.5)",
//    		            strokeColor: "rgba(220,220,220,0.8)",
//    		            highlightFill: "rgba(220,220,220,0.75)",
//    		            highlightStroke: "rgba(220,220,220,1)",
//    		            data: [65, 59, 80, 81, 56, 55, 40, 24, 56]
//    		        },
//    		        {
//    		            label: "My Second dataset",
//    		            fillColor: "rgba(151,187,205,0.5)",
//    		            strokeColor: "rgba(151,187,205,0.8)",
//    		            highlightFill: "rgba(151,187,205,0.75)",
//    		            highlightStroke: "rgba(151,187,205,1)",
//    		            data: [28, 48, 40, 19, 86, 27, 90, 24, 56]
//    		        }
//    		    ]
//    		};
    	
    	// Buscando dataset do grafico
    	var ds = DatasetFactory.getDataset('dsGrafico', null, null, null);
    	
    	var labels = [];
    	var dados = [];    	
    	
    	for (i = 0; i < ds.values.length; i++) {
    		labels[i] = ds.values[i].produto;
    		dados[i] = ds.values[i].valor;
    	}
    	
    	var data = {
    		    labels: labels,
    		    datasets: [
    		        {
    		            label: "My First dataset",
    		            fillColor: "rgba(220,220,220,0.5)",
    		            strokeColor: "rgba(220,220,220,0.8)",
    		            highlightFill: "rgba(220,220,220,0.75)",
    		            highlightStroke: "rgba(220,220,220,1)",
    		            data: dados
    		        }
    		    ]
    		};
    	
    	var chart = FLUIGC.chart('#grafico_barras_' + this.instanceId, {
    	    id: 'grafico_barras_conteudo_' + this.instanceId,
    	    width: '700',
    	    height: '200',
    	    /* See the list of options */
    	});

    	// call the bar function
    	//var options = "";
    	var barChart = chart.bar(data, "");
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});

