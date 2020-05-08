var _xml;

$('#avalidarCandidato').on('click', function () {
    $.ajax({
        async: false,
        type: "GET",
        dataType: "xml",
        url: "xml/ECMWorkFlowEngineService_simpleStartProcess.xml",
        success: function (xml) {
            console.log(xml);
            _xml = $(xml);
        }
    });

    // vou colocar pelo text pois ao editar ele mostra como span e nao input
    // _xml.find("[name=nome]").text($("#nome").val());
    // _xml.find("[name=email]").text($("#email").val());
    // _xml.find("[name=perfil]").text($("#perfil").val());
    // _xml.find("[name=linkedin]").text($("#linkedin").val());

    _xml.find("[name=nome]").text($("#nome").text());
    _xml.find("[name=email]").text($("#email").text());
    _xml.find("[name=perfil]").text($("#perfil").text());
    _xml.find("[name=linkedin]").text($("#linkedin").text());


    // como é um formulario que esta dentro do iframe, a api será acessada via seu parent
    // no caso do widget nao precisei
    parent.WCMAPI.Create({
        url: '/webdesk/ECMWorkflowEngineService?wsdl',
        contentType: 'text/xml',
        dataType: 'xml',
        data: _xml[0],
        success: function(data) {
            console.log(data);
            FLUIGC.toast({
                title: 'Processo iniciado!',
                message: 'Continue a avaliação de ' + $("#nome").text(),
                type: 'info'
            });
        }
    });
});