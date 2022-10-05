const lampada = document.getElementById("lampada");
const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");

function acenderLampada (){
lampada.src="./img/lampadaAcesa.jpg";
}

function apagarLampada (){
  lampada.src="./img/lampadaApagada.jpg";
  }


  ligar.addEventListener("click", acenderLampada);
  desligar.addEventListener("click", apagarLampada);