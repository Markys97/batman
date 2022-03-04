let videoRow= document.querySelector('.video__row');
let videoButtonImg= document.querySelector('.video__footer-imgBtn');
let videoFrame= document.querySelector('.video__frame')
let itemImgList= document.querySelectorAll('.video__img')

videoButtonImg.addEventListener('click',e=>{
    let stateRowVideo=e.target.dataset.videostate;

    if(stateRowVideo === 'show'){
        e.target.src= e.target.dataset.videoshow
        videoRow.style.height='100%'
        e.target.setAttribute('data-videostate','hidden')
    }else{
        e.target.src= e.target.dataset.videoclose
        videoRow.style.height='0px'
        e.target.setAttribute('data-videostate','show')
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