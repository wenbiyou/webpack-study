import "./style.less";

import icon from "../assets/001.jpg";

const img = new Image();
img.src = icon;

document.querySelector(".box").innerHTML = img;
