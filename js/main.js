$(function() {

  $(".cep").hide();
  $(".alert").hide();

  var input = $('input');
  input.on("paste", function (evt) {

  var x = input.val(input.val());

  navigator.clipboard.writeText(x);

  $('input').on("paste", function (evt) { 
    setTimeout(function () {
        var dados = $('input').val();

        var arr = dados.split('');

        var a1 = (arr[0] + arr[1]);

        var a2 = (arr[3] + arr[4]);

        var a3 = (arr[6] + arr[7]);

        var a4 = (arr[9] + arr[10]);

        var a,b;
        var re = 0;
        var r ='';

        var valor2 = a4 + a3 + a2 + a1;

        var valor2 = valor2.toUpperCase();

        let regex = /[^A-Za-z0-9 {8,8}]+/;

        var validacao = regex.test(valor2);

        //console.log(regex.test(valor2));

        if (validacao == true){
          //console.log("Contêm caracteres errados.")
          $(".alert").show();
        }else{
          $(".alert").hide();
          //console.log("Não contêm caracteres errados.");
        

        for(var i=0;i<valor2.length;i++){
          a=valor2.charAt(i);
          b=(a=='A')?10:((a=='B')?11:((a=='C')?12:((a=='D')?13:((a=='E')?14:((a=='F')?15:a)))));
      
          ant=b*Math.pow(16,(valor2.length-i-1));
          r+=+valor2.charAt(i)+' x 16<sup>'+(valor2.length-i-1)+ant;
          re+=ant;
        }
  
          r+=re;
  
          var resultado = String(re);
    
        if(resultado.length <= 9){
          resultado = "0" + resultado;
        }
      
      document.getElementById("n").innerHTML = "" + resultado;
      $(".cep").show(" 0" + resultado);
      $("#ncartao").html("Numeração do Cartão:" + "    " + resultado);

      const resultado2 = resultado;

      navigator.clipboard.writeText(resultado2);
  
      return resultado;

    }

      },100);
  
    });

  })

});
