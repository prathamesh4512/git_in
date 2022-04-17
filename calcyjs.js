var keys= document.getElementsByTagName('button');
var display= document.querySelector('#display');

var val1 = 0;
var val2 = 0;
var operator="";


for(item of keys){
    item.addEventListener('click', (e)=>{
        var value = e.target.getAttribute('data-value');
        var value1 = e.target.innerText;
        if(value=='clear'){
            val1 = 0;
            val2 = 0;
            operator="";
            display.innerText=0;
        }else if(value== '+'|| value=='-' || value=='*' || value=='/' || value=='%'){
            if(operator && val2){
                val1=Math.round(eval(val1+operator+val2)*100)/100;
                val2=0;
                operator=value;
            }else{
                operator=value;
            }
        }
        else if(value=='calculate'){
            if(operator && val2){
                  val1=Math.round(eval(val1 + operator + val2)*100)/100;
            }
            val2=0;
            operator='';
            display.innerText=val1;
        }
        else{
            if(operator){
                if(val2==0){
                    val2=value1;
                }else{
                    val2+=value1;
                }
                display.innerText=val2;
            }else{
                if(val1==0){
                    val1=value1;
                }else{
                    val1+=value1;
                }
                display.innerText=val1;
            }
            
        }
    })
}

// keys.addEventListener('click', function(e){
// if(e.target.matches('button')){
//     const key = e.target;
//     const action = key.dataset.action;
//     var keyContent = key.textContent;
//     const displaynum = display.textContent;


//     if(action=="+" || action=="*" || action=="/" || action=="-"){
//         operator=action;
//     }
    
//     else if(operator===""){
//         if(var1!==0){
//             var1+=keyContent;
//         }else{
//             var1=keyContent;
//         }
//             display.textContent=var1;
//         }else{
//             if(var2!==0){
//                 var2+=keyContent;
//             }else{
//                 var2=keyContent;
//             }
//             display.textContent=var2;
//         }
//     }

//     if(action ==='decimal'){
//         display.textContent = displayedNum + '.';
//     }

// }
// );









