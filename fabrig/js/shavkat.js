// Subtext elementini joylashtirish funksiyasi
function moveSubtext() {
  const ofertaElement = document.querySelector('.oferta');
  const subtextElement = document.querySelector('.order-form__inner-subtext');

  if (ofertaElement && subtextElement) {
    // Kichik ekranlarda subtextni oferta dan keyin joylashtirish
    if (window.innerWidth <= 1024) {
      // Agar subtext allaqachon joylashtirilgan bo'lsa, uni qayta joylashtirish
      if (subtextElement.parentNode !== ofertaElement.parentNode) {
        ofertaElement.parentNode.insertBefore(subtextElement, ofertaElement.nextSibling);
      }
    } else {
      // Katta ekranlarda subtextni asl joylashuviga qaytarish
      const originalParent = document.querySelector('.container-order__form__inner');
      if (originalParent && subtextElement.parentNode !== originalParent) {
        originalParent.appendChild(subtextElement); // Subtextni asl joyiga qaytarish
      }
    }
  }
}

// Pagination funksiyasi
function updatePagination() {
  const pagesContainer = document.querySelector('.pages');
  const pages = `
    <a href="#" class="page aktiv">1</a>
    <span class="zeros">...</span>
    <a href="#" class="page">21</a>
  `;

  // Ekran hajmi 480px bo'lganda paginationni yangilash
  if (window.innerWidth <= 480) {
    pagesContainer.innerHTML = pages; // Raqamlarni yangilash
  } else {
    // Katta ekranlar uchun asl raqamlarni qayta tiklash
    const fullPages = `
      <a href="#" class="page aktiv">1</a>
      <a href="#" class="page">2</a>
      <a href="#" class="page">3</a>
      <a href="#" class="page">4</a>
      <span class="zeros">...</span>
      <a href="#" class="page">21</a>
    `;
    pagesContainer.innerHTML = fullPages; // Asl raqamlarni tiklash
  }
}

// Dastlabki joylashuvni sozlash
moveSubtext();
updatePagination();

// Ekran o'lchami o'zgarganda joylashuv va paginationni yangilash
window.addEventListener('resize', () => {
  moveSubtext();
  updatePagination();
});

// Sahifa yuklanganda tekshirish
document.addEventListener("DOMContentLoaded", () => {
  moveSubtext();
  updatePagination();
});
