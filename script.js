function showSection(id) {
    ['home', 'goal', 'calc', 'author'].forEach(s => {
        const section = document.getElementById(s);
        if (section) section.style.display = (s === id) ? 'block' : 'none';
        const link = document.getElementById('link-' + s);
        if (link) link.classList.toggle('active', s === id);
    });
}

function toggleTheme() {
    const b = document.body;
    if (b.classList.contains('bg-image-1')) {
        b.classList.replace('bg-image-1', 'bg-image-2');
    } else {
        b.classList.replace('bg-image-2', 'bg-image-1');
    }
}

window.onload = function() {
    let a = '', b = '', op = null;
    const out = document.getElementById("result");
    const update = (v) => out.innerHTML = v || '0';

    document.querySelectorAll('[id^="btn_digit_"]').forEach(btn => {
        btn.onclick = () => {
            let val = (btn.id === "btn_digit_000") ? "000" : btn.innerHTML;
            if (!op) { a += val; update(a); } else { b += val; update(b); }
        };
    });

    const ops = {'btn_op_plus':'+', 'btn_op_minus':'-', 'btn_op_mult':'x', 'btn_op_div':'/'};
    Object.keys(ops).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.onclick = () => { if(a) op = ops[id]; };
    });

    document.getElementById("btn_op_color").onclick = () => out.classList.toggle('colored');
    document.getElementById("btn_op_clear").onclick = () => { a = ''; b = ''; op = null; update('0'); };
    
    document.getElementById("btn_op_sqr").onclick = () => {
        if(op && b) { b = (parseFloat(b)**2).toString(); update(b); }
        else if(a) { a = (parseFloat(a)**2).toString(); update(a); }
    };

    document.getElementById("btn_op_equal").onclick = () => {
        if (!a || !b || !op) return;
        let res = 0, nA = parseFloat(a), nB = parseFloat(b);
        if (op === '+') res = nA + nB;
        if (op === '-') res = nA - nB;
        if (op === 'x') res = nA * nB;
        if (op === '/') res = nB === 0 ? 'Error' : nA / nB;
        a = res.toString(); b = ''; op = null; update(a);
    };
};