let myHeaders = new Headers()
myHeaders.append("Content-Type", "application/json")
let requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
}

let urlLocation = new URL(window.location.href)
let searchParams = urlLocation.searchParams
let recordId = searchParams.get('id')

// Loader animation
const loader = document.querySelector('.loader')
let isLoading = true

const loading = () => {
    if(isLoading == true) {
        loader.classList.remove('d-none')
    } else {
        loader.classList.add('d-none')
    }
}

let singleData

// Selecting dynamic element
let myImage = document.querySelector('.image_template')
let myTitle = document.querySelector('.title_template')
let myDescription = document.querySelector('.description_template')
let myDate = document.querySelector('.date_template')
let myTag = document.querySelector('.tag_template')


const creationElements = () => {
    myImage.src = singleData.image
    myTitle.textContent = singleData.titre
    myDescription.textContent = singleData.description
    myDate.textContent = singleData.date
    myTag.textContent = singleData.tag
}

fetch(`https://v1.nocodeapi.com/ncfnicolas/google_sheets/LyttnfRysyNvHeEr?tabId=test4&row_id=${recordId}`, requestOptions)
    .then(response => response.text())
    .then(result => {
        let parsedData = JSON.parse(result)
        singleData = parsedData

        creationElements()

        isLoading = false
        loading()
    })
     .catch(error => console.log('error', error))
