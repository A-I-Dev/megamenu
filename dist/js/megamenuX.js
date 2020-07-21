(() => {
    const megaMenuParent = document.querySelector('.mega-menu-X');
    const menuItems = [
        {name: "Home", link: "/dist/index.html", mega: false},
        {name: "Products", link: "", mega: true, children: [
            {name: "Meat", link: "/meat"},
            {name: "Eggs", link: "/eggs"},
            {name: "Cheese", link: "/cheese"}
        ]}
    ];

    menuItems.forEach(item => {
        let itemMarkup;

        if (item.mega) {
            itemMarkup = `
                        <li class="mm-item mega">
                            <span class="mm-item-text">${item.name}</span>
                            <ul class="mm-sub-menu">
                                ${item.children.map(key => {
                                    return `<li class="sm-item">
                                        <a class="sm-item-text" href="${key.link}">${key.name}</a>
                                    </li>`;
                                }).join('')}
                            </ul>
                        </li>
                        `;
        }
        else {
            itemMarkup = `
                        <li class="mm-item no-mega">
                            <a class="mm-item-text" href="${item.link}">${item.name}</a>
                        </li>
                        `;
        }

        megaMenuParent.insertAdjacentHTML('beforeend', itemMarkup);
    })
})()