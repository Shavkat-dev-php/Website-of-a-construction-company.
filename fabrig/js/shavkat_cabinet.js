document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll('.sidebar ul li a');
  const contentArea = document.getElementById("content-area");


  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      links.forEach(l => l.classList.remove('active'));

      this.classList.add('active');

      const contentToShow = link.getAttribute("data-content");

      contentArea.innerHTML = "";

      switch (contentToShow) {
        case "content1":
          contentArea.innerHTML = `
            <div class="grid">
              <div class="grid-item">
                <img src="/fabrig/images/kata1.svg" alt="Текущие заказы" />
                <a href="#">Текущие заказы</a>
              </div>
              <div class="grid-item">
                <img src="/fabrig/images/kata2.svg" alt="Личный счёт" />
                <a href="#">Личный счёт</a>
              </div>
              <div class="grid-item">
                <img src="/fabrig/images/kata3.svg" alt="Личные данные" />
                <a href="#">Личные данные</a>
              </div>
              <div class="grid-item">
                <img src="/fabrig/images/kata4.svg" alt="История заказов" />
                <a href="#">История заказов</a>
              </div>
              <div class="grid-item">
                <img src="/fabrig/images/kata5.svg" alt="Профили заказов" />
                <a href="#">Профили заказов</a>
              </div>
              <div class="grid-item">
                <img src="/fabrig/images/kata6.svg" alt="Корзина" />
                <a href="#">Корзина</a>
              </div>
              <div class="grid-item">
                <img src="/fabrig/images/kata7.svg" alt="Подписки" />
                <a href="#">Подписки</a>
              </div>
              <div class="grid-item">
                <img src="/fabrig/images/kata8.svg" alt="Контакты" />
                <a href="#">Контакты</a>
              </div>
            </div>`;
          break;
        case "content2":
          contentArea.innerHTML = `<h3>Текущие заказы не найдены</h3><a href="#">Посмотреть историю заказов</a><br><a href="#">Перейти в каталог</a>`;
          break;
        // Keyingi contentlar uchun davom eting...
        default:
          contentArea.innerHTML = `<p>Контент пока не доступен.</p>`;
      }
    });
  });
});
