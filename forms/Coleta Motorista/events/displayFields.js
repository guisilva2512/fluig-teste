function displayFields(form,customHTML){

    var activity = getValue('WKNumState');
	form.setValue("WKNumState", activity);

	var process = getValue('WKNumProces');
	form.setValue("WKNumProces", process);

	var usuario = getValue('WKUser');
	form.setValue("WKUser", usuario);

	var carid = form.getDocumentId();
	form.setValue("docId", carid);

	form.setValue("MOD_", form.getFormMode());

	form.setValue("WKMobile",form.getMobile() != null && form.getMobile() ? "S":"N");

	//form.setValue("codigoVendedor", buscaDadoAdicional("VENDEDOR"));
}

function buscaDadoAdicional(key){
	var filtroDadosAdicionais = [
		DatasetFactory.createConstraint("MATRICULA", getValue('WKUser'), getValue('WKUser'), ConstraintType.MUST),
		DatasetFactory.createConstraint("DATA_KEY", key, key, ConstraintType.MUST)];
	var dsFiltrosAdicionais = DatasetFactory.getDataset("dsDadosAdicionaisFluig", null, filtroDadosAdicionais, null);

	var result = "";

	if(dsFiltrosAdicionais && dsFiltrosAdicionais.values.length > 0){
		result = dsFiltrosAdicionais.getValue(0, "DATA_VALUE");
	}
	return result;
}
