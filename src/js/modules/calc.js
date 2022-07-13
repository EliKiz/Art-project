const calc = (size, material, options, promocode, result, state ) => { 
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result),
        calc = document.querySelectorAll('.calc select');


    let sum = 0;


    const calcFunction = () => { 

        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value) );
        console.log(sizeBlock.value,   optionsBlock.value, materialBlock.value,  promocodeBlock.value);
        if(sizeBlock.value == '' || materialBlock.value == '') { 
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
            
        }else if(promocodeBlock.value === 'IWANTPORANT') { 
            resultBlock.textContent = Math.round(sum * 0.7);
            
        } else if (sizeBlock.value  && optionsBlock.value && materialBlock.value ) { 
            state.result = sum;
            resultBlock.textContent = sum;
            console.log('done');
        }

        // if(promocodeBlock.value) { 
        //     state.promo = promocodeBlock.value;
        // }

        // if( sizeBlock.value === '2000') { 
        //     state.size = '70*100';
        // }
        
        console.log(sizeBlock.options);
        switch(sizeBlock.value) { 
            case '500': 
            state.size = sizeBlock.options[1].textContent;
            break;
            case '1000': 
            state.size = sizeBlock.options[2].textContent;
            break;
            case '1500': 
            state.size = sizeBlock.options[3].textContent;
            break;
            case '2000': 
            state.size = sizeBlock.options[4].textContent;
            break;
        }
        
        
        calc.forEach(item => { 
            // updateObject(item, 'size', 'size', sizeBlock);
            updateObject(item, 'options', 'options', materialBlock);
            updateObject(item, 'material', 'material', optionsBlock);
        });
        
        console.log(state);
    };

    function updateObject(select, value, key, block) { 
        if(select.getAttribute('id') == value) { 
            state[key] = block.value;
        }
    }

    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);

};
export default calc;




// function bindActionToElems(event, elem, prop) { 
//     elem.forEach((item, i) => { 
//         item.addEventListener(event, () => {
//             switch(item.nodeName) { 
//                 case "INPUT": 
//                     if(item.getAttribute('type') === 'checkbox') {
//                         i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
//                         elem.forEach((box, j) =>  {    // выбор 1 check box
//                             box.checked = false; // Снять галку со всех check box
//                             if(i == j) {     // check box === выбору пользователя
//                                 box.checked = true;   // 
//                             }
//                         });
//                     } else { 
//                         state[prop] = item.value;
//                     }
//                     break;
//                 case "SELECT" : 
//                         state[prop] = item.value;
//                     break;
//             }
//             console.log(state);
//         });
//     });

// }