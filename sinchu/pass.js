function marks(){
    var name = document.getElementById("name").value;
    var usn = document.getElementById("usn").value;
    var marks = document.getElementById("marks").value;
    var p = document.getElementById("p");
    
 var marks=Math.random()*100;

    if(marks>=35){
    p.innerHTML=name+"result is pass"+pass;
    }else{    
    }p.innerHTML=name+"result is fail"+fail;
    }