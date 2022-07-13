// import disabledModal from "./disableModal";
import calcScroll from "./calcScroll";
import {modifyBody} from "./calcScroll";

const modals = () =>  {
    let btnPressed = false;

    function showModals(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(item => { 
            item.addEventListener('click', (e) =>  {
                if(e.target) { 
                    e.preventDefault();
                }
                btnPressed = true;

                if(destroy) { 
                    item.remove();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });

                modal.style.display = "block";
                modifyBody("hidden", scroll);
                // document.body.style.overflow = "hidden";
                // document.body.style.marginRight = `${scroll}px`;

            });
        });

            close.addEventListener('click', () => { 
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                modifyBody('', 0);
                
            });
            
        
        modal.addEventListener('click', (e) => { 
            if(e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
               
            }
        });

    }

    function showModalsByTime(selector, time) {
        setTimeout((function() { 
            let display;
            // Проверяем модалки на стили 
            document.querySelectorAll('[data-modal]').forEach(item => { 
                if(getComputedStyle(item).display !== 'none') { 
                    display = 'block';
                }
            });
            // Если на страице не открыты окна 
            if(!display) { 
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }), time);
    }

    function openByScroll(selector) { 
        window.addEventListener('scroll', ()=>  {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) { 
                document.querySelector(selector).click();
            }
        });
    }
 
    showModals('.button-design', '.popup-design', '.popup-design .popup-close');
    showModals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    showModals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
  
    // showModalsByTime('.popup-consultation', 5000);
};

export default modals;
