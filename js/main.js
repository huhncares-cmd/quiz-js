let login = ""
let p = 0
function right1(){    
	$: p = "|"    	
	localStorage.setItem("p", p)
}
function wrong1(){    
	$: p = ""    	
	localStorage.setItem("p", p)
}
function right(){     	
	p = localStorage.getItem("p")    	
	$: p = p + "|"    	
	localStorage.setItem("p", p)
}
function wrong(){     	
	p = localStorage.getItem("p")    	
	$: p = p    	
	localStorage.setItem("p", p)
}   
