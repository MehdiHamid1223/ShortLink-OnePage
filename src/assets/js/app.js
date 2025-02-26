window.onload = () => {

    const $ = document;

    const loading = $.getElementById('loading');

    const openSearchButton = $.getElementById('openSearchButton');
    const searchContent = $.getElementById('searchContent');
    const closeSearchContentButton = $.getElementById('closeSearchContentButton');

    const menuButton = $.getElementById('menuButton');
    const menuContent = $.getElementById('menuContent');
    const closeMenuContentButton = $.getElementById('closeMenuContentButton');

    setTimeout(() => {
        loading.style.opacity = 0;

        setTimeout(() => {
            loading.style.display = 'none';
            document.body.classList.remove('overflow-hidden');
            AOS.init();
        }, 200);
    }, 1000);

    const openSearchContent = () => {
        searchContent.classList.remove('hidden');

        setTimeout(() => {
            searchContent.classList.add('top-0');
        }, 200);
    }

    const closeSearchContent = () => {
        searchContent.classList.remove('top-0');

        setTimeout(() => {
            searchContent.classList.add('hidden');
        }, 200);
    }

    openSearchButton.addEventListener('click', openSearchContent);
    closeSearchContentButton.addEventListener('click', closeSearchContent);


    // ===================================================================================


    const openMenuContent = () => {
        menuContent.classList.remove('translate-x-full');

        setTimeout(() => {
            menuContent.classList.add('translate-x-0');
        }, 200);
    }

    const closeMenuContent = () => {
        menuContent.classList.remove('translate-x-0');

        setTimeout(() => {
            menuContent.classList.add('translate-x-full');
        }, 200);
    }

    menuButton.addEventListener('click', openMenuContent);
    closeMenuContentButton.addEventListener('click', closeMenuContent);
}