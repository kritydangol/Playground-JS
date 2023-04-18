// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const imgCont = document.getElementById("container")

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function imgRender() {
    // added imgdom because its not recommended to directly change the innerHTML [will load slower for lots of data]
    imgDom = ""
    for (let i = 0; i < imgs.length; i++) {
        imgDom += `<img class="team-img" src="${imgs[i]}">`
    }
    imgCont.innerHTML = imgDom
}
imgRender()