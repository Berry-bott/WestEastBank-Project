let bar = document.querySelector('.humbuger_menu');
let nav = document.querySelector('.nav_container');

bar.addEventListener('click', ()=>{

    let svg = bar.querySelector('svg');
    if (svg.classList.contains('fa-bars')){
        svg.classList.replace('fa-bars','fa-times')
    }else{
        svg.classList.replace('fa-times','fa-bars')
    
    }
    nav.classList.toggle('toggle')
})