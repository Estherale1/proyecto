const stars = document.querySelectorAll('.stars i');

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
 
        stars.forEach((s, i) => {
            s.classList.toggle('hovered', i <= index);
        });
    });

    star.addEventListener('mouseout', () => {

        stars.forEach((s) => {
            s.classList.remove('hovered');
        });
    });

    star.addEventListener('click', () => {

        stars.forEach((s, i) => {
            s.classList.toggle('selected', i <= index);
        });
    });
});
