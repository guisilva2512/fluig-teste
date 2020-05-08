function displayFields(form,customHTML){ 
	var codProces = getValue('WKDef	');
	var numProces = getValue('WKNumProces');
	var numAtivi = getValue('WKNumState');
	var proxAtivi = getValue('WKNextState');
	
//	form.setValue("codProces", codProces);
//	form.setValue("numProces", numProces);
//	form.setValue("numAtivi", numAtivi);
//	form.setValue("proxAtivi", proxAtivi);
	
	var interacao = 'Código do Processo: ' + codProces + 
	' Numero processo: ' + numProces + 
	' Numero da Atividade: ' + numAtivi + 
	' Proxima atividade: ' + proxAtivi;
	
	customHTML.append('<script>$("#mensagemInteracao").append("' + interacao + '")</script>');
}