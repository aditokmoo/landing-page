const openNav = document.querySelector('.bars');
const closeNav = document.querySelector('#close-nav');
const mobileNav = document.querySelector('.mobile-nav');
const items = document.querySelectorAll('.item a');
const itemText = document.querySelectorAll('.item-text');

// Open Navigation
openNav.addEventListener('click', () => {
    mobileNav.classList.add('active');
})

// Close Navigation
closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});

// Accordion
items.forEach((item, x) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        itemText.forEach((content, j) => {
            if(x == j) {
                content.classList.toggle('active')

                if(content.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';

                } else {
                    content.style.maxHeight = 0;
                }
            } else {
                content.style.maxHeight = 0;
                content.classList.remove('active')
            }
        }) 

    });
})
