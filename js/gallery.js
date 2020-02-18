var displayBar = document.querySelector("figure.displayBar");
var thumbBar = document.querySelector("ul.thumbBarImgs");
var nextBtn = document.querySelectorAll('div[class*="slide"]');
var upBtn = document.querySelector("div.arrow.up");
var thumbBarRoll = document.querySelector("div.thumbBarImgs");

//images list
var imgList = [
  {
    src: "images/flowers-pink-small.jpg",
    title: "Market in Münster",
    description: "Market in Münster, North Rhine-Westphalia, Germany",
    url: "https://commons.wikimedia.org/w/index.php?curid=62071586"
  },
  {
    src: "images/flowers-purple-small.jpg",
    title: "Sentmaring Park",
    description: "Sentmaring Park, Münster, North Rhine-Westphalia, Germany",
    url: "https://commons.wikimedia.org/w/index.php?curid=48576226"
  },
  {
    src: "images/flowers-red-small.jpg",
    title: "Poppies in cornfield",
    description:
      "Poppies in cornfield, Dülmen,  North Rhine-Westphalia, Germany",
    url: "https://commons.wikimedia.org/w/index.php?curid=40957238"
  },
  {
    src: "images/flowers-white-small.jpg",
    title: "Daffodils in Sentmaring park",
    description:
      "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany",
    url: "https://commons.wikimedia.org/w/index.php?curid=48211466"
  },
  {
    src: "images/flowers-yellow-small.jpg",
    title: "Sunflowers in the hamlet Dernekamp",
    description:
      "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany",
    url: "https://commons.wikimedia.org/w/index.php?curid=61514522"
  }
];

// Setting up the bar
for (var i = 0; i < imgList.length; i++) {
  var newLi = document.createElement("li");
  var newImage = document.createElement("img");
  newImage.setAttribute("src", imgList[i].src);
  newImage.setAttribute("title", imgList[i].title);
  newImage.setAttribute("alt", imgList[i].description);
  newImage.setAttribute("url", imgList[i].url);
  newImage.index = i;
  newImage.className = "thumbnail";
  newLi.appendChild(newImage);
  thumbBar.appendChild(newLi);
}

var slideIndex = 0;
currentSlide(slideIndex);

thumbBar.onclick = function(event) {
  if (event.target && event.target.nodeName === "IMG") {
    currentSlide(event.target.index);
  }
};

function displayImage(img) {
  displayBar
    .querySelector("img")
    .setAttribute("src", img.getAttribute("src").replace("small", "large"));
  displayBar.querySelector("img").setAttribute("alt", img.getAttribute("alt"));
  displayBar.querySelector("h3").innerHTML = img.getAttribute("title");
  displayBar.querySelector("a").href = img.getAttribute("url");
  displayBar.querySelector("figcaption").innerHTML = img.getAttribute("alt");
}

function outlineClearing() {
  var thumbImgs = document.querySelectorAll("img.thumbnail");
  for (var i = 0; i < thumbImgs.length; i++) {
    thumbImgs[i].className = thumbImgs[i].className.replace(" active", "");
  }
}
nextBtn[0].onclick = function() {
  plusSlides(1);
};
nextBtn[1].onclick = function() {
  plusSlides(-1);
};
function plusSlides(n) {
  showSlide((slideIndex += n));
}
function currentSlide(n) {
  showSlide((slideIndex = n));
}
function showSlide(n) {
  var thumbImgs = document.querySelectorAll("img.thumbnail");
  if (n >= thumbImgs.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = thumbImgs.length - 1;
  }

  outlineClearing();

  thumbImgs[slideIndex].className += " active";
  displayImage(thumbImgs[slideIndex]);
}

setInterval(function() {
  plusSlides(1);
}, 3000);
upBtn.addEventListener("click", thumbRollUp);

function thumbRollUp() {
  if (thumbBarRoll.className.search("rollUp") < 0) {
    thumbBarRoll.className += " rollUp";
    upBtn.className = upBtn.className.replace("-up", "-down");
  } else {
    thumbBarRoll.className = thumbBarRoll.className.replace(" rollUp", "");
    upBtn.className = upBtn.className.replace("-down", "-up");
  }
}
