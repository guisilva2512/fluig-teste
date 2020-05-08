function beforeTaskSave(colleagueId,nextSequenceId,userList){
//	log.info("#################### ENTROU NA FUNCAO beforeTaskSafe");
//
//    //var hashControle = hAPI.getCardValue("hashControle");
//
//    //log.info("#################### hashControle: " + hashControle)
//    log.info("#################### nextSequenceId: " + nextSequenceId)
//    
//    hAPI.setCardValue("codProces", nextSequenceId);
	var codProces = getValue('WKDef	');
	var numProces = getValue('WKNumProces');
	var numAtivi = getValue('WKNumState');
	var proxAtivi = getValue('WKNextState');
	
//	var msg = 'nextSequenceId: ' + nextSequenceId + 
//	' Código do Processo: ' + codProces + 
//	' Numero processo: ' + numProces + 
//	' Numero da Atividade: ' + numAtivi + 
//	' Proxima atividade: ' + proxAtivi;
	
	hAPI.setCardValue("codProces", codProces);
	hAPI.setCardValue("numProces", numProces);
	hAPI.setCardValue("numAtivi", numAtivi);
	hAPI.setCardValue("proxAtivi", proxAtivi);
	hAPI.setCardValue("nextparam", nextSequenceId);
	
    //throw(msg);
}