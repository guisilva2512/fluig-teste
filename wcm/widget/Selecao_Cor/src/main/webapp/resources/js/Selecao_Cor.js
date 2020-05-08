var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	
    	if (this.isEditMode) { // modo edição
    		var settings = {
        		    changeDelay: 200,
        		    control: 'wheel',
        		    defaultValue: '#58595b',
        		    inline: false,
        		    letterCase: 'lowercase',
        		    opacity: true,
        		    position: 'bottom left',
        		    customColorNames: {
        		        'mycustomcolor': '#123456'
        		    }
        		} 
        		var myColorPicker = FLUIGC.colorpicker('#colorpicker-example-generic', settings);
    	} else { // modo exibição
    		//alert('Estou no modo de visualização');
    	}
    	
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction'],
            'save': ['click_save']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    },
    
    save: function (){
    	var args = {};
    	args.cor = $('#colorpicker-example-generic', this.DOM).val();
    	
    	// recebendo api do fluig, para gravar as informações dentro da pagina de edit, 
    	// com base na instancia
    	var result = WCMSpaceAPI.PageService.UPDATEPREFERENCES({async:false}, this.instanceId, args);
    	
    	if (result){
    		WCMC.messageInfo(result.message);
    	} else {
    		WCMC.messageError('Error');
    	}
    }

});

