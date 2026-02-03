
function showCardOnImg(selector, cardName) {
    const img = document.querySelector(selector)
    img.setAttribute('src', cardName)
}

function showRandomCardOnImg(selector, basePath, maxCards) {
    const img = document.querySelector(selector)
    const cardName = randomInt(1, maxCards) + '.png'
    const cardPath = basePath + '/' + cardName
    img.setAttribute('src', cardPath)
    animateCard(img)
}

function animateCard(img) {
  if (!img) return;

  // Ensure it has the base class
  img.classList.add("card-image");

  // Restart animation reliably
  img.classList.remove("card--reveal");
  void img.offsetWidth; // force reflow
  img.classList.add("card--reveal");

  // Clean up trigger class after animation
  img.addEventListener(
    "animationend",
    () => img.classList.remove("card--reveal"),
    { once: true }
  );
}
