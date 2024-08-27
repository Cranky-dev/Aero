function bgset() {
let img = localStorage.getItem("image")
if (img === null){}
else {
document.body.style.backgroundImage = "url(" + img + ")"
}
let font = localStorage.getItem("font")
if (font === null){}
else {
document.body.style.fontFamily = font;
}
}
