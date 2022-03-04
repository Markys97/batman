let photoRow= document.querySelector('.photo__row');
let photoButtonImg= document.querySelector('.photo__footer-imgBtn');
let photoFrame= document.querySelector('.photo__frame')
let itemImgList= document.querySelectorAll('.photo__img')



photoButtonImg.addEventListener('click',e=>{
    let stateRowphoto=e.target.dataset.photostate;

    if(stateRowphoto === 'show'){
        e.target.src= e.target.dataset.photoshow
        photoRow.style.height='100%'
        e.target.setAttribute('data-photostate','hidden')
    }else{
        e.target.src= e.target.dataset.photoclose
        photoRow.style.height='0px'
        e.target.setAttribute('data-photostate','show')
    }

})

itemImgList.forEach((itemImg,index,itemImgs)=>{
    itemImg.addEventListener('click',e=>{


        itemImgs.forEach(photo__img=>{
            if(photo__img.classList.contains('active')){
                photo__img.classList.remove('active')
            }

          
        })
        itemImg.classList.add('active')

        photoFrame.src= itemImg.dataset.imagesrc
     

    })
})