window.onload = function(){
    let hdr = document.querySelector('.header');
    let img = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
    setInterval( ()=> {
        let nbr = Math.floor(Math.random()*img.length);
        hdr.style.backgroundImage = `url('../images/${img[nbr]}')`;
    }, 4000);
}
