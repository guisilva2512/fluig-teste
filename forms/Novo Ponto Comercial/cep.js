$('#cep').blur(function() {
	$.getJSON("//viacep.com.br/ws/" + $('#cep').val() + "/json/", function(data){
		$('#logradouro').val(data.logradouro);
		$('#bairro').val(data.bairro);
		$('#cidade').val(data.localidade);
		$('#estado').val(data.uf);
	});
});