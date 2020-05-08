function beforeTaskSave(colleagueId,nextSequenceId,userList){
	var temAnexoProposta = false;
	
	// Pegando os anexos
	var anexos = hAPI.listAttachments();
	
	for(i = 0; i < anexos.size(); i++){
		var anexo = anexos.get(i);
		// Pegando descrição do anexo
		if (anexo.getDocumentDescription() == "Proposta Comercial.pdf")
			temAnexoProposta = true;
	}
	
	if (temAnexoProposta == false)
		throw 'A proposta comercial não foi anexada';
}