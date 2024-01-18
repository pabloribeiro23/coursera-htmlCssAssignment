const header = document.getElementById('header')
const modalBtn = document.getElementById('modalBtn')
const modalContent = document.getElementById('modalContent')
const closeModal = document.getElementById('closeModal')
const modalBtnStroke = document.getElementById('modalBtnStroke')
const headerLis = Array.from(document.getElementsByClassName('navbar--item'))
let buyBtn = Array.from(document.getElementsByClassName('pizzaBtn'))
let cartNumber = document.getElementById('cartNumber')

window.addEventListener('scroll', function handleScroll(event) {
    if (window.scrollY > 350) {
      header.classList.add('bg-white')
      modalBtnStroke.setAttribute('stroke', '#ee433e')
      headerLis.forEach(element => {
        element.style.color = '#ee433e'
      });
      header.classList.add('mainRed-text')
    } else if (window.scrollY < this.lastScrollTop) {
      console.log('scrolling up');
      console.log(window.scrollY)
    } 
    
    if(window.scrollY < 300){
        header.classList.remove('bg-white')
        modalBtnStroke.setAttribute('stroke', '#fff')
        headerLis.forEach(element => {
        element.style.color = '#fff'
      });
      header.classList.remove('mainRed-text')
    }
  
    this.lastScrollTop = window.scrollY;
});

buyBtn.forEach(element => {
  element.addEventListener('click', () => {
    cartNumber = document.getElementById('cartNumber')
    let newNumber = parseInt(cartNumber.textContent)
    //console.log(newNumber += 1)
    cartNumber.textContent = newNumber += 1
  })
});

modalBtn.addEventListener('click', () => {
  modalContent.style.display = 'flex'
  modalBtn.style.display = 'none'
})

closeModal.addEventListener('click', () => {
  modalContent.style.display = 'none'
  modalBtn.style.display = 'inline'
})