function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	// Cria dataset que vai retornar login e nome dos responsaveis
	var ds = DatasetBuilder.newDataset();
	ds.addColumn("login");
	ds.addColumn("nome");
	
	// filtro grupo: coluna, valor inicio da busca e valor final da busca, tipo constraint
	var filtroGroup = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "Responsaveis", "Responsaveis", 
			ConstraintType.MUST);
	
	// acessando data set dos grupos: nome data set, colunas, filtros e ordenação
	var dsGroup = DatasetFactory.getDataset("colleagueGroup", null, new Array(filtroGroup), null);
	
	// buscando dataset de usuario, onde possui o nome
	var dsColaborador = DatasetFactory.getDataset("colleague", null, null, null);
	
	for (i = 0; i < dsGroup.rowsCount; i++) {
		var idDsGroup = dsGroup.getValue(i, "colleagueGroupPK.colleagueId");
		
		for (j = 0; j < dsColaborador.rowsCount; j++) {
			var idDsColab = dsColaborador.getValue(j, "colleaguePK.colleagueId");
			var nomeColab = dsColaborador.getValue(j, "colleagueName");
			
			if(idDsColab == idDsGroup) {
				ds.addRow(new Array(idDsColab, nomeColab));
			}
		}
	}
	
	return ds;
}
function onMobileSync(user) {

}