function showSection(sectionId) {
    const ids = ['home', 'goal', 'calc', 'author'];
    ids.forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
        document.getElementById('link-' + id).classList.toggle('active', id === sectionId);
    });
}

function toggleTheme() {
    document.body.classList.toggle('image-bg');
    document.body.classList.toggle('dark-bg');
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('result');
    const buttons = document.querySelectorAll('.btn-ps');
    let current = '0';

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.innerText;
            if (val === 'C') current = '0';
            else if (val === '+/-') current = (parseFloat(current) * -1).toString();
            else if (val === '√') current = Math.sqrt(eval(current.replace(/x/g, '*'))).toString();
            else if (val === '=') {
                try { current = eval(current.replace(/x/g, '*')).toString(); } 
                catch { current = 'Error'; }
            } else {
                if (current === '0') current = val;
                else current += val;
            }
            display.innerText = current;
        });
    });
});