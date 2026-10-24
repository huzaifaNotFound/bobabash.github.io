const imageNumbers = ["https://i.ibb.co/ds9tt8JB/1.jpg",
"https://i.ibb.co/ynSSr846/2.jpg",
"https://i.ibb.co/B5tJVmmj/3.jpg",
"https://i.ibb.co/GQn647Sn/4.jpg",
"https://i.ibb.co/V0cJHX2p/5.jpg",
"https://i.ibb.co/8Lf4sdwQ/7.jpg",
"https://i.ibb.co/FLpcn6Wm/8.jpg",
"https://i.ibb.co/KpCkhnsf/9.jpg",
"https://i.ibb.co/bjMLtw92/10.jpg",
"https://i.ibb.co/k27y04s9/11.jpg",
"https://i.ibb.co/93B9sFKZ/12.webp"];
let idx = 0;
let hasClicked = false;
let atEnd = false;

const btn = document.getElementById("btn");
const imageContainer = document.getElementById("image-container");

btn.addEventListener("click", () => {
  let img = imageContainer.querySelector("img");

  if (!img) {
    img = document.createElement("img");
    img.className = "h-150";
    imageContainer.appendChild(img);
  }

  if (atEnd) {
    atEnd = false;
    idx = 0;
    btn.textContent = "Click for more spooky vibes";
  }

  if (idx === imageNumbers.length - 1) {
    img.src = imageNumbers[idx];
    img.alt = `Spooky image ${idx + 1}`;
    atEnd = true;
    idx = 0; 
    btn.textContent = "That's all I have! Click to start over";
    return;
  }

  const num = imageNumbers[idx];
  img.src = num;
  img.alt = `Spooky image ${idx + 1}`;

  idx = idx + 1;

  if (!hasClicked) {
    hasClicked = true;
    btn.textContent = "Click for more spooky vibes";
  }
});