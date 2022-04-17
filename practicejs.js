const keys = document.getElementsByTagName('button');
const display= document.getElementById('display');
var val1=0;
var val2=0;
var operator="";

for(item of keys){
    item.addEventListener('click',(e)=>{
        const dataValue = e.target.dataset.value;;
        const text = e.target.innerText;

        if(text=='AC'){
            val1=0;
            val2=0;
            operator='';
            display.innerHTML=0;
        }else if(dataValue=='+' || dataValue=='-' || dataValue=='*' || dataValue=='/' || dataValue=='%') {
            if(val2){
                val1 = Math.round(eval(val1+operator+val2)*100)/100;
                val2=0;
                operator=dataValue;
               // display.innerHTML=val1;
            }else{
                operator=dataValue;
            }
        } else if(text=='='){
            if(operator && val2){
            val1 = Math.round(eval(val1+operator+val2)*100)/100;
             }
            val2=0;
            operator='';
            display.innerHTML=val1;
        }else{
           if(operator && val1){
               if(val2){
                   val2+=text;
               }else{
                   val2=text;
               }
               display.innerHTML=val2;
           }else{
               if(val1){
                   val1+=text;
               }else{
                   val1=text;
               }
               display.innerHTML=val1;
           }
        }

        
    })
}