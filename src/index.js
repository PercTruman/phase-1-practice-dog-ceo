console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', ()=>{
    getDogPictures()
    printBreedList()
})


let letterSelector = document.querySelector('#breed-dropdown')

function getDogPictures(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then (res =>res.json())
    .then (dogImages => dogImages.message.forEach(imageURL=>renderDogImage(imageURL)))
    }

function renderDogImage(imageURL){
    let imgElement = document.createElement('li')
    imgElement.innerHTML = 
    `<img src="${imageURL}">`
    document.querySelector('#dog-image-container').appendChild(imgElement)
}

function printBreedList(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(dogList => {
        breedArray = Object.keys(dogList.message)
        breedArray.forEach(breed =>renderBreed(breed))
                })

        function renderBreed(breed){
        let imgElement = document.createElement('li')
        imgElement.innerHTML = 
        `${breed}`
        document.getElementById('dog-breeds').appendChild(imgElement)
        imgElement.addEventListener('click',()=>imgElement.style.color = 'aquamarine')
    }
}



// filterByFirstLetter()

// function filterByFirstLetter(){
//     // let letterSelector = document.querySelector('#breed-dropdown').addEventListener('change', (e)=>{
//         if (e.target.value !== (breed[0])){
//            document.querySelector('#dog-breeds').removeChild(imgElement)
//            }})}
    // let chosenLetter = letterSelector.target.value
    // console.log(letterSelector)
    // letterSelector

   