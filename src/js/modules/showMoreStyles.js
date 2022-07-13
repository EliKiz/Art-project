import {getResorse, getResourceData} from '../services/requests';
const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);
    
    btn.addEventListener('click', function() { 
        getResorse('http://localhost:3000/styles')
        .then(res => { 
            createCards(res);
            this.remove();
        })
        .catch(error => { 
            btn.style.color = 'red';
            btn.textContent = `Ошибка при загрузке данных`;
            console.log(error);
        });
    });


    // btn.addEventListener('click', function() { 
    //     getResourceData('http://localhost:3000/styles')
    //         .then(data => { 
    //             console.log(data);
    //             createCards(data);
    //         })
    //         .catch(Error=> console.log(Error));
        
    //     this.remove();
    // });

    function createCards(respons) { 
        respons.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add( 'animated', 'fadeInUp','col-sm-3','col-sm-offset-0','col-xs-10','col-xs-offset-1')
            card.innerHTML = `
 				<div class=styles-block>
 					<img src=${src}>
 					<h4>${title}</h4>
 					<a href="${link}">Подробнее</a>
 				</div>
            `;
            document.querySelector(wrapper).appendChild(card);
        });
    }
};
export default showMoreStyles;