export const captureInputData = () => {

    const form = document.querySelector('form');

    console.log(form[2]);

    form[2].addEventListener('click', (e) => {
        e.preventDefault();

        console.log(form[0].value);
        console.log(form[1].value);



    });



};