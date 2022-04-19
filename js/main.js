const rightSidebarToggle = () => {
    const hamburgerMenu = document.querySelector('#hamburger-menu')
    const rightSidebarMenu = document.querySelector('.right-sidebar-menu')
    const icon = document.querySelector('.fa-bars')


    hamburgerMenu.addEventListener('click', () => {
        rightSidebarMenu.classList.toggle('active')
        if (icon.classList.contains('fa-bars')) {
            icon.classList.replace('fa-bars', 'fa-xmark')
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars')
        }

    })
}
rightSidebarToggle()


const showSearch = () => {
    const showSearch = document.querySelector('#search')
    const searchBtn = document.querySelector('.search-btn')
    const closeSearchBtn = document.querySelector('.close-search-btn')

    searchBtn.addEventListener('click', () => {
        showSearch.classList.add('show-search')
    })
    closeSearchBtn.addEventListener('click', () => {
        showSearch.classList.remove('show-search')
    })
}
showSearch()