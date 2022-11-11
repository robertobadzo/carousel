const image = new Image
const secondImage = new Image
const thirdImage = new Image
const imageElement = document.getElementById("image")
const buttonBefore = document.getElementById("before")
const buttonAfter = document.getElementById("after")
const array = [image, secondImage, thirdImage]
let activeIndex = 0
image.src = "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80"
secondImage.src = "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
thirdImage.src = "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"


imageElement.append(image, secondImage, thirdImage)
array[activeIndex].style.display = "block";
buttonBefore.addEventListener("click", changeToPrevious)
buttonAfter.addEventListener("click",  changeToNext)

function changeToPrevious() {
    array[activeIndex].style.display = "none"
    if (activeIndex === 0) activeIndex = array.length - 1 
    else activeIndex--
    array[activeIndex].style.display = "block"
}

function changeToNext() {
    array[activeIndex].style.display = "none"
    if (activeIndex < array.length - 1) activeIndex++
    else activeIndex = 0
    array[activeIndex].style.display = "block"
}