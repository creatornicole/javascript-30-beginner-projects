const toastBox = document.getElementById('toastBox');

function showToast(btn) {
    let btnType = btn.innerHTML;
    let msg = '';
    
    // generate msg based on clicked btn
    switch (btnType) {
        case 'Success':
            msg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
            break;
        case 'Error':
            msg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
            break;
        case 'Invalid':
            msg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';
            break;
        default:
            console.log('Unknown button was clicked');
    }

    // generate toast
    let toast = document.createElement('div');
    toast.classList.add('toast');

    // decide about class of toast based on msg
    if (msg.toLowerCase().includes('success')) {
        toast.classList.add('success');
    } else if (msg.toLowerCase().includes('error')) {
        toast.classList.add('error');
    } else if (msg.toLowerCase().includes('invalid')) {
        toast.classList.add('invalid');
    }

    // add generated toast to toastBox
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    // remove notification after specified seconds
    setTimeout(() => {
        toast.remove();
    }, 6000); // 6000ms = 6s

}