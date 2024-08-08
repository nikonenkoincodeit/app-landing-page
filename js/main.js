document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.querySelector('.language-selector')
    const selectedOption = document.querySelector('.selected-option')
    const optionsList = document.querySelector('.options-list')

    selectedOption.addEventListener('click', function (event) {
        languageSelector.classList.toggle('active')
        event.stopPropagation()
    })

    document.addEventListener('click', function () {
        languageSelector.classList.remove('active')
    })

    optionsList.addEventListener('click', function (event) {
        if (event.target && event.target.matches('li.option')) {
            selectedOption.textContent = event.target.textContent
            languageSelector.classList.remove('active')
        }
    })
})
