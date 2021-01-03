

function calcular(){
	var formulario = document.getElementById("form");
	var a = formulario.valorA.value;
	var b = formulario.valorB.value;
	var c = formulario.valorC.value;
	
	var r = document.querySelector('#resul')
		
	if(a == "0"){
		r.innerHTML = "O valor de A não pode ser 0";
	}
	else if(a.length < 1){
		r.innerHTML = "Informe um valor para A";
	}
	else if(b.length < 1){
		r.innerHTML = "Informe um valor para B";
	}
	else if(c.length < 1){
		r.innerHTML = "Informe um valor para C";
	}
	else{
		var delta = Math.pow(b,2) - 4 * a * c;
		var x1 = ((-b) + (Math.sqrt(delta)))/(2 * a);
		var x2 = ((-b) - (Math.sqrt(delta)))/(2 * a);
		
		var num1 = ((-b) + (Math.sqrt(delta)));
		var num2 = ((-b) - (Math.sqrt(delta)));
		var den = 2 * a;
		
		if (delta == 0 ){
		r.innerHTML = "O valor de delta é " + delta + ". \n\nA equação tem duas raízes iguais. \n\nx1 = " +num1+ "/"+den+" = "+x1.toFixed(2)+"\n\nx2 = "+num2+"/"+den+" = "+x2.toFixed(2);
		}
	
		else if(delta > 0){
		r.innerHTML = "O valor de delta é " + delta + ". \n\nA equação tem duas raízes diferentes. \n\nx1 = "+num1+"/"+den+" = "+ x1.toFixed(2)+"\n\nx2 = "+num2+"/"+den+" = "+x2.toFixed(2);
		}
		
		else if (delta < 0){
		r.innerHTML = "O valor de delta é " + delta + ". \n\nA equação não tem raízes reais.";
		}
	}
	
}
function limpar(){
	
	var formulario = document.getElementById("form");
	var r = document.getElementById("resul")
	formulario.valorA.value="";
	formulario.valorB.value="";
	formulario.valorC.value="";
	r.innerHTML="";
	formulario.valorA.focus();
}


	
