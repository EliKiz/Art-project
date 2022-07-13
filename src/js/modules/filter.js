const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
            items = document.querySelectorAll('li'),
            wrapper = document.querySelector('.portfolio-wrapper'),
            markAll = wrapper.querySelectorAll('.all'),
            no = document.querySelector('.portfolio-no');

    function Typefilter(type) {  
        markAll.forEach(item => { 
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        if(type) { 
            console.log(type.length);
            type.forEach(item => { 
                item.style.display = 'block';
                item.classList.add('animation', 'fadeIn');
            });
        } 

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(type.length == 0) { 
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }

    }

    menu.addEventListener('click', (e)=> {   
        let target = e.target;

        let targetList = target.classList[0];
        console.log('targetList is', targetList);
        let itemList = wrapper.querySelectorAll(`.${targetList}`);
        console.log('itemList is', itemList);
        Typefilter(itemList);

        if(target && target.tagName == 'LI' ) { 
            items.forEach(item => { 
                item.classList.remove('active');
            });
            target.classList.add('active');
        }

    });























    // const typeFilter = (markType) => {
    //     markAll.forEach(mark => { 
    //         mark.style.display = 'none';
    //         mark.classList.remove('animated', 'fadeIn');
    //     });

    //     no.display = 'none';
    //     no.classList.remove('animated', 'fadeIn');

    //     if(markType) { 
    //         markType.forEach(mark => { 
    //             mark.style.display = 'block';
    //             mark.classList.add('animated', 'fadeIn');
    //         });
    //     }
    //     if (markType.length == 0) {
    //         no.style.display = 'block'
    //         no.classList.add('animated', 'fadeIn')
    //     }
    // };
    
    // // menu.addEventListener('click', (e) => {
    // //     let classSelect = e.target.classList[0];
    // //     let allElems = wrapper.querySelectorAll(`.${classSelect}`)
    // //     typeFilter(allElems)
    // //   });

    // menu.addEventListener('click', (e)=> {  
    //     let target = e.target;

    //     let classSelect = e.target.classList[0];
    //     let allElems = wrapper.querySelectorAll(`.${classSelect}`)
    //     typeFilter(allElems);

             
        
    //     if(target && target.tagName == 'LI' ) { 
            
    //         items.forEach(btn => {
    //             btn.classList.remove('active');
    //             target.classList.add('active');
    //         });
    //     }

    // });


};
export default filter;