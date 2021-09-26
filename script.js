// let btn = document.querySelector('button')
// let toggle = querySelector('.shareDesktop')

// btn.addEventListener('click', () =>{
//     if(toggle.style.display === 'none'){
//         toggle.style.display = 'flex';
//     } else {
//         toggle.style.display = 'none';
//     }
// })

// document.getElementById("button").addEventListener('click', function(){
//     document.querySelector(".shareDesktop").style.display = 'flex';
// });

var flag = 1;
function xyz() {
    if (flag==1)
    {
        document.getElementById("abc").style.display="flex";
        flag=0;
    }
    else {
        document.getElementById("abc").style.display="none";   
        flag=1;     
    }
}