function afterTaskSave(colleagueId,nextSequenceId,userList){
	var codProces = getValue('WKDef	');
	var numProces = getValue('WKNumProces');
	var numAtivi = getValue('WKNumState');
	var proxAtivi = getValue('WKNextState');

	log.info("####### AFTER TASK SAVE ######");
	log.info('afterTaskSave');
	log.info('Código do processo: '+codProces);
	log.info('Número da solicitação do processo:'+numProces);
	log.info('Numero da atividade: '+numAtivi);
	log.info('Número da proxima atividade: '+proxAtivi);
}