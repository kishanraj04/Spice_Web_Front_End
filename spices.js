// let bars = document.querySelector("#bars");

// bars.addEventListener("click",()=>
// {
//     let s_header = document.querySelector(".second_header");
//     s_header.style.display = s_header.style.display === 'none' ? 'block' : 'none';
//     s_header.style.height = "6vh";
// })

const openicon = document.querySelector('.open-icon');
const menu_list = document.querySelector('.menu_list');
const closeicon = document.querySelector('.close-icon');
openicon.addEventListener('click', () =>{
  menu_list.classList.add('oppend')
})

closeicon.addEventListener('click', () =>{
  menu_list.classList.remove('oppend');
})



// for slider
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });