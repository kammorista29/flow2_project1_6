var buttonElement = document.querySelector('.button')
var popupContainerElement = document.querySelector('.popup-container')
var closeButtonElement = document.querySelector('.close')

buttonElement.addEventListener(
    'click', 
    function () {
        popupContainerElement.classList.remove('popup-container-hidden')
}
)

closeButtonElement.addEventListener('click', function() {
    popupContainerElement.classList.add('popup-container-hidden')
})

popupContainerElement.addEventListener('click', function() {
    popupContainerElement.classList.add('popup-container-hidden')
})