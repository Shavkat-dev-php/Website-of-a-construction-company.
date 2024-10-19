document.addEventListener('DOMContentLoaded', function () {
    // "Авторизоваться" matnli havolani topish
    var authLink = document.querySelector('a[title="Авторизоваться под данным пользователем"]');

    if (authLink) {
        // Havolani yashirish
        authLink.style.display = 'none'; // Tugmani yashirish
    }
});

/*<?php
use Bitrix\Main\Page\Asset;

if (isset($APPLICATION) && $APPLICATION->GetCurPage() == '/bitrix/admin/') {
    $asset = Asset::getInstance();
    $asset->addJs('/local/js/admin/admin_script.js');
}
 bu kod init.php uchun js faylni ulash uchun */



 <script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
    console.log('Страница загружена, JavaScript работает...');

    const AUTH_LINK_CLASS = 'menu-popup-item';
    const AUTH_LINK_TEXT = 'Авторизоваться';

    const observeLinks = () => {
        const authLinks = document.querySelectorAll(`.${AUTH_LINK_CLASS}`);

        console.log('Номер ссылки: ', authLinks.length);

        authLinks.forEach(hideAuthLink);
    };

    const hideAuthLink = (authLink) => {
        const textElements = authLink.getElementsByClassName('menu-popup-item-text');

        if (textElements.length > 0) {
            const textElement = textElements[0];
            console.log('Текст кнопки:', textElement.textContent.trim());

            if (textElement.textContent.trim() === AUTH_LINK_TEXT) {
                console.log('Ссылка найдена: ', authLink);
                authLink.style.display = 'none'; // Tugmani yashirish
                console.log('Кнопка скрыта: ', authLink);
            }
        }
    };

    // MutationObserver ni yaratish
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            observeLinks();
        });
    });

    // O'zgarishlarni kuzatish
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Dastlabki havolalarni tekshirish
    observeLinks();
});

</script>