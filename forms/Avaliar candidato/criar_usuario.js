$("#criarUsuario").on('click', function () {
    var c1 = DatasetFactory.createConstraint("colleagueId", $("#login").val(), $("#login").val(), ConstraintType.MUST),
        c2 = DatasetFactory.createConstraint("colleagueName", $("#nome").val(), $("#nome").val(), ConstraintType.MUST),
        c3 = DatasetFactory.createConstraint("login", $("#login").val(), $("#login").val(), ConstraintType.MUST),
        c4 = DatasetFactory.createConstraint("mail", $("#email").val(), $("#email").val(), ConstraintType.MUST),
        c5 = DatasetFactory.createConstraint("passwd", $("#senha").val(), $("#senha").val(), ConstraintType.MUST);

    var constraints = new Array(c1, c2, c3, c4, c5);

    DatasetFactory.getDataset("criarUsuario", null, constraints, null);

    FLUIGC.toast({
        //title: 'Usuário Criado!',
        message: 'Login para ' + $("#nome").val() + ' criado!',
        type: 'success'
    });
});

$('#adicionarComunidade').on('click', function() {
    var dados = { communityAlias : "BRZ_FLUIG", userAliases : [$('#login').val()] }

    $.ajax({
        data: JSON.stringify(dados),
        dataType: 'json', //tipo da resposta
        url: 'http://lab.fluig.com/api/public/2.0/communities/addUsers',
        type: "POST",
        contentType: 'application/json', //tipo envio
        success: function(result){
            console.log(result);
            FLUIGC.toast({
                message: 'Usuário adicionado a comunidade!',
                type: 'warning'
            });
        }
    });
});

