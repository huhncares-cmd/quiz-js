let p = 0
function right1(){
	alert("Yes, right!")
	$: p = 1
	localStorage.setItem("p", p)
}
function wrong1(){
	alert("Falsch!")
	$: p = ""
	localStorage.setItem("p", p)
}
function right(){
	alert("Richtig!")
	p = localStorage.getItem("p")
	$: p++
	localStorage.setItem("p", p)
}
function wrong(){
	alert("Falsch!")
	p = localStorage.getItem("p")
	$: p = p
	localStorage.setItem("p", p)
}
