$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function displayVideo() {
    return document.querySelector(".principal").innerHTML = `<div class="watchbox"><iframe class='watch' src="https://www.youtube.com/embed/Jmn8pLnNvF0?autoplay=1" title="Trailer Lucifer" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
}

document.querySelector(".watch-now").addEventListener('click', displayVideo)

