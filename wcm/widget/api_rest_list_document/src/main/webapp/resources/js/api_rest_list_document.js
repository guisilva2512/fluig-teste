var listDocument = SuperWidget.extend({
    message: null,

    init: function () {
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

    bindings: {
        local: {
            'show-message': ['click_showMessage'],
            'carrega-diretorio' : ['change_fnCarrega']
        }
    },

    showMessage: function () {
        $div = $('#helloMessage_' + this.instanceId);
        $message = $('<div>').addClass('message').append(this.message);
        $div.append($message);
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
    },
    
});