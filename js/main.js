


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

