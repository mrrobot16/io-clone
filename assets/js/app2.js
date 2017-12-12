var navBarLinks = Array.from(document.querySelectorAll("#fp-nav > ul > li > a"))
navBarLinks.map(function(link){
  link.addEventListener('click',function(event){
    removeActiveClass()
    link.classList.add('active')
  })
})

function removeActiveClass(){
  navBarLinks.map(function(link){
    link.classList.remove('active')
  })
}
