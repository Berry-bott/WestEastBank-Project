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



// document.addEventListener("DOMContentLoaded", () => {
//     const flipper = document.getElementById('flipper');
//     const heroImg = document.getElementById('hero_img');

//     // Create the back image dynamically
//     const backImage = document.createElement('img');
//     backImage.src = 'assets/images/RF_HK-guide_SQ_20250318a.jpg';
//     backImage.alt = 'Back Image';
//     backImage.classList.add('back');

//     // Append the back image to the flipper
//     flipper.appendChild(backImage);

//     // Flip logic: toggle between two images
//     let flipped = false;
//     setInterval(() => {
//       // Flip the container
//       flipped = !flipped;
//       flipper.classList.toggle('flip', flipped);
//     }, 3000); // flip every 1 second
//   });