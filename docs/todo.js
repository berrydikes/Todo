var firstmaindiv = document.querySelector ("#firstmaindiv")
var maindiv = document.querySelector ("#maindiv")
var inp = document.querySelector ("input")
var btn = document.querySelector ("#button")
var divv = document.querySelector ("#divv")

btn.onclick = function(){
    if(document.querySelector("input").value === ''){
        alert("input a task")
    }
    else{  
        var divvchild = document.createElement ("div");
        divvchild.className = ("divvchild");
        divvchild.textContent = inp.value;
        divv.appendChild(divvchild);
        var btnII = document.createElement ("button");
        btnII.className = ("x");
        btnII.innerHTML = "X"
        divvchild.appendChild(btnII);
    }
        btnII.onclick = function(){
        divv.removeChild(divvchild)
        }
        divvchild.onmouseenter = function(){
            btnII.style.display="block";
        }
        divvchild.onmouseleave = function(){
            btnII.style.display="none";
        }
}
