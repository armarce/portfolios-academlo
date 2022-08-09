
const list = document.querySelector('header nav ul');
const links = document.querySelectorAll('header nav ul li a');

links.forEach(a => {
    a.addEventListener('click', e => {
        list.style.left = '-100%';
        document.getElementById("checkbox").checked = false;
    });
});

document.getElementById("checkbox").addEventListener("change", e => {
    
    e.target.checked ? list.style.left = '0': list.style.left = '-100%';

});