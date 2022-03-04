let photoRow= document.querySelector('.photo__row');
let photoButtonImg= document.querySelector('.photo__footer-imgBtn');
let photoFrame= document.querySelector('.photo__frame')
let itemImgList= document.querySelectorAll('.photo__img')



photoButtonImg.addEventListener('click',e=>{
    let stateRowphoto=e.target.dataset.photostate;
    console.log(e.target)
   
    if(e.target.dataset.photostate === 'show'){
        e.target.src= e.target.dataset.photoclose
        e.target.setAttribute('data-photostate','hidden');
        photoRow.style.height='100%';
        
    }else{
        e.target.src= e.target.dataset.photoshow
        e.target.setAttribute('data-photostate','show');
        photoRow.style.height='0px';
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