"use strict"

function updateImage(){
    document.querySelector("#gbr-contoh").innerHTML=gantiImage()
}

function gantiImage(){
    let imgTerganti = document.querySelector("#gbr-contoh") 
    let btnGantiImg = document.querySelectorAll(".gnt-img")

    for(Image of btnGantiImg){
        Image.addEventListener('click', function(event){
            const target = event.target
            
            let srcImgTerganti = target.getAttribute("src")
            imgTerganti.setAttribute("src", srcImgTerganti)
        })

    }
}
updateImage()