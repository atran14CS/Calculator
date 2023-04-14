let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('.buttonsGrid button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'clear':
                display.innerText = '';
                break;
            case 'equals':
                try {
                    display.innerText = eval(display.innerText);
                } catch (error) {
                    display.innerText = 'Error';
                }
                break;
            case 'decimal':
                if (!display.innerText.includes('.')) {
                    display.innerText += e.target.innerText;
                }
                break;
            case 'negative':
                display.innerText = -parseFloat(display.innerText);
                break;
            case 'subtrack':
                display.innerText += '-';
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

