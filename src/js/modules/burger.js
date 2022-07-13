const burger = ( burgerList, burgerSelector) => { 

    const btn = document.querySelector(burgerSelector),
        listBurger = document.querySelector(burgerList);

        listBurger.style.display = 'none';

    btn.addEventListener('click', () => { 
        if(listBurger.style.display == 'none' &&  window.screen.availWidth < 993) { 
            listBurger.style.display = 'block';
        }else { 
            listBurger.style.display = 'none';
        }
    });
    window.addEventListener('resize', ()=> {
        if(  window.screen.availWidth > 992) { 
            listBurger.style.display = 'none';
        }
    });

};

export default burger;