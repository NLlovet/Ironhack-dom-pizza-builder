// Write your Pizza Builder JavaScript in this file.
let btn = document.getElementsByClassName('btn');

/* btn.onclick(function() {
  $(this.toggleClass('active'));
})
*/

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: true
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
  renderButtons()
  renderPrice()
  renderButtons()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mus) {
    if(state.mushrooms) {
      $mus.style.visibility = "visible";
    }
    else {
      $mus.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($gree) {
    if(state.greenPeppers) {
      $gree.style.visibility = "visible";
    }
    else {
      $gree.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sauce) {
    if(state.whiteSauce) {
      $sauce.style.visibility = 'visible';
    }
    else {
      $sauce.style.visibility = 'hidden';
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(function($crust) {
    if(state.glutenFreeCrust) {
      $crust.style.visibility = "visible";
    }
    else {
      $crust.style.visibility = "hidden";
    }
  })
  
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  btn.onclick = function() {
    btn.toggle('active');
    console.log('No longer active');
  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

/*   <aside class="panel price">
  <h2>Your pizza's price</h2>

  <b>$10 cheese pizza</b>
  <ul>
    <li>$1 pepperonni</li>
    <li>$1 mushrooms</li>
    <li>$1 green peppers</li>
    <li>$3 white sauce</li>
    <li>$5 gluten-free crust</li>
  </ul>
  <strong>$21</strong>
</aside> */
  let price = 10;
  //pepperoni
  if(!state.pepperonni) {
    console.log(`0 is working`)
    let element = document.getElementsByClassName('price')[0];
    element.querySelectorAll("li")[0].innerHTML = "$0";
    price -= 1;
  }
  else{
    console.log(`0 is working`)
    let element = document.getElementsByClassName('price')[0];
    element.querySelectorAll("li")[0].innerHTML = "$1 pepperonni";
    price += 1;
  }
  //mushrooms
  if(!state.mushrooms) {
    console.log(`1 is working`)
    let element = document.getElementsByClassName('price')[0];
    element.querySelectorAll("li")[1].innerHTML = "$0";
    price -= 1;
  }
  else {
    console.log(`1 is working`)
    let element = document.getElementsByClassName('price')[0];
    element.querySelectorAll("li")[1].innerHTML = "$1 mushrooms";
    price += 1;
  }
  //green peppers
  if(!state.greenPeppers) {
    console.log(`3 is working`)
    let element = document.getElementsByClassName('price')[0];
    element.querySelectorAll("li")[2].innerHTML = "$0";
    price -= 1;
  }
  else {
    console.log(`3 is working`)
    let element = document.getElementsByClassName('price')[0];
    element.querySelectorAll("li")[2].innerHTML = "$1 green peppers";
    price += 1;
  }
  //white sauce
  if(!state.whiteSauce) {
    console.log(`4 is working`)
    let element = document.getElementsByClassName('price')[0];
    element.querySelectorAll("li")[3].innerHTML = "$0";
    price -= 3;
  }
  else{
    let element = document.getElementsByClassName('price')[0];
    element.querySelectorAll("li")[3].innerHTML = "$3 white sauce";
    price += 3; 
  }

  //gluten free
  if(!state.glutenFreeCrust) {
    let element = document.getElementsByClassName('price')[0];
    element.querySelectorAll("li")[4].innerHTML = "$0";
    price -= 5; 
  }
  else{
    let element = document.getElementsByClassName('price')[0];
    element.querySelectorAll("li")[4].innerHTML = "$5 Gluten Free Crust";
    price += 5; 
  }

  let final = document.getElementById('total');
  final.innerHTML = `$<span>${price}</span>`;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  console.log('running pep')
  renderEverything()
  
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  console.log('running mush')
  renderEverything()
  
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  console.log('running green')
  renderEverything()
  
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  console.log('running sauce')
  renderEverything()
  
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  console.log('running crust')
  renderEverything()
  
}