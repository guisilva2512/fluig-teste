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
	
	var dsColeta = DatasetFactory.getDataset('dsColetaMotorista', null, null, null);
	var coletas = new Array();
	var existe = false;
	var coleta, transportadora, veiculo, motorista, data;
	
	if (dsColeta && dsColeta.values && dsColeta.values.length > 0) { 
        for(var i = 0; i < dsColeta.values.length; i++) {
        	existe = false;
        	coleta = dsColeta.getValue(i, "ZZ4_COLETA");
        	
        	for(var x = 0; x < coletas.length; x++) {
        		if (coleta == coletas[x]) {
        			existe = true;
        		}
        	}
    		
    		if (existe == false) {
            	transportadora = dsColeta.getValue(i, "ZZ1_TRANSP");
            	veiculo = dsColeta.getValue(i, "ZZ1_VEICUL");
            	motorista = dsColeta.getValue(i, "ZZ1_MOTORI");
            	data = dsColeta.getValue(i, "ZZ1_DTCOLE");
            	
    			ds.addRow(new Array(coleta, transportadora, veiculo, motorista, data));
    			coletas.push(coleta);
    		}
        }
    }
	
	return ds;
}
function onMobileSync(user) {

}