let resul = document.getElementById('inputtext');
let calculate = (numbe)=>{
    resul.value = resul.value + numbe;
}
let result = ()=>{
    try{
        resul.value=eval(resul.value)
    }
    catch(err){
        resul.value = err.name 
    }
}
function clr(){
    resul.value = ""
}
function del(){
    resul.value = resul.value.slice(0,-1)
}