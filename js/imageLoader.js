let data = {
    "design": {
        "2018": [1, 2, 3, 4, 5],
        "2019": [1, 2, 3, 4, 5],
        "2020": [1, 2, 3, 4]
    },
    "poster": {
        "2018": [1, 2],
        "2019": [1, 2, 3],
        "2020": [4, 5, 6]
    },
    "work": {
        "2018": [1, 2, 3, 4, 5, 6, 7, 8, 9],
        "2019": [1, 2, 3, 4, 5, 6, 7],
        "2020": [1, 2, 3, 4, 5, 6, 7, 8]
    }
};

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
let type = getUrlParam("type");
let year = getUrlParam("year");

let upper = document.getElementById("upper");
let lower = document.getElementById("lower");

// add image
data[type][year].forEach(function (value, index) {
    let div = document.createElement("div");
    div.classList = "swiper-slide";
    div.setAttribute("data-id", index);
    let img = document.createElement("img");
    img.src = `../images/${type}-${year}/${value}.png`;
    div.appendChild(img);
    upper.appendChild(div);

    div = document.createElement("div");
    div.classList = "swiper-slide";
    div.setAttribute("data-id", index);
    img = document.createElement("img");
    img.src = `../images/${type}-${year}/${value}.png`;
    div.appendChild(img);
    lower.appendChild(div);
});