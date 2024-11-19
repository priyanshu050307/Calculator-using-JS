function open_brack(){
    ob = document.getElementById('display');
    ob.innerHTML +="(";

}
function close_brack(){
    ob = document.getElementById('display');
    ob.innerHTML +=")";

}function add(){
    ob = document.getElementById('display');
    ob.innerHTML +="+";

}function sub(){
    ob = document.getElementById('display');
    ob.innerHTML +="-";

}function mul(){
    ob = document.getElementById('display');
    ob.innerHTML +="*";

}function div(){
    ob = document.getElementById('display');
    ob.innerHTML +="/";

}function num1(){
    ob = document.getElementById('display');
    ob.innerHTML +="1";

}function num0(){
    ob = document.getElementById('display');
    ob.innerHTML +="0";

}function num2(){
    ob = document.getElementById('display');
    ob.innerHTML +="2";

}function num3(){
    ob = document.getElementById('display');
    ob.innerHTML +="3";

}function num4(){
    ob = document.getElementById('display');
    ob.innerHTML +="4";

}function num5(){
    ob = document.getElementById('display');
    ob.innerHTML +="5";

}function num6(){
    ob = document.getElementById('display');
    ob.innerHTML +="6";

}function num7(){
    ob = document.getElementById('display');
    ob.innerHTML +="7";

}function num8(){
    ob = document.getElementById('display');
    ob.innerHTML +="8";

}function num9(){
    ob = document.getElementById('display');
    ob.innerHTML +="9";

}function result() {
   const ob = document.getElementById('display');
   const expression = document.getElementById('display').innerText;
   const res = eval(expression);
   document.getElementById('display').innerText = '';
   ob.innerText += res;
   
}
function reset(){
    document.getElementById('display').innerText = '';
}
function percent(){
    ob = document.getElementById('display');
    ob.innerHTML +="%";

}
function decimal(){
    ob = document.getElementById('display');
    ob.innerHTML += "."
}