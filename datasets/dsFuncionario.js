
function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var ds = DatasetBuilder.newDataset();
	
	ds.addColumn("BUSCA");
	ds.addColumn("matricula");
	ds.addColumn("nome");
	
	
	ds.addRow(new Array("000776 - Guilherme Silva", "000776", "Guilherme Silva"));
	return ds;
}
function onMobileSync(user) {

}