function bgset() {
let img = localStorage.getItem("image")
if (img === null){}
else {
document.body.style.backgroundImage = "url(" + img + ")";
document.body.style.backgroundSize = "100% 100%";
}
let font = localStorage.getItem("font")
if (font === null){}
else {
document.body.style.fontFamily = font;
}
}
