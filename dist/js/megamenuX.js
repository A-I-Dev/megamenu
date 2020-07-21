(() => {
    const megaMenuParent = document.querySelector('.mega-menu-X');
    const menuItems = [
        {name: "Home", link: "/dist/index.html", mega: false},
        {name: "Products", link: "", mega: true, children: [
            {name: "Cheese", link: "/cheese", mega: true, children: [
                {name: "Lamb", link: "/meat/soft", mega: false},
                {name: "Goat", link: "/meat/hard", mega: false},
                {name: "Cow", link: "/meat/fresh", mega: true, children: [
                    {name: "Soft", link: "/meat/soft", mega: false},
                    {name: "Hard", link: "/meat/hard", mega: false}              
                ]}                
            ]},
            {name: "Eggs", link: "/eggs", mega: false},
            {name: "Meat", link: "/meat", mega: true, children: [
                {name: "Beef", link: "/meat/beef", mega: false},
                {name: "Pork", link: "/meat/pork", mega: false},
                {name: "Lamb", link: "/meat/lamb", mega: false}
            ]}
        ]}
    ];

    menuItems.forEach(item => {
        let itemMarkup = `
                        <li class="mm-item mega">
                            <a class="mm-item-text" href="${item.link}">${item.name}</a>
                            ${item.mega ? 
                                `<ul class="mm-sub-menu">
                                                ${prepareSubMenus(item.children)}
                                            </ul>` : 
                                ``
                            }
                        </li>
                        `;

        megaMenuParent.insertAdjacentHTML('beforeend', itemMarkup);
    })

    function prepareSubMenus(menuItemChildren) {
        const menuItemObject = menuItemChildren;
        let itemMarkup = ``;

        menuItemObject.forEach(child => {
            itemMarkup += 
            `<li class="sm-item">
                <a class="sm-item-text" href="${child.link}">${child.name}</a>
                ${child.mega ? 
                    `<ul class="mm-sub-menu">
                                    ${prepareSubMenus(child.children)}
                                </ul>` : 
                    ``
                }
            </li>`;
        });

        return itemMarkup;
    }
})()