
function nCartão(){

    var a,b;
    var re = 0;
    var r ='';

    var a1 = document.getElementById("a1").value;
    var a2 = document.getElementById("a2").value;
    var a3 = document.getElementById("a3").value;
    var a4 = document.getElementById("a4").value;

    var valor2 = a4 + a3 + a2 + a1;

    var valor2 = valor2.toUpperCase();

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

}

$(function(){
    $(".cep").hide();
});
