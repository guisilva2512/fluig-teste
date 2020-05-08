function intermediateconditional2() {
	// Vamos comparar o valor atual do dólar (form valor dólar) 
	// com o valor desejado do dólar (que estará no formulario do processo)
	
	var valorDesejado = hAPI.getCardValue("dolar");
	
	var dsValorDolar = DatasetFactory.getDataset("dsValorDolar", null, null, null);
	var valorAtual = dsValorDolar.getValue(0, "dolar");
	
	if (valorAtual <= valorDesejado)
		return true;
}