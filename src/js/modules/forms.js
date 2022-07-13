// import checkNumInputs from "./checkNumInputs";
// import closeModalDone from "./closemodalTest";
import { postData } from "../services/requests";

const forms = (state) => { 
    const form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input'),
            upload = document.querySelectorAll('[name="upload"]'),
            selects = document.querySelectorAll('.calc form');

    // checkNumInputs('input[name = "user_phone"]');
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжемся',
        failure: 'Что то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
        
    };

    // пути отправки данных
    const path = { 
        designer: 'assets/server.php',
        question: 'assets/question.php',
    };

   

    const clearInputs = () => { 
        inputs.forEach(item => { 
            item.value = '';
        });
        upload.forEach(item => { 
            item.previousElementSibling.textContent = "Файл не выбран";
        });
        selects.forEach(item => {
            item.reset();
        });
    };

    // Установка имени файла при загрузке 
    
    upload.forEach(item => { 
        item.addEventListener('input', () => {
            console.log(item.files[0]);
            let dots;
            //   'awdasfag.jpg' =>  ['awdasfag', 'jpg']
            let arr = item.files[0].name.split('.');
            arr.lenght > 5 ? '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            // установка названия файла
            item.previousElementSibling.textContent = name;

        });
    });

    function closeModalDone(selector, time) { 
        setTimeout(()=> { 
            document.querySelector(selector).style.display = 'none';
            document.body.style.overflow = '';
        }, time);
    }

    form.forEach(item => { 
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            //  блок сообщения 
            
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            // statusMessage.style.cssText = "display: flex; flex-direction: column; align-items: center";
            item.parentNode.appendChild(statusMessage);

            // прозрачная форма для отображения статуса отправки 
            item.classList.add('animated', 'fadeOutUp');
            // удаление формы, для корректного отображения статуса
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            // отображение статуса сообщения
            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            // сбор данных

            const formData = new FormData(item);
            // Добавление данных в FormData append(знач. ключ) 
            if(item.getAttribute('data-calc') === 'calc') { 
                for(let key in state) { 
                    formData.append(key, state[key]);
                }
            }
            let api;
            console.log(`item is ${formData}`);
            //поиск блока в родителе
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, formData)
                .then(res => { 
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => { 
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => { 
                    // удаление статуса отправки и показ формы
                    setTimeout(() => { 
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                        // closeModalDone('.popup_calc_end');
                        clearInputs();
                        document.querySelector('.calc-price').textContent = 'Пожалуйста, выберите размер и материал картины для расчета'
                    }, 3000);
                    
                }); 


        });
    });

};

export default forms;