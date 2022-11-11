
const buttonBefore = document.getElementById("before")
const buttonAfter = document.getElementById("after")
const image = document.getElementById("photo")
let activeIndex = 0
const array = [
    "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80"
    ,"https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ,"https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
    ,"https://images.unsplash.com/photo-1523032217284-d9e49d6c5f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
    ,"https://images.unsplash.com/photo-1582883693742-5d25fbef2c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
]

image.src = array[0];
console.log(image)
buttonBefore.addEventListener("click", changeToPrevious)
buttonAfter.addEventListener("click", changeToNext)

function changeToPrevious() {
    if (activeIndex === 0) activeIndex = array.length - 1
    else activeIndex--
    image.src = array[activeIndex]
}

function changeToNext() {
    if (activeIndex < array.length - 1) activeIndex++
    else activeIndex = 0
    image.src = array[activeIndex]
}