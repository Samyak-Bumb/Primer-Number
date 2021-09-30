let input = document.getElementById('input');
let checkBtn = document.getElementById('checkBtn');
let clearBtn = document.getElementById('clearBtn');
let h1 = document.getElementById('h1');
function checkPrimeNumb(numb){
	for(let i=2; i<numb; i++){
		if (numb%i === 0){
			return false;
		}
	}
	return true;
}
checkBtn.addEventListener("click", showResult);
clearBtn.addEventListener("click", clearAll);
input.addEventListener("keypress", (ev) =>{
	if(ev.key === "Enter"){
		showResult()
	}
})
function showResult(){
	let inputValue = Math.abs(Number(input.value).toFixed(0));
	let inputLength = input.value.length;
	let isPrimer = checkPrimeNumb(inputValue);
	h1.innerHTML ="";
	if (inputValue <= 1000000){
		if(input.value === "0" || input.value === "1"){
			h1.innerHTML = "1 is Neither <b>Prime</b> Nor <b>Composite</b> Number";
		}
		else if (isPrimer && inputLength !== 0){
				h1.innerHTML = ""+inputValue+" is a <b>Prime</b> Number";
		}
		else if(!isPrimer && inputLength !== 0){
			h1.innerHTML = ""+inputValue+" is a <b>Composite</b> Number";
		}
		else{
			h1.innerHTML ="Type a Number";
		}
	}
	else{
		input.value = ""
		h1.innerHTML ="Type a Number less than 10,00,000 (One Million) for Better Performance";
	}
}
function clearAll(){
	input.value = "";
	h1.innerHTML = "Check Numbers";
}
