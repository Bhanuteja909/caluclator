 var referenceOfResult=document.getElementById("result");//declaring a reference where the result is shown


 function updateDisplay(value)
 {
    referenceOfResult.value+=value;
 }

 function clearDisplay()
 {
    referenceOfResult.value='';
 }

 function deletelastdigit()
 {
    var str='';
    for(let i=0;i<=referenceOfResult.value.length-2;i++)
    {
        str+=referenceOfResult.value[i];
    }
    referenceOfResult.value=str;
 }

 function equalbutton()
 {
    try{
        referenceOfResult.value=eval(referenceOfResult.value);

        referenceOfResult.value=Math.round( referenceOfResult.value* 1000) / 1000;
    }
    catch(e)
    {
        referenceOfResult.value="Error";
    }
    
 }

 document.getElementById("acbtn").addEventListener("click", clearDisplay);
 document.getElementById("delbtn").addEventListener("click",deletelastdigit);
 document.getElementById("dotbtn").addEventListener("click",function(){updateDisplay(".")});
 document.getElementById("btndiv").addEventListener("click",function(){updateDisplay("/")});
 document.getElementById("7btn").addEventListener("click",function(){updateDisplay("7")});
 document.getElementById("8btn").addEventListener("click",function(){updateDisplay("8")});
 document.getElementById("9btn").addEventListener("click",function(){updateDisplay("9")});
 document.getElementById("btnmul").addEventListener("click",function(){updateDisplay("*")});
 document.getElementById("4btn").addEventListener("click",function(){updateDisplay("4")});
 document.getElementById("5btn").addEventListener("click",function(){updateDisplay("5")});
 document.getElementById("6btn").addEventListener("click",function(){updateDisplay("6")});
 document.getElementById("btnmin").addEventListener("click",function(){updateDisplay("-")});
 document.getElementById("onebtn").addEventListener("click",function(){updateDisplay("1")});
 document.getElementById("2btn").addEventListener("click",function(){updateDisplay("2")});
 document.getElementById("3btn").addEventListener("click",function(){updateDisplay("3")});
 document.getElementById("btnadd").addEventListener("click",function(){updateDisplay("+")});
 document.getElementById("double0").addEventListener("click",function(){updateDisplay("00")});
 document.getElementById("zero").addEventListener("click",function(){updateDisplay("0")});
 document.getElementById("equal").addEventListener("click",equalbutton);
 