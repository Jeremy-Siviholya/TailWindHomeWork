  document.querySelector('.fa-bars').addEventListener('click',()=>{
    document.querySelector('.navbar').classList.add('mobile:translate-x-0')
    document.querySelector('.upbar').classList.add('opacity-0')
  })

   document.querySelector('.fa-xmark').addEventListener('click',()=>{
     document.querySelector('.upbar').classList.remove('opacity-0')
  
    document.querySelector('.navbar').classList.remove('mobile:translate-x-0')
  })

  document.querySelectorAll('li').forEach((it)=>{
      it.addEventListener('click',()=>{
        document.querySelector('.upbar').classList.remove('opacity-0')
        document.querySelector('.navbar').classList.remove('mobile:translate-x-0')
      })
  })