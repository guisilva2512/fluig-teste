function afterTaskSave(colleagueId,nextSequenceId,userList){
	var codProces = getValue('WKDef	');
	var numProces = getValue('WKNumProces');
	var numAtivi = getValue('WKNumState');
	var proxAtivi = getValue('WKNextState');

    // Informações do form no formato de Map do Java
    //var cardData = hAPI.getCardData(numProces);
    //log.info(cardData);
	log.info('Código do processo: '+codProces);
	log.info('Número da solicitação do processo:'+numProces);
	log.info('Numero da atividade: '+numAtivi);
	log.info('Número da proxima atividade: '+proxAtivi);

    //var jsonString = JSONUtil.toJSON(cardData);

    // Informações do form no formato JSON
    //var jsonObject = JSON.parse(jsonString);
    //log.dir(jsonObject);
}