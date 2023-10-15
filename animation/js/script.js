window.addEventListener('DOMContentLoaded' , () => {
    //tabs

    const tabsContent = document.querySelectorAll('.tab_content'),
        tabs = document.querySelectorAll('.tab_item'),
        tabsParent = document.querySelector('.tab_items');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item =>{
            item.classList.remove('tab_item__active');
        });
    }

    function showTabContent(i){
        tabsContent[i].classList.add('show' , 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tab_item__active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click' , (event) => {
        const target = event.target;
        if(target && target.classList.contains('tab_item')){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //modal

    
    const modalTrigger = document.querySelector('.sign'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal_close');
       
    modalTrigger.addEventListener('click' , (e)  => {
        e.preventDefault();
        modal.classList.add('modal_active', 'transform');
    });

    modalClose.addEventListener('click' , () => {
        modal.classList.remove('modal_active' , 'transform');
    });


    //dropdown menu
    const dropdown = document.querySelector('#dropdown'),
        menu = document.querySelector('#menu');

    dropdown.addEventListener('click', () => {
        if(menu.classList.contains('active')){
            menu.classList.remove('active');
        } else {
            menu.classList.add('active');
        } 
    });    
});