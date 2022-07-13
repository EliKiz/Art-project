const sliders = (slides, dir, prev, next, switchingTime) => { 
    let slideIndex = 1,
        paused = false;
    
    const items = document.querySelectorAll(slides);
        

    function showSlides(n) { 
        if(n > items.length) { 
            slideIndex = 1;
        }

        if(n < 1 ) { 
            slideIndex = items.length;
        }

        items.forEach(slide => { 
            slide.classList.add('animated');
            slide.style.display = 'none';
        });

        items[slideIndex - 1 ].style.display = ' block';
    }
    showSlides(slideIndex);

    function plusSlides(n) { 
        showSlides(slideIndex += n);
    }
        // отсутсвие зависимости селекторов кнопок 
    try { 
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);
        
        prevBtn.addEventListener('click', () => { 
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
        nextBtn.addEventListener('click', () => { 
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });
    } catch(e){}

    function activateAnimation() { 
        // вертикальный слайдер 

        if(dir === 'vertical') { 
            paused = setInterval(function() { 
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, switchingTime);
        } else { 
            paused = setInterval(function() { 
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            }, switchingTime);
        }
    }
    activateAnimation();

    // события на мыш 

    items[0].parentNode.addEventListener('mouseenter', () => { 
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => { 
        activateAnimation(paused);
    });

};

     
export default sliders;