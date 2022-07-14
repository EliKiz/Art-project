import {postData} from '../services/requests';
const drop = () => { 
    // события * - для перетаскивания элементов в самом доме
    // drag *
    // dragend * 
    // dragenter - объект над dropArea
    // dragexit * 
    // dragleave - объект за пределами dropArea 
    // dragover - объект зависает над dropArea
    // dragstart *
    // drop  - объект отправлен в dropArea

    const fileInputs = document.querySelectorAll('[name = "upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => { 
        fileInputs.forEach(input => { 
            input.addEventListener(eventName, preventDefault, false);

        });
    });

    function preventDefault(e) { 
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) { 
        item.closest('.file_upload').style.border = '2px solid #c51abb';
        // item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .4)';
    }

    function unHighlight(item) { 
        item.closest('.file_upload').style.border = 'none';
        

        if(item.closest('.calc_form')) { 
            item.closest('.file_upload').style.backgroundColor = '#fff';
        }else if(item.closest('.main_file') ) { 
            item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
        }else { 
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    
    ['dragenter', 'dragover'].forEach(eventName => { 
        fileInputs.forEach(input => { 
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => { 
        fileInputs.forEach(input => { 
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });

    fileInputs.forEach(input => { 
        input.addEventListener('drop', (e) => {
            // Дропнутый файл помещаем в инпут
            input.files = e.dataTransfer.files;
            console.log(input.files);

            const formData = new FormData();

            if(input.closest('.main_file')) { 
                // console.log('done');
               
                formData.append('file', input.files[0]);
                postData('assets/server.php', formData)
                    .then(res => console.log(res))
                    .catch(()=> console.log('ошибка'));

                document.querySelector('.main_file_btn').textContent = 'Файл отправлен';
            }

            // for( let key in input.files) { 
            //     formData.append(key, input.files[key]);
            // }
            // console.log(formData);
            // postData('assets/server.php', formData)
            //     .then(res => console.log(res))
            //     .catch(()=> console.log('ошибка'));

            let dots;
            //   'awdasfag.jpg' =>  ['awdasfag', 'jpg']
            let arr = input.files[0].name.split('.');

            arr.lenght > 5 ? '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            // установка названия файла
            input.previousElementSibling.textContent = name;
        });
    });

};
export default drop;