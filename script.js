function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
const fakePic = "https://thispersondoesnotexist.com/";

// showing the images
const imgContainer = document.getElementById("images");
// here 1
const rescontainer = document.getElementById("result");
function draw() {
  rescontainer.innerHTML = "";
  imgContainer.innerHTML = "";
  const again = document.createElement("button");
  again.innerHTML = "play again";
  again.onclick = draw;

  const randomBool = Math.random() > 0.5;
  const arr = [randomBool, !randomBool];

  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? realPic() : fakePic;
    // here 2
    img.onclick = function () {
      if (isReal) {
        rescontainer.innerHTML = "mabrook ";
      } else {
        rescontainer.innerHTML = "try again ";
      }
      rescontainer.appendChild(again);
    };

    imgContainer.appendChild(img);
  }
}

draw();
