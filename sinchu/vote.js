function vote(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var p = document.getElementById("p");
    var country = document.getElementById("country").value;

    if(age>=18){
    p.innerHTML=name+"you are eligible";
    }else{
        p.innerHTML=name+"you are not eligible";
    }
    if(country=india){
        p.innerHTML=name+"you are eligible";
        }else if(country!=india){
            p.innerHTML=name+"you are not eligible";
        }
}