const Toggle =document.getElementById('darkToggle');
const html=document.documentElement;
Toggle.addEventListener('change',function(){
 
    if(Toggle.checked){
        html.classList.add('dark');
        localStorage.setItem('theme','dark')
 
 
    }else{
        html.classList.remove('dark')
        localStorage.setItem('theme','light')
    }
   
})
 
if(localStorage.getItem('theme')==='dark'){
          html.classList.add('dark');
          Toggle.checked=true;
    }