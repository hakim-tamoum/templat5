window.onload = function(){
    // landing page
    let hdr = document.querySelector('.header');
    let img = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img4.jpg'];
    setInterval( ()=> {
        let nbr = Math.floor(Math.random()*img.length);
        hdr.style.cssText = `background-image: url("../images/${img[Math.floor(Math.random()*img.length)]}")`;
    }, 4000);

    //scroll plugin
    $("html").niceScroll(
        {autohidemode: false,cursorwidth: '10px',cursorcolor: "#067f8a",cursorborder: "1px solid #fff",zindex: 999,
        });
        
        /* $(document).ready(function() {
            $("html").niceScroll({cursorwidth: '10px', autohidemode: false, zindex: 999, cursorcolor:"#067f8a" });
        });*/
    };
