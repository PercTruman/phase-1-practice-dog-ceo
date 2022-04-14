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
        breeds = Object.keys(dogList.message)
        updateBreed(breeds)
        filterByFirstLetter()
            })


        }

function updateBreed(breeds){
    let ul = document.querySelector('#dog-breeds')
    removeChildren(ul)
    breeds.forEach(breed =>renderBreed(breed))
}

function removeChildren(element){
    let child = element.lastElementChild
    while (child){
        element.removeChild(child)
        child = element.lastElementChild
    }

}

function filter(letter){
    updateBreed(breeds.filter(breed=>breed.startsWith(letter)))

}


function renderBreed(breed){
    let imgElement = document.createElement('li')
    imgElement.innerHTML = 
    `${breed}`
    document.getElementById('dog-breeds').appendChild(imgElement)
    imgElement.addEventListener('click',()=>imgElement.style.color = 'aquamarine')
}




function filterByFirstLetter(){
    // const letter = e.target.value
   document.querySelector('#breed-dropdown').addEventListener('change', (e)=>{
       filter(e.target.value)
        // if (e.target.value !== (breed[0])){
        //    document.querySelector('#dog-breeds').removeChild(imgElement)
        //    }})}
    // let chosenLetter = letterSelector.target.value
   })
}

   