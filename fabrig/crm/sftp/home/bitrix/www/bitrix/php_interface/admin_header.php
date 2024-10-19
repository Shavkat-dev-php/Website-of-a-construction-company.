<script type="text/javascript">
const AUTH_LINK_CLASS = 'menu-popup-item';
const AUTH_LINK_TEXT = 'Авторизоваться';
const TARGET_PAGE = 'user_admin.php'; // Kerakli sahifa

const observeLinks = () => {
    const authLinks = document.querySelectorAll(`.${AUTH_LINK_CLASS}`);
    authLinks.forEach(hideAuthLink);
};

const hideAuthLink = (authLink) => {
    const textElements = authLink.getElementsByClassName('menu-popup-item-text');

    if (textElements.length > 0) {
        const textElement = textElements[0];
        if (textElement.textContent.trim() === AUTH_LINK_TEXT) {
            authLink.style.display = 'none'; // Tugmani yashirish
        }
    }
};

const isUserLoggedIn = () => {
    const userLink = document.querySelector('.adm-header-user-block');

    return userLink && userLink.innerText.trim() === 'Александр Медведев';
};

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith(TARGET_PAGE)) {
        if (isUserLoggedIn()) {
            return;
        }

        observeLinks();
    }

    // MutationObserver yaratish
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
});
</script>
