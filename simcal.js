function Sum(){
    var x=parseInt(document.getElementById("one").value);
    var y=parseInt(document.getElementById("two").value);
    var z=x+y;
    document.getElementById('result').innerHTML=z;
}
function Difference(){
    var x=parseInt(document.getElementById("one").value);
    var y=parseInt(document.getElementById("two").value);
    var z=x-y;
    document.getElementById('result').innerHTML=z;

}
function Product(){
    var x=parseInt(document.getElementById("one").value);
    var y=parseInt(document.getElementById("two").value);
    var z=x*y;
    document.getElementById('result').innerHTML=z;
}
function Division(){
    var x=parseInt(document.getElementById("one").value);
    var y=parseInt(document.getElementById("two").value);
    var z=x/y;
    document.getElementById('result').innerHTML=z;
}