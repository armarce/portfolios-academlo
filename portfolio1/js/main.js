
document.querySelectorAll('header nav ul li a').forEach(a => {
    a.addEventListener('click', event => {
        document.querySelector('header nav ul').style.left = '-100%';
        document.getElementById("checkbox").checked = false;
    });
});

document.getElementById("checkbox").addEventListener("change", (e) => {
    
    if(e.target.checked){
        
        document.querySelector('header nav ul').style.left = '0';
    }else{
        document.querySelector('header nav ul').style.left = '-100%';
    }
});

