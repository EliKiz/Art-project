const disabledModal = (mainEventListener, btnSelector, elemSelectorWidth, elemSelectorHeight, event) => { 
    let button = document.querySelector(btnSelector),
        mainEvent = document.querySelectorAll(mainEventListener),
        widthElem = document.querySelector(elemSelectorWidth),
        heightElem = document.querySelector(elemSelectorHeight);

    // установка атрибута деактивации для кнопкки
 button.setAttribute("disabled", "true");

 mainEvent.forEach(item => {
    item.addEventListener(event, () => {
       if (heightElem.value != '' && widthElem.value != '') {
            button.removeAttribute("disabled", "true");
       }
    });
 });
};

export default disabledModal; 