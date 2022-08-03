var input=document.querySelector('.input');
var items= document.querySelectorAll('.item');
items.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(input.innerHTML=='0')
        input.innerHTML='';
        if(btn.innerHTML=='AC')
        input.innerHTML='0';
        else if(btn.innerHTML=='DEL'){
            var text=input.innerHTML;
            text.splice(text.length-1,1);
             if(text.length!=0)
             text=text.join('');
            else text='0';

        }
        else if (btn.innerHTML=='='){
            input.innerHTML=eval(input.innerHTML);

        }
        else input.innerHTML+=btn.innerHTML;
    })
})