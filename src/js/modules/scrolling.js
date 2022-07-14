const scrolling = (upSelector) => { 

    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => { 
        if(document.documentElement.scrollTop > 1650) { 
            // upElem.classList.add('animated', 'fadeIn');
            // upElem.classList.remove('fadeOut');
            upElem.style.opacity = '1';
        }else { 
            upElem.style.opacity = '0';
            // upElem.classList.add('fadeOut');
            // upElem.classList.remove('fadeIn');
        }
    });

        // Scrolling with window.scrollTo

    // let links = document.querySelectorAll('[href^="#"]');

    // links.forEach(item =>{ 
    //     // console.log('item is ',item);
    //     item.addEventListener('click', (e) => {
    //         let target = e.target;
    //         console.log(target.textContent);
    //         switch(target.textContent) { 
    //             case 'Фотомозаика': 
    //                 console.log('done');
    //                 scrollToElem(2300);
    //                 break;
    //             case 'Шарж по фото': 
    //                 console.log('sharj');
    //                 scrollToElem(3600);
    //                 break;
    //         }
    //     });
        
    // });

    // function scrollToElem(heigght) { 
    //     window.scrollTo({
    //         top: heigght,
    //         behavior: 'smooth'
    //     });
    // }


    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.2;
    console.log(document.documentElement.scrollTop);
    links.forEach(link => { 
        if(link.getAttribute('href') != '#') { 
            link.addEventListener('click', function(event) { 
                event.preventDefault();
                    // кол-во пикселей от верха страницы до верхней точки видимого элемента 
                let heightTop = document.documentElement.scrollTop,
                // часть адресной строки 
                hash = this.hash,
                // получаем кол-во px до верхней границы к которомоу скроллим
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                // стартовая позиция
                start = null;
                console.log('heightTop',heightTop);
                console.log('toBlock', toBlock);
                    // аргументом принимает функцию, которая будет вызвана перед отрисовкой
                requestAnimationFrame(step);
                    // time автоматический аргумент приходящий в функцию 
                function step(time) { 
                    // условие выполнится только 1 раз для вычисления start
                    if(start === null) { 
                        start = time;
                    }
                    // time - каждый раз новый, а start выч при запуске анимации (step)
                    let progress = time - start,
                        // r - количество пикселей, на которое необходимо пролистать во время анимации
                        // r может быть как положительная так и отрицательная
                        r = (toBlock < 0 ? Math.max(heightTop - progress/speed, heightTop + toBlock) : 
                        Math.min(heightTop + progress/speed, heightTop + toBlock));
                        // Прокрутка документа до указанных координат.
                        document.documentElement.scrollTo(0, r);
                        // Условие на остановку анимации
                        if(r != heightTop + toBlock) { 
                            requestAnimationFrame(step);
                        }else { 
                            // в ручную устанавливаем url
                            location.hash = hash;
                            console.log(location.hash);
                        }
                }
            }); 
        }
    });

    // pure js Scrolling

    // const element = document.documentElement,
    //     body = document.body;

    // const calcScroll = () => { 
    //     upElem.addEventListener('click', function(event) { 
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if(this.hash !== '') { 
    //             event.preventDefault();
    //             let hashElemetn = document.querySelector(this.hash),
    //                 hashElementTop = 0;
    //             // 
    //             while(hashElemetn.offsetParent) { 
    //                 hashElementTop += hashElemetn.offsetTop;
    //                 hashElemetn = hashElemetn.offsetParent;
    //             }
    //            hashElementTop = Math.round(hashElementTop);
    //            smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };
    // const smoothScroll = (from, to, hash) => { 
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;

    //     if(to> from) { 
    //         speed = 30;
    //     }else { 
    //         speed = -30;
    //     }

    //     let move = setInterval(function() { 
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if(
    //             prevScrollTop === scrollTop || 
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)

    //         ) { 
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         } else { 
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);

    // };
    // calcScroll();

};
export default scrolling;