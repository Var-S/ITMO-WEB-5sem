let current = document.location.href
let f = document.querySelectorAll('header a');
    f.forEach(link => {
        if (link.href.includes(current)) {
            link.classList.add('active')
        }
    })