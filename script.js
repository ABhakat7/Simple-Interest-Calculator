function SI()
{
    var p=document.getElementById("p").value;
    var r=document.getElementById("r").value;
    var t=document.getElementById("t").value;
    var si= (p*r*t)/100;
    var sio = (si.toFixed(3));
    document.getElementById("result").innerHTML="Interest : " + si;
}