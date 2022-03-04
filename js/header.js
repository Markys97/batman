let btnMenu= document.querySelector('.header__btn-mobile')
let menuMobile= document.querySelector('.header__mobile')
let closeMenu= document.querySelector('.header__close');
let page= document.querySelector('body');
let headerVolume=document.querySelector('.header__volume');
let headerVolumeImg=document.querySelector('.header__volume > img');

btnMenu.addEventListener('click',e=>{
    menuMobile.classList.add('open-menu')
    page.style.overflow='hidden'
})
closeMenu.addEventListener('click',e=>{
    menuMobile.classList.remove('open-menu')
    page.style.overflow='auto'

})

headerVolume.addEventListener('click',e=>{
   let state=headerVolumeImg.dataset.state
   if(state==='off'){
       headerVolumeImg.src= headerVolumeImg.dataset.volumesrc
       headerVolumeImg.setAttribute('data-state','on')
   }else{
    headerVolumeImg.src= headerVolumeImg.dataset.src
    headerVolumeImg.setAttribute('data-state','off')
   }
})