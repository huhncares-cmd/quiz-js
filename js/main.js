let login = ""
let p = 0
function right1(){    
	alert("Yeah, right!")
	$: p = "|"    	
	localStorage.setItem("p", p)
}
function wrong1(){  
	alert("Oh no, wrong!")
	$: p = ""    	
	localStorage.setItem("p", p)
}
function right(){   
	alert("Yeah, right!")
	p = localStorage.getItem("p")    	
	$: p = p + "|"    	
	localStorage.setItem("p", p)
}
function wrong(){   
	alert("Oh no, wrong!")
	p = localStorage.getItem("p")    	
	$: p = p    	
	localStorage.setItem("p", p)
}   
