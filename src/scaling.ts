import $ from "jquery"
// scroll opacity function for arrow

export default function scalingOnScroll(){
    $(window).scroll(function() {
        var scrollTop:number = $(this).scrollTop() as number;
    
        $('#page1-arrow').css({
          opacity: function() {
            var elementHeight:number = $(this).height() as number;
            return 0 + (elementHeight - scrollTop/2) / elementHeight;
          }
        });
      });
    
    // scroll scale function for play button
    const play_btn: HTMLElement | null = document.getElementById('play-btn')
    
    window.onscroll = (event) => {
        const x = window.scrollY / 1000;
        play_btn!.style.transform = `scale(${0.8 - (x/1.5)})`;
      };
}

