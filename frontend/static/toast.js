const Toast = {
    init() {
        this.hideTimeout = null;

        this.el = document.createElement('div');
        this.el.className = 'toastNotification';
        this.el.id = 'toast';
        document.body.appendChild(this.el);
    },

    show(message, state) {
        clearTimeout(this.hideTimeout);

        const $toast = document.querySelector('#toast');

        $toast.textContent = message;
        $toast.className = 'toastNotification toastNotification--visible';

        if (state) {
            $toast.classList.add(`toastNotification--${state}`);
        }

        this.hideTimeout = setTimeout(() => {
            $toast.classList.remove('toastNotification--visible')
        }, 2000);
    }
};

document.addEventListener('DOMContentLoaded', () => Toast.init());

export default Toast;

