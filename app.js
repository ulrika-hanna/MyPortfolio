const btnHamburger = document.querySelector('.hamburger');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a');


btnHamburger.addEventListener('click', ()=> {
    menuPanel.classList.toggle('active'); 
});


document.addEventListener('click', (event) => { 
    if(!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) {
        menuPanel.classList.remove('active');
    } 

});

menuLinks.forEach((link)=>{ 
    
    link.addEventListener('click', ()=> {
        menuPanel.classList.remove('active'); 
    });

});


const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg'
  ];
  
  let currentImageIndex = 0;
  
  
  function switchImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    document.querySelector('.frame img').src = images[currentImageIndex];
  }
  
  
  const frame = document.querySelector('.frame');
  if (window.innerWidth <= 768) { 
    frame.addEventListener('click', switchImage);
  }  