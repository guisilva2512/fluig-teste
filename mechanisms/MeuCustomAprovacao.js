function resolve(process,colleague){

	var userList = new java.util.ArrayList();
//
//	userList.add('matricula_1');
//	userList.add('matricula_2');
//	userList.add('matricula_3');
	
	// Pegando campo do formulario
	var pais = "Aprovadores_" + hAPI.getCardValue("pais");
	
	// Filtrando pelo Grupo Aprovadores_pais
	userList.add('Group:' + pais);
	
	// Se for para um grupo
	userList.add('Pool:Group:' + pais);
	
	// Se for para um papel
	userList.add('Pool:Role:' + pais);

	return userList;

}