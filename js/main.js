


const responseBgIndex=()=>{
    let img= document.querySelector('.index__bg img')
    if(window.screen.width <498){
        img.src='./img/photo.jpg'
        console.log('ok')
    }else{
        img.src='./img/bbg.png'
        console.log('----')
    }
}
responseBgIndex()

window.addEventListener('resize',responseBgIndex)


/*------------------------------------handle mobile menu-----------------------------------*/ 

let btnMenu= document.querySelector('.header__btn-mobile')
let menuMobile= document.querySelector('.header__mobile')
let closeMenu= document.querySelector('.header__close');
let pageIndex= document.querySelector('.page-index');
let headerVolume=document.querySelector('.header__volume');
let headerVolumeImg=document.querySelector('.header__volume > img');

btnMenu.addEventListener('click',e=>{
    menuMobile.classList.add('open-menu')
    pageIndex.style.overflow='hidden'
})
closeMenu.addEventListener('click',e=>{
    menuMobile.classList.remove('open-menu')
    pageIndex.style.overflow='auto'

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