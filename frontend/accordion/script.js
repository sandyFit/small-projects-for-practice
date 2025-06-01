function openAccordionContent() {
    const items = document.querySelectorAll('.accordion__item');

    items.forEach(item => {
        const accordionBtn = item.querySelector('#accordionBtn');
        const content = item.querySelector('.accordion__content');

        accordionBtn.addEventListener('click', () => {
            for (let i = 0; i < items.length; i++) {
                if (items[i] !== item) {
                    items[i].classList.remove('active');
                } else {
                    item.classList.toggle('active');
                };
            };
        });
    });


}
openAccordionContent();
