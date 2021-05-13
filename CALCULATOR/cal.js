function display(val){
    document.getElementById('whitespace').value +=val
}


function result(){
    var exp = document.getElementById('whitespace').value;
    var ans = eval(exp);
    document.getElementById('whitespace').value = ans;

}

function clean(){
    document.getElementById("whitespace").value = ""
}



document.addEventListener("keypress",function (e){
       
    var a = e.key;
    console.log(e);

    if((e.charCode>=48)&&(e.charCode<=57))
    document.getElementById("whitespace").value +=e.key; })