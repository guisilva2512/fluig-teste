function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {

	var ds = DatasetBuilder.newDataset();
	
	// Cria Coluna
	ds.addColumn('produto');
	ds.addColumn('valor');
	
	// Adiciona registros
	ds.addRow(new Array('Refrigerador', 1500));
	ds.addRow(new Array('Guarda-Roupas', 2000));
	ds.addRow(new Array('Fogão', 3500));
	ds.addRow(new Array('Ferro de Passar', 100));
	ds.addRow(new Array('Máquina de lavar', 800));
	
	return ds;
}
function onMobileSync(user) {

}