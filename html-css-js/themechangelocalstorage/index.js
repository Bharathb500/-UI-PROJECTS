(function() {
    class Localstrg {
        constructor() {
            this.button = document.querySelector('button');
            this.theme = null;
            this.body = document.querySelector('body')
        }
        checkTheme() {
            this.theme = localStorage.getItem('theme')
            if(this.theme) {
                this.body.classList.add(this.theme)
            }
        }
        init() {
            this.checkTheme();
            this.button.addEventListener('click',()=>{
                this.theme = this.body.className === 'light' ? 'dark' : 'light';
                this.body.className = this.theme;
                localStorage.setItem('theme',this.theme)
                console.log(this.theme);
            })
        }
    }
    window.addEventListener('DOMContentLoaded',()=>{
        const local = new Localstrg();
        local.init();
    })
})();