function PrintAge(){
    if(document.getElementById("age") != null){
        const age = birthDate => Math.floor((Date.now() - new Date(birthDate).getTime()) / 3.15576e+10)
        document.getElementById("age").innerHTML = age("2001-06-28");
    }
}

function printTime()
{
    if(document.getElementById("time") != null){
        var today = new Date();
        var time  = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        document.getElementById("time").innerHTML = time;
    }
}

var t=setInterval(printTime,1000);
PrintAge();
