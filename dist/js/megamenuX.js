(() => {
    const megaMenuParent = document.querySelector('.mega-menu-X');
    let menuItems = [
        {
            name: "Home",
            link: "index.html",
            mega: false
        },
        {
            name: "Products",
            link: "",
            mega: true,
            withImages: true,
            children: [
                {
                    name: "Cheese",
                    img: "./img/meat.jpg",
                    link: "/cheese",
                    mega: true,
                    children: [
                        {
                            name: "> Lamb",
                            link: "/meat/soft",
                            mega: false
                        },
                        {
                            name: "> Goat",
                            link: "/meat/hard",
                            mega: false
                        },
                        {
                            name: "> Cow",
                            link: "/meat/fresh",
                            mega: false,
                            // children: [
                            //     {
                            //         name: "Soft",
                            //         link: "/meat/soft",
                            //         mega: false
                            //     },
                            //     {
                            //         name: "Hard",
                            //         img: "./img/meat.jpg",
                            //         link: "/meat/hard",
                            //         mega: false
                            //     }
                            // ]    
                        }
                    ]
                },
                {
                    name: "Eggs",
                    img: "./img/meat.jpg",
                    link: "/eggs",
                    mega: false
                },
                {
                    name: "Meat",
                    img: "./img/meat.jpg",
                    link: "/meat",
                    mega: true,
                    children: [
                        {
                            name: "> Beef",
                            link: "/meat/beef",
                            mega: false
                        },
                        {
                            name: "> Pork",
                            link: "/meat/pork",
                            mega: false
                        },
                        {
                            name: "> Lamb",
                            link: "/meat/lamb",
                            mega: false
                        }
                    ]
                }
            ]
        },
        {
            name: 'Manufacturers',
            link: '/manufacturers',
            mega: true,
            children: [
                {
                    name: 'Vereia',
                    link: '/vereia',
                    mega: false
                },
                {
                    name: 'Milbona',
                    link: '/vereia',
                    mega: false
                },
                {
                    name: 'Pilos',
                    link: '/vereia',
                    mega: false
                }
            ]
        }
    ];

    prepareMainMenu(menuItems)    

    function prepareMainMenu(menuItemsJSON) {
        const menuItemsArray = menuItemsJSON;
        menuItems.forEach(item => {
            let itemMarkup = `
                            <li class="mm-item ${item.mega ? 'mega' : ''}">
                                <a class="mm-item-text" href="${item.link}">${item.name}</a>
                                ${item.mega ? 
                                    `<ul class="mm-sub-menu ${item.withImages ? 'with-images' : ''}">
                                                    ${prepareSubMenus(item.children)}
                                                </ul>` : 
                                    ``
                                }
                            </li>
                            `;
    
            megaMenuParent.insertAdjacentHTML('beforeend', itemMarkup);
        })
    }

    function prepareSubMenus(menuItemChildren) {
        const menuItemObject = menuItemChildren;
        let itemMarkup = ``;

        menuItemObject.forEach(child => {
            itemMarkup += 
            `<li class="sm-item">
                <a class="sm-item-text" href="${child.link}">${child.name}</a>
                ${child.img ? 
                    `
                    <a class="img-wrap" href="${child.link}">
                        <img src="${child.img}">
                    </a>
                    ` :
                    ``
                }
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

    // fetch('http://127.0.0.1:5500/dist/js/menuItems.json')
    //     .then(res => res.json())
    //     .then(data => menuItems = data)
    //     .then(() => prepareMainMenu(menuItems));