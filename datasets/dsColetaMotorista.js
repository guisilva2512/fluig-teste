
function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var ds = DatasetBuilder.newDataset();
	
	ds.addColumn("ZZ4_COLETA");
	ds.addColumn("ZZ1_TRANSP");
	ds.addColumn("ZZ1_VEICUL");
	ds.addColumn("ZZ1_MOTORI");
	ds.addColumn("ZZ1_DTCOLE");
	ds.addColumn("ZZ4_PROPRI");
	ds.addColumn("ZZ4_FORNEC");
	ds.addColumn("ZZ4_NOMFOR");	
	
	ds.addRow(new Array("033965", "000107", "000016", "000060", "20190918", "PROPRIEDADE1", "000776", "FORNECEDOR 1.1"));
	ds.addRow(new Array("033965", "000107", "000016", "000060", "20190918", "PROPRIEDADE1", "000777", "FORNECEDOR 1.2"));
	ds.addRow(new Array("033965", "000107", "000016", "000060", "20190918", "PROPRIEDADE1", "000778", "FORNECEDOR 1.3"));
	ds.addRow(new Array("033965", "000107", "000016", "000060", "20190918", "PROPRIEDADE1", "000779", "FORNECEDOR 1.4"));
	ds.addRow(new Array("033965", "000107", "000016", "000060", "20190918", "PROPRIEDADE1", "000780", "FORNECEDOR 1.5"));
	
	ds.addRow(new Array("098658", "000160", "000056", "000152", "20190918", "PROPRIEDADE2", "000781", "FORNECEDOR 2.1"));
	ds.addRow(new Array("098658", "000160", "000056", "000152", "20190918", "PROPRIEDADE2", "000782", "FORNECEDOR 2.2"));
	ds.addRow(new Array("098658", "000160", "000056", "000152", "20190918", "PROPRIEDADE2", "000783", "FORNECEDOR 2.3"));
	ds.addRow(new Array("098658", "000160", "000056", "000152", "20190918", "PROPRIEDADE2", "000784", "FORNECEDOR 2.4"));
	
	return ds;
}
function onMobileSync(user) {

}