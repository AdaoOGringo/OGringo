function converterUnidades(){ 
var formulario=document.getElementById('formulario');
var quantidade=formulario.quantidade.value;
var unidade=formulario.unidade.value;
var unidadeToC=formulario.unidadeToC.value;
if(unidade=='kilometro' || unidade=='hectometro' || unidade=='dacametro' || unidade=='metro' || unidade=='decimetro' || unidade=='centimetro' || unidade=='milimetro'){
	comprimento(quantidade, unidade, unidadeToC);
	}else if(unidade=='tonelada' || unidade=='quintal' || unidade=='hectograma' || unidade=='kilograma' || unidade=='dacagrama' || unidade=='grama' || unidade=='miligrama'){
	peso(unidade, quantidade,unidadeToC);
	}else if(unidade=='decimal' || unidade=='hexadecimal' || unidade=='octal' || unidade=='binario'){
	numeracao();
	}else if(unidade=='dolar' || unidade=='kwanza'){ 
		divisas(quantidade, unidade);
	}else{
	alert("Unidade Invalida!\nTente novamente (Exemplos de unidades:\nmetro|Kilograma|Decimal|Kwanza|)");	
}

}

function comprimento(quantidade,unidade,unidadeToC){
	var formulario=document.getElementById('formulario');
	var unidadeToC=formulario.unidadeToC.value;
	alert("This is space comprimento");
	if(unidade=='kilometro' && unidadeToC=='kilometro'){
		var msg=formulario.dadoConvertido.value=quantidade/1+' Km';
	}else if(unidade=='kilometro' && unidadeToC=='hectometro'){
		msg=formulario.dadoConvertido.value=quantidade*10+' Hect';
	}else if(unidade=='kilometro' && unidadeToC=='dacametro'){
		msg=formulario.dadoConvertido.value=quantidade*100+' Dac';
	}else if(unidade=='kilometro' && unidadeToC=='metro'){
		formulario.dadoConvertido.value=quantidade*1000+' M';
	}else if(unidade=='kilometro' && unidadeToC=='decimetro'){
		formulario.dadoConvertido.value=quantidade*10000+' Dcm';
	}else if(unidade=='kilometro' && unidadeToC=='centimetro'){
		formulario.dadoConvertido.value=quantidade*100000+' Cm';
	}else if(unidade=='kilometro' && unidadeToC=='milimetro'){
		formulario.dadoConvertido.value=quantidade*1000000+' Mm';
	}else if(unidade=='hectometro' && unidadeToC=='kilometro'){
		msg=formulario.dadoConvertido.value=quantidade/10+' Km';
	}else if(unidade=='hectometro' && unidadeToC=='hectometro'){
		formulario.dadoConvertido.value=quantidade/1+' Hect';
	}else if(unidade=='hectometro' && unidadeToC=='dacametro'){
		formulario.dadoConvertido.value=quantidade*10+' Dac';
	}else if(unidade=='hectometro' && unidadeToC=='metro'){
		formulario.dadoConvertido.value=quantidade*10+' M';
	}else if(unidade=='hectometro' && unidadeToC=='decimetro'){
		formulario.dadoConvertido.value=quantidade*100+' Dcm';
	}else if(unidade=='hectometro' && unidadeToC=='centimetro'){
		formulario.dadoConvertido.value=quantidade*1000+' Cm';
	}else if(unidade=='hectometro' && unidadeToC=='milimetro'){
		formulario.dadoConvertido.value=quantidade*10000+' Mm';
	}else if(unidade=='dacametro' && unidadeToC=='kilometro'){
		msg=formulario.dadoConvertido.value=quantidade/100+' Km';
	}else if(unidade=='dacametro' && unidadeToC=='hectometro'){
		formulario.dadoConvertido.value=quantidade/10+' Hect';
	}else if(unidade=='dacametro' && unidadeToC=='dacametro'){
		formulario.dadoConvertido.value=quantidade/1+' Dac';
	}else if(unidade=='dacametro' && unidadeToC=='metro'){
		formulario.dadoConvertido.value=quantidade*10+' M';
	}else if(unidade=='dacametro' && unidadeToC=='decimetro'){
		formulario.dadoConvertido.value=quantidade*100+' Dcm';
	}else if(unidade=='dacametro' && unidadeToC=='centimetro'){
		formulario.dadoConvertido.value=quantidade*1000+' Cm';
	}else if(unidade=='dacametro' && unidadeToC=='milimetro'){
		formulario.dadoConvertido.value=quantidade*10000+' Mm';
	}else if(unidade=='metro' && unidadeToC=='kilometro'){
		msg=formulario.dadoConvertido.value=quantidade/1000+' Km';
	}else if(unidade=='metro' && unidadeToC=='hectometro'){
		formulario.dadoConvertido.value=quantidade/100+' Hect';
	}else if(unidade=='metro' && unidadeToC=='dacametro'){
		formulario.dadoConvertido.value=quantidade/10+' Dac';
	}else if(unidade=='metro' && unidadeToC=='metro'){
		formulario.dadoConvertido.value=quantidade/1+' M';
	}else if(unidade=='metro' && unidadeToC=='decimetro'){
		formulario.dadoConvertido.value=quantidade*10+' Dcm';
	}else if(unidade=='metro' && unidadeToC=='centimetro'){
		formulario.dadoConvertido.value=quantidade*100+' Cm';
	}else if(unidade=='metro' && unidadeToC=='milimetro'){
		formulario.dadoConvertido.value=quantidade*1000+' Mm';
	}else if(unidade=='decimetro' && unidadeToC=='kilometro'){
		formulario.dadoConvertido.value=quantidade/10000+' Km';
	}else if(unidade=='decimetro' && unidadeToC=='hectometro'){
		formulario.dadoConvertido.value=quantidade/1000+' Hect';
	}else if(unidade=='decimetro' && unidadeToC=='dacametro'){
		formulario.dadoConvertido.value=quantidade/100+' Dac';
	}else if(unidade=='decimetro' && unidadeToC=='metro'){
		formulario.dadoConvertido.value=quantidade/10+' M';
	}else if(unidade=='decimetro' && unidadeToC=='decimetro'){
		formulario.dadoConvertido.value=quantidade/1+' Dcm';
	}else if(unidade=='decimetro' && unidadeToC=='centimetro'){
		formulario.dadoConvertido.value=quantidade*10+' Cm';
	}else if(unidade=='decimetro' && unidadeToC=='milimetro'){
		formulario.dadoConvertido.value=quantidade*100+' Mm';
	}else if(unidade=='centimetro' && unidadeToC=='kilometro'){
		formulario.dadoConvertido.value=quantidade/100000+' Km';
	}else if(unidade=='centimetro' && unidadeToC=='hectometro'){
		formulario.dadoConvertido.value=quantidade/10000+' Hm';
	}else if(unidade=='centimetro' && unidadeToC=='dacametro'){
		formulario.dadoConvertido.value=quantidade/1000+' Dam';
	}else if(unidade=='centimetro' && unidadeToC=='metro'){
		formulario.dadoConvertido.value=quantidade/100+' M';
	}else if(unidade=='centimetro' && unidadeToC=='decimetro'){
		formulario.dadoConvertido.value=quantidade/10+' Dm';
	}else if(unidade=='centimetro' && unidadeToC=='centimetro'){
		formulario.dadoConvertido.value=quantidade/1+' Cm';
	}else if(unidade=='centimetro' && unidadeToC=='milimetro'){
		formulario.dadoConvertido.value=quantidade*10+' Mm';
	}else if (unidade=='milimetro' && unidadeToC=='kilometro'){
		formulario.dadoConvertido.value=quantidade/1000000+' Km';
	}else if(unidade=='milimetro' && unidadeToC=='hectometro'){
		formulario.dadoConvertido.value=quantidade/100000+' Hect';
	}else if(unidade=='milimetro' && unidadeToC=='dacametro'){
		formulario.dadoConvertido.value=quantidade/10000+' Dac';
	}else if(unidade=='milimetro' && unidadeToC=='metro'){
		formulario.dadoConvertido.value=quantidade/1000+' M';
	}else if(unidade=='milimetro' && unidadeToC=='decimetro'){
		formulario.dadoConvertido.value=quantidade/100+' Dm';
	}else if(unidade=='milimetro' && unidadeToC=='centimetro'){
		formulario.dadoConvertido.value=quantidade/10+' Cm';
	}else if(unidade=='milimetro' && unidadeToC=='milimetro'){
		formulario.dadoConvertido.value=quantidade/1+' Mm';
	}else{
		alert("Error, Unidade informada invalida, Tente novamente\nConsulte a pagina Ajuda")
	}
}
function peso(unidade, quantidade, unidadeToC){
	var formulario=document.getElementById('formulario');
	var unidadeToC=formulario.unidadeToC.value;
	alert("This is space PESO");
	if(unidade=='tonelada' && unidadeToC=='tonelada'){
		formulario.dadoConvertido.value=quantidade*1+' T';
	}else if(unidade=='tonelada' && unidadeToC=='quintal'){
		formulario.dadoConvertido.value=quantidade*10+' T';
	}else if(unidade=='tonelada' && unidadeToC=='hectograma'){
		formulario.dadoConvertido.value=quantidade*100+' Hg';
	}else if(unidade=='tonelada' && unidadeToC=='kilograma' || unidadeToC=='quilograma'){
		formulario.dadoConvertido.value=quantidade*1000+' Kg';
	}else if(unidade=='tonelada' && unidadeToC=='dacagrama'){
		formulario.dadoConvertido.value=quantidade*10000+' Dg';
	}else if(unidade=='tonelada' && unidadeToC=='grama'){
		formulario.dadoConvertido.value=quantidade*100000+' g';
	}else if(unidade=='tonelada' && unidadeToC=='miligrama'){
		formulario.dadoConvertido.value=quantidade*1000000+' mg';
	}else if(unidade=='quintal' && unidadeToC=='tonelada'){
		formulario.dadoConvertido.value=quantidade/10+' Qt';
	}else if(unidade=='quintal' && unidadeToC=='quintal'){
		formulario.dadoConvertido.value=quantidade*1+' T';
	}else if(unidade=='quintal' && unidadeToC=='hectograma'){
		formulario.dadoConvertido.value=quantidade*10+' Hg';
	}else if(unidade=='quintal' && unidadeToC=='kilograma'){
		formulario.dadoConvertido.value=quantidade*100+' Kg';
	}else if(unidade=='quintal' && unidadeToC=='dacagrama'){
		formulario.dadoConvertido.value=quantidade*1000+' Dg';
	}else if(unidade=='quintal' && unidadeToC=='grama'){
		formulario.dadoConvertido.value=quantidade*10000+' g';
	}else if(unidade=='quintal' && unidadeToC=='miligrama'){
		formulario.dadoConvertido.value=quantidade*100000+' Mg';
	}else if(unidade=='hectograma' && unidadeToC=='quintal'){
		formulario.dadoConvertido.value=quantidade/100+' Qt';
	}else if(unidade=='hectograma' && unidadeToC=='tonelada'){
		formulario.dadoConvertido.value=quantidade/10+' T';
	}else if(unidade=='hectograma' && unidadeToC=='hectograma'){
		formulario.dadoConvertido.value=quantidade*1+' Hg';
	}else if(unidade=='hectograma' && unidadeToC=='kilograma'){
		formulario.dadoConvertido.value=quantidade*10+' Kg';
	}else if(unidade=='hectograma' && unidadeToC=='dacagrama'){
		formulario.dadoConvertido.value=quantidade*100+' Dg';
	}else if(unidade=='hectograma' && unidadeToC=='grama'){
		formulario.dadoConvertido.value=quantidade*1000+' g';
	}else if(unidade=='hectograma' && unidadeToC=='miligrama'){
		formulario.dadoConvertido.value=quantidade*10000+' Mg';
	}else if(unidade=='kilograma' && unidadeToC=='quintal'){
		formulario.dadoConvertido.value=quantidade/1000+' Qt';
	}else if(unidade=='kilograma' && unidadeToC=='tonelada'){
		formulario.dadoConvertido.value=quantidade/100+' T';
	}else if(unidade=='kilograma' && unidadeToC=='hectograma'){
		formulario.dadoConvertido.value=quantidade/10+' Hg';
	}else if(unidade=='kilograma' && unidadeToC=='kilograma'){
		formulario.dadoConvertido.value=quantidade/1+' Kg';
	}else if(unidade=='kilograma' && unidadeToC=='dacagrama'){
		formulario.dadoConvertido.value=quantidade*10+' Dg';
	}else if(unidade=='kilograma' && unidadeToC=='grama'){
		formulario.dadoConvertido.value=quantidade*100+' g';
	}else if(unidade=='kilograma' && unidadeToC=='miligrama'){
		formulario.dadoConvertido.value=quantidade*1000+' Mg';
	}else if(unidade=='dacagrama' && unidadeToC=='quintal'){
		formulario.dadoConvertido.value=quantidade/10000+' Qt';
	}else if(unidade=='dacagrama' && unidadeToC=='tonelada'){
		formulario.dadoConvertido.value=quantidade*1000+' T';
	}else if(unidade=='dacagrama' && unidadeToC=='hectograma'){
		formulario.dadoConvertido.value=quantidade/100+' Hg';
	}else if(unidade=='dacagrama' && unidadeToC=='kilograma'){
		formulario.dadoConvertido.value=quantidade*10+' Kg';
	}else if(unidade=='dacagrama' && unidadeToC=='dacagrama'){
		formulario.dadoConvertido.value=quantidade/1+' Dg';
	}else if(unidade=='dacagrama' && unidadeToC=='grama'){
		formulario.dadoConvertido.value=quantidade*10+' g';
	}else if(unidade=='dacagrama' && unidadeToC=='miligrama'){
		formulario.dadoConvertido.value=quantidade*100+' Mg';
	}else if(unidade=='grama' && unidadeToC=='quintal'){
		formulario.dadoConvertido.value=quantidade/100000+' Qt';
	}else if(unidade=='grama' && unidadeToC=='tonelada'){
		formulario.dadoConvertido.value=quantidade/10000+' T';
	}else if(unidade=='grama' && unidadeToC=='hectograma'){
		formulario.dadoConvertido.value=quantidade/1000+' Hg';
	}else if(unidade=='grama' && unidadeToC=='kilograma'){
		formulario.dadoConvertido.value=quantidade/100+' Kg';
	}else if(unidade=='grama' && unidadeToC=='dacagrama'){
		formulario.dadoConvertido.value=quantidade/10+' Dg';
	}else if(unidade=='grama' && unidadeToC=='grama'){
		formulario.dadoConvertido.value=quantidade/1+' g';
	}else if(unidade=='grama' && unidadeToC=='miligrama'){
		formulario.dadoConvertido.value=quantidade*10+' Mg';
	}else if(unidade=='miligrama' && unidadeToC=='quintal'){
		formulario.dadoConvertido.value=quantidade/1000000+' Qt';
	}else if(unidade=='miligrama' && unidadeToC=='tonelada'){
		formulario.dadoConvertido.value=quantidade/100000+' T';
	}else if(unidade=='miligrama' && unidadeToC=='hectograma'){
		formulario.dadoConvertido.value=quantidade/10000+' Hg';
	}else if(unidade=='miligrama' && unidadeToC=='kilograma'){
		formulario.dadoConvertido.value=quantidade/1000+' Kg';
	}else if(unidade=='miligrama' && unidadeToC=='dacagrama'){
		formulario.dadoConvertido.value=quantidade/100+' Dg';
	}else if(unidade=='miligrama' && unidadeToC=='grama'){
		formulario.dadoConvertido.value=quantidade/10+' g';
	}else if(unidade=='miligrama' && unidadeToC=='miligrama'){
		formulario.dadoConvertido.value=quantidade/1+' Mg';
	}else{
		alert("Unidade de Peso Invalida!\nTente novamente!\nConsulte a Ajuda!!!")		
	}
}

/*function percentagem(){
	var formulario=formulario.document.getElementById('formulario');
	var valor=formulario.valor.value;
	alert('Well come space PERCENTAGEM '+valor);
}*/

function numeracao(){
	alert("This is space NUMERACAO");
}
function divisas(quantidade, unidade){
	alert("This is space DIVISAS");
}

//others functios independent

function fPercentagem(){
	var formulario=document.getElementById('formulario');
	var valor=formulario.valor.value;
	var percentual=formulario.percentual.value;
	if(percentual>=1 && percentual<=100){ 
	var resultado=valor*(percentual/100);
	formulario.dadoConvertido.value=resultado+' ';
	}else{
		var campo=document.getElementById('campo');
		campo.innerHTML="<p style='color:red'>Valor de percentagem invalido Tente novamente[1% a 100%]</p>"
	}
}
fPercentagem();