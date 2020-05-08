var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'create': ['click_criar_pasta']
        },
        global: {}
    },
 
	criar_pasta: function() {
		console.log('criar_pasta');
    	var nome = $('#desc_pasta_' + this.instanceId).val();
    	
    	//ECMFolderService_createSimpleFolder.xml
    	
    	$.ajax({
    		url: '/TesteSoap/resources/js/xml/ECMFolderService_createSimpleFolder.xml',
    		async: false,
    		type: 'GET',
    		datatype: 'xml',
    		success: function(xml) {
    			_xml = xml;
    		}
    	});
    	
    	_xml.find('companyId').text(WCMAPI.tenantCode);
    	_xml.find('username').text('academy.aluno');
    	_xml.find('password').text('academy.aluno');
    	_xml.find('parentDocumentId').text('1');
    	_xml.find('publisherId').text('academy.aluno');
    	_xml.find('documentDescription').text(nome);
    	
    	WCMAPI.Create({
    		url: '/webdesk/ECMFolderService?wsdl',
    		contentType: 'text/xml',
    		dataType: 'xml',
    		data: _xml[0],
    		success: function(data) {
    			console.log(data);
    			FLUIGC.toast({
    				title: '',
    				message: '',
    				type: 'success'
    			});
    		}
    	});
    }

});

