let videoRow= document.querySelector('.video__row');
let videoButtonImg= document.querySelector('.video__footer-imgBtn');
let videoFrame= document.querySelector('.video__frame')
let itemImgList= document.querySelectorAll('.video__img')



videoButtonImg.addEventListener('click',e=>{
   
    
   
    if(e.target.dataset.photostate === 'show'){
        e.target.src= e.target.dataset.videoclose
        e.target.setAttribute('data-photostate','hidden');
        videoRow.style.height='100%';
        

    }else{
        e.target.src= e.target.dataset.videoshow
        e.target.setAttribute('data-photostate','show');
        videoRow.style.height='0px';
    }



})

itemImgList.forEach((itemImg,index,itemImgs)=>{
    itemImg.addEventListener('click',e=>{


        itemImgs.forEach(video__img=>{
            if(video__img.classList.contains('active')){
                video__img.classList.remove('active')
            }
        })
        itemImg.classList.add('active')
        videoFrame.src=itemImg.dataset.traller

    })
})