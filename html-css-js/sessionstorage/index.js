(function() {
    window.addEventListener('DOMContentLoaded',()=>{
        const inputEl = document.querySelector('input')
        const sessioninput = sessionStorage.getItem('input')
        if(sessioninput) {
            inputEl.value = sessioninput;
        }
        inputEl.addEventListener('input',function() {
            console.log(this.value)
            sessionStorage.setItem('input',this.value)
        })
    })
})();