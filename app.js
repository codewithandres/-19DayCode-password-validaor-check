
const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const requerimenList = document.querySelectorAll('.requeriment-list li');

const reqeriment = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
]

passwordInput.addEventListener('keyup', e => {

    reqeriment.map(elemet => {

        const isValid = elemet.regex.test(e.target.value);
        const reqerimenElement = requerimenList[elemet.index];

        if (isValid) {

            reqerimenElement.firstElementChild.className = 'ri-checkbox-circle-line';
            reqerimenElement.classList.add('isValid');
        } else {

            reqerimenElement.firstElementChild.className = 'ri-donut-chart-line';
            reqerimenElement.classList.remove('isValid');
        };
    });
});

eyeIcon.addEventListener('click', () => {
    // toggle the password input type beteew  'password' and 'text'

    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

    eyeIcon.className = ` ri-eye${passwordInput.type === 'password' ? '-line' : '-off-line'} `

    eyeIcon.classList.toggle('active')

});