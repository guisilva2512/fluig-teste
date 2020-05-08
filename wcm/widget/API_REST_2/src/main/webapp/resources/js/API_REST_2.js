var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	var _this = this;
    	var _json = null;
    	
    	$.ajax({
    		url: "/api/public/ecm/document/listDocument/0",
    		async: false,
    		type: "GET",
    		dataType: "json",
    		success: function(retorno){
    			_json = retorno;
    			
    			$.each(_json.content, function(key, value){
    				$('#lista_diretorio_' + _this.instanceId).append('<option value="' + value.id + '">' + value.description + '</option>');
    			});
    		}
    	});
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction'],
            'carrega-diretorio' : ['change_fnCarrega']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    },
    
    fnCarrega: function () {
    	var _this = this;
    	var _jsaon = null;
    	
    	var id = $('#lista_diretorio_' + _this.instanceId).val();
    	$.ajax({
    		url: "/api/public/ecm/document/listDocument/" + id,
    		async: false,
    		type: "GET",
    		dataType: "json",
    		success: function(retorno){
    			_json = retorno;
    			
    			$('.diretorio').remove();
    			var qtde = _json.content.length;
    			$('#badge_diretorio_' + _this.instanceId).text(qtde);
    			
    			$.each(_json.content, function(key, value){
    				$('#relacionar_diretorio_' + _this.instanceId).append('<li class="list-group-item diretorio">' + value.description + '</li>');
    			});
    		}
    	});
    }

});

