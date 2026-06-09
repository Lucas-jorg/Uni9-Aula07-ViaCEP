$(document).ready(function () {

    $("#pesquisar").click(function () {

        let cep = $("#cep").val();

        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            type: "GET",
            dataType: "json",

            success: function (dados) {

                if (dados.erro) {
                    $("#resultado").html(
                        "<p>CEP não encontrado.</p>"
                    );
                    return;
                }

                $("#resultado").html(`
                    <h3>Resultado</h3>

                    <p><strong>CEP:</strong> ${dados.cep}</p>

                    <p><strong>Logradouro:</strong> ${dados.logradouro}</p>

                    <p><strong>Bairro:</strong> ${dados.bairro}</p>

                    <p><strong>Cidade:</strong> ${dados.localidade}</p>

                    <p><strong>Estado:</strong> ${dados.uf}</p>
                `);
            },

            error: function () {
                $("#resultado").html(
                    "<p>Erro ao consultar CEP.</p>"
                );
            }
        });

    });

});
