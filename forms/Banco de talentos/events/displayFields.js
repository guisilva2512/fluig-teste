function displayFields(form, customHTML) {
	// form é o objeto do formulario
	// customHTML permite alterar, customizar o html do formulário

	// Vamos alterar a disposição das informações

	// var mode= form.getFormMode();
	// customHTML.append('<script>console.log(' + mode + ');</script>');
	// ADD
	// MOD
	// VIEW
	if (form.getFormMode() == "VIEW") {

		var nome = form.getValue("nome"),
			perfil = form.getValue("perfil"),
			email = form.getValue("email"),
			linkedin = form.getValue("linkedin"),
			user = getValue("WKUser");

		var interacao = '<h1>Oi, <b>' + user + '</b>. O <b>' + nome + '</b> deseja trabalhar conosco</h1>' +
			'<h3>O seu perfil é <b>' + perfil + '</b> E você pode conferir seu currículo completo no linkedin <b>' + linkedin + '</b><br>' +
			'Você também pode entrar em contato pelo e-mail: <b>' + email + '</b><br>'
		'Obrigado!</h3>';

		// Mostrar a mensagem acima em vez do formulário
		customHTML.append('<script>$("#mensagemInteracao").append("' + interacao + '")</script>');
		customHTML.append('<script>$("#mensagemInteracao").show();$("#formPrincipal").hide();$("#avalidarCandidato").show();</script>');
	}
}