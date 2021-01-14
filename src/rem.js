function rem(){
        document.documentElement.style.fontSize=document.documentElement.clientWidth / 7.5 + 'px';
    }
    rem();
    window.onresize = rem;