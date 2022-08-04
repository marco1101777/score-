const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const min = $(".minut");
const res = $("#reset");
const seg = $(".seg");
const ini = $("#ini") 
const pointsBlue = $(".puntosblue"); 
const pointsRed = $(".puntosred");

let scoreBlue = 0 ;
let scoreRed = 0 ; 

const puntosB = $$("#puntajeB") ;

puntosB.forEach((boton)=>{
	boton.addEventListener("click", (event)=>{
		scoreBlue += (scoreBlue == 0 && boton.name == "-1"  ? 0 : parseInt(boton.name));
		pointsBlue.innerHTML = scoreBlue;
	});
});

const puntosR = $$("#puntajeR") ;

puntosR.forEach((boton)=>{
	boton.addEventListener("click", (event)=>{
		scoreRed += (scoreRed == 0 && boton.name == "-1"  ? 0 : parseInt(boton.name));
		pointsRed.innerHTML = scoreRed;
	});
});

let MAXminutes = 3 ;
let segundos = 59 ;

var blue = $(".nameblue");
blue.innerHTML = prompt("Blue:");

var red = $(".namered");
red.innerHTML = prompt("Red:");

let off = false; 

ini.addEventListener("click",()=>{
	off = false ;
	timerSet(MAXminutes,segundos);
	ini.setAttribute("disabled","");	
}) ;
res.addEventListener("click",()=>{
	off = true;
	pointsRed.innerHTML = "0" ;
	pointsBlue.innerHTML = "0" ;
	scoreBlue = 0; 
	scoreRed = 0;
});

function timerSet(MAXminutes,segundos){
		min.innerHTML = MAXminutes ;
		seg.innerHTML = segundos;
		if(MAXminutes == 0 || off ){
			min.innerHTML = "0";
			seg.innerHTML = "00";
			ini.removeAttribute("disabled");
			return;
		}else{
			setTimeout(()=>{
				if(segundos == 0 ){
					segundos = 59 ;
					MAXminutes -= 1;
					return timerSet(MAXminutes ,segundos);
				}else{
					segundos-=1;
					return timerSet(MAXminutes,segundos);
				}
			},700);
		}
}

