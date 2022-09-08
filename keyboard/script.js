function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', event => {
        if (event.repeat) return;
        if (codes.includes(event.code)) {
            pressed.add(event.code);
        }
        if (pressed.size === codes.length) {
            func();
            pressed.delete(event.code);
        } 
    });

    document.addEventListener('keyup', event => {
        pressed.delete(event.code);
    });
}

runOnKeys(
    () => alert('hi'),
    'KeyR',
    'KeyP'
);