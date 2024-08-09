$(document).ready(function () {
    const $languageSelector = $('.language-selector')
    const $selectedOption = $('.selected-option')
    const $optionsList = $('.options-list')

    $selectedOption.on('click', function (event) {
        $languageSelector.toggleClass('active')
        event.stopPropagation()
    })

    $(document).on('click', function () {
        $languageSelector.removeClass('active')
    })

    $optionsList.on('click', 'li.option', function (event) {
        $selectedOption.text($(this).text())
        $languageSelector.removeClass('active')
    })

    const $blog = $('.blog-gallery')

    $blog.slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        adaptiveHeight: true,
    })

    $('.btn-arrow-left').on('click', function () {
        $blog.slick('slickPrev')
    })

    $('.btn-arrow-right').on('click', function () {
        $blog.slick('slickNext')
    })
})
