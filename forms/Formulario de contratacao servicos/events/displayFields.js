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
}
