
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const elements = document.querySelectorAll('.hidden')
const elementsY = document.querySelectorAll('.hiddenY')

elements.forEach((element) => myObserver.observe(element));
elementsY.forEach((element) => myObserver.observe(element));
