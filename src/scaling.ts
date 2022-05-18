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
    const nft_1: HTMLElement | null = document.getElementById('nft-image-1')
    const nft_2: HTMLElement | null = document.getElementById('nft-image-2')
    const nft_3: HTMLElement | null = document.getElementById('nft-image-3')
    
    window.onscroll = (event) => {
        const x = window.scrollY / 1000;
        play_btn!.style.transform = `scale(${0.8 - (x/1.5)})`;

        nft_1!.style.transform = `scale(${0.2 + x/2})`;
        console.log(window.scrollY)
        nft_2!.style.transform = `scale(${0.2 + x/2})`;
        console.log(window.scrollY)
        nft_3!.style.transform = `scale(${0.2 + x/2})`;
        console.log(window.scrollY)
      };


    //   const nft1: HTMLElement | null = document.getElementById('nft-image-1')
    
    // window.onscroll = (event) => {
    //     const nftscroll1 = window.scrollY / 1000;
    //     nft1!.style.transform = `scale(${0.8 + (nftscroll1/1.5)})`;
    //   };
}

