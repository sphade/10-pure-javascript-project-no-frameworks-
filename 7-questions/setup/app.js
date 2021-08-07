//using selectors inside the element
// traversing the dom

// let btns = document.querySelectorAll('.question-btn')
// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//        e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
//     })
// })

let questions = document.querySelectorAll('.question')


questions.forEach((question) => {
    let btn = question.querySelector(".question-btn")
    btn.addEventListener('click', () => {

        questions.forEach((item) => {
           
            if (item != question) {
            item.classList.remove('show-text')
        }
        })
        question.classList.toggle('show-text')
    })
   
})