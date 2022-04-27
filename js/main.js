
let elForm = document.querySelector(".form");
let elSelect = document.querySelector("#id-select");
let elBitter = document.querySelector(".bitter");
let elDecoration = document.querySelector(".decoration");
let elList = document.querySelector(".ingredient__list");
let elListInner = document.querySelector(".inner__list");
let elCondition = document.querySelector(".condition")
let elSiziSpan = document.querySelector(".size__span")
let kattaligi = document.querySelector(".kattaligi")







let dimensions = ["25", "30", "35"]
let thickness = ["Qalin", "O'rta", "Yupqa"];
let onTop = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"]
let suffixes = ["Achchiq", "Sosiskali"]

// How to make bread
for (let thicknes of thickness) {
  let nawLi = document.createElement("option");
  nawLi.textContent = thicknes;
  elSelect.appendChild(nawLi);
} 

elSelect.addEventListener('change', (e)=>{
  elSiziSpan.textContent = e.target.value
})



//  Thickness size
for (let dimension of dimensions) {
  let newLi = document.createElement("li")
  let newP = document.createElement("label");

  newP.textContent = dimension + " cm";
  newLi.setAttribute("class", "item")
  newP.setAttribute("class", "item__text")
  newLi.appendChild(newP);
  elList.appendChild(newLi);
}

 let smLi = document.querySelectorAll('.item__text')

 smLi.forEach((it)=>{
   it.addEventListener('click', (e)=>{
     kattaligi.textContent = e.target.textContent
   })
 })




// Things to put on
for (let injections of onTop) {
  let newLi = document.createElement('li');
  let newSpan = document.createElement('span')
  let newInput = document.createElement('input')
  newInput.setAttribute('type', 'checkbox')
  newInput.setAttribute('data-value', injections)
  newInput.setAttribute('class', 'decoration_check')
  newSpan.textContent = injections;
  newLi.appendChild(newInput)
  newLi.appendChild(newSpan)
  elDecoration.appendChild(newLi)

}

let prodCheckbox = document.querySelectorAll('.decoration_check')
let elOrder = document.querySelector('.order__list')

prodCheckbox.forEach(item => {

  item.addEventListener("click", function () {
    let newLi = document.createElement('li')
    newLi.textContent = item.dataset.value
    elOrder.appendChild(newLi)
  })
})


// Additions are things
for (let command of suffixes) {
  let newLi = document.createElement('li');
  let newSpan = document.createElement('span')
  let newInput = document.createElement('input')
  newInput.setAttribute('type', 'checkbox')
  newInput.setAttribute('data-value', command)
  newInput.setAttribute('id', command)
  newInput.setAttribute('class', 'decoration_check')
  newSpan.textContent = command;
  newLi.appendChild(newInput)
  newLi.appendChild(newSpan)
  elListInner.appendChild(newLi)
}

let elInnerCheckbox = document.querySelectorAll('.inner__list')
let elToOrder = document.querySelector('.to__order')

elInnerCheckbox.forEach(item => {
  item.addEventListener("click", function (e) {
    
    let newLi = document.createElement('li')
    let valuee = e.target.id
    newLi.textContent = valuee;
    elToOrder.appendChild(newLi)
  })
})










