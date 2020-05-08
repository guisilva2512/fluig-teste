function validateForm(form){
	var errors = '';
	
	// teste
	// Obtendo o usuario via dataset
    //filter = new java.util.HashMap();
    //filter.put("colleaguePK.colleagueId","academy.aluno");
    //usuario = getDatasetValues('colleague',filter);
    //form.setValue('RNC_colab_abertura',usuario.get(0).get("colleaguePK.colleagueId"));
    
    //throw usuario.get(0).get("colleaguePK.colleagueId");
	
	if (form.getValue('nome') == '')
		errors += i18n.translate("validaNome"); //errors += 'Campo Nome não foi preenchido! <br>';
	if (form.getValue('email') == '')
		errors += 'Campo Email não foi preenchido! <br>';
	if (form.getValue('telefone') == '')
		errors += 'Campo Telefone não foi preenchido! <br>';
	
	// tabela pai filho, pegando qtde selecinonada
	var responsaveis = form.getChildrenIndexes('responsaveisTabela');
	if (responsaveis.length === 0)
		errors += 'Campo responsáveis não foi informado! <br>';
	
	// radio é igual 
	if (form.getValue('tipoPonto') == '')
		errors += 'Campo Tipo Ponto não foi selecionado! <br>'; 
	
	// checkbox
	if (form.getValue('segunda') != 'on' && form.getValue('terca') != 'on' && form.getValue('quarta') != 'on' && form.getValue('quinta') != 'on' 
		&& form.getValue('sexta') != 'on' && form.getValue('sabado') != 'on' && form.getValue('domingo') != 'on')
		errors += 'Campo Dias de Funcionamento não foi informado! <br>';
	
	if (errors !== '')
		throw errors;
}