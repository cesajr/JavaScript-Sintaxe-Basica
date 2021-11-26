
$(function(){
     $(".cep").hide();
     $(".barra-progresso").hide();
});

function consultaCep(){
    var cep = document.getElementById("00.000-00").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    //requisição ajax com auxilio da jQuery
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + cep);
            $(".cep").show();
            $(".barra-progresso").show();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
        }
    })

}

