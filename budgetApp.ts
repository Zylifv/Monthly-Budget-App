/*
A simple budget app that allows the user to input what spenidng they budget for in each category and see real-time result based on those habits.
I will eventually put in a way for the user to add extra categories should they wish but for now this was just a way to test my skills so far on my coding journey.
I would like to add a random colour array so that each time a new budget section is added and edited, the colour will change. I already use this in my Yahtzee game so the logic has already been figured out.
*/

const decreaseLimitBtn = document.getElementById("decrease-limit");
const increaseLimitBtn = document.getElementById("increase-limit");
const limitVal = document.getElementById("limit-value");


increaseLimitBtn.addEventListener("click", () => { //allows user to increase monthly limit
  event.preventDefault();
  limitVal.style.fontSize = "1.3em";
  limitVal.innerText = Number(limitVal.innerText) + 10;
}); 

decreaseLimitBtn.addEventListener("click", () => { //allows user to decrease monthly limit
  event.preventDefault();
  limitVal.style.fontSize = "1.3em";
  limitVal.innerText = Number(limitVal.innerText) - 10;
}); 



document.getElementById("over-under").textContent = "Your budget position will be displayed here";


function addOutgoing() {
  
  document.getElementById("add-extra-btn").style.display = "none";
  let li = document.createElement("li");
  let input = document.createElement("input");
  let sym = document.createElement("i");
      sym.classList.add('far', 'fa-edit');
      li.setAttribute("id", "extra");
      input.setAttribute("type", "number");
      input.classList.add("list-item");
      input.setAttribute("id", "extra");
      input.setAttribute("style", "background-color: #FFBDDA;");
      li.appendChild(sym);
      li.innerHTML += " Extra Budget Slot:";
      li.appendChild(input);
      document.getElementById("outgoings").appendChild(li);
}


function totalBudget() {
  const budgetArr = [...document.getElementsByClassName("list-item")].map((i) => Number(i.value));
  for (const item of budgetArr) {console.log(item)}
  
  let totalSum : number = budgetArr.reduce((acc, el) => acc + el, 0);
  let limitValNum : number = Number(limitVal.innerText);
  document.getElementById("total-sum").innerText = "£" + totalSum;
  
    let shopVal : number = ((budgetArr[0] / limitValNum) * 100);
    let fuelVal : number = ((budgetArr[1] / limitValNum) * 100);
    let elecGas : number = ((budgetArr[2] / limitValNum) * 100);
    let selfCare : number = ((budgetArr[3] / limitValNum) * 100);
    let hobbies : number = ((budgetArr[4] / limitValNum) * 100);
    let other : number = ((budgetArr[5] / limitValNum) * 100);
    let userAdded : number = ((budgetArr[6] / limitValNum) * 100);
    let remain : number = limitValNum - (shopVal + fuelVal + elecGas + selfCare + hobbies + other + userAdded);

    //checks if the user has added the extra slot or not
    let val = userAdded > 0 ? `
      <div id="limit-value" style="background: linear-gradient(to right, var(--green) 0%, var(--green) ${shopVal}%, var(--purple) ${shopVal}%, var(--purple) ${shopVal + fuelVal}%, var(--orange) ${shopVal + fuelVal}%, var(--orange) ${shopVal + fuelVal + elecGas}%, var(--blue) ${shopVal + fuelVal + elecGas}%, var(--blue) ${shopVal + fuelVal + elecGas + selfCare}%, var(--yellow) ${shopVal + fuelVal + elecGas + selfCare}%, var(--yellow) ${shopVal + fuelVal + elecGas + selfCare + hobbies}%, var(--red) ${shopVal + fuelVal + elecGas + selfCare + hobbies}%, var(--red) ${shopVal + fuelVal + elecGas + selfCare + hobbies + other}%, var(--pink) ${shopVal + fuelVal + elecGas + selfCare + hobbies + other}%, var(--pink) ${shopVal + fuelVal + elecGas + selfCare + hobbies + other + userAdded}%, #FFF ${shopVal + fuelVal + elecGas + selfCare + hobbies + other + userAdded}%)">${limitVal.innerText}</div>
    ` : `<div id="limit-value" style="background: linear-gradient(to right, var(--green) 0%, var(--green) ${shopVal}%, var(--purple) ${shopVal}%, var(--purple) ${shopVal + fuelVal}%, var(--orange) ${shopVal + fuelVal}%, var(--orange) ${shopVal + fuelVal + elecGas}%, var(--blue) ${shopVal + fuelVal + elecGas}%, var(--blue) ${shopVal + fuelVal + elecGas + selfCare}%, var(--yellow) ${shopVal + fuelVal + elecGas + selfCare}%, var(--yellow) ${shopVal + fuelVal + elecGas + selfCare + hobbies}%, var(--red) ${shopVal + fuelVal + elecGas + selfCare + hobbies}%, var(--red) ${shopVal + fuelVal + elecGas + selfCare + hobbies + other}%, var(--pink) ${shopVal + fuelVal + elecGas + selfCare + hobbies + other}%, var(--pink) ${shopVal + fuelVal + elecGas + selfCare + hobbies + other}%, #FFF ${shopVal + fuelVal + elecGas + selfCare + hobbies + other}%)">${limitVal.innerText}</div>
    `
    
    limitVal.style.fontSize = "1em";
  if (totalSum < limitVal.innerText) {
    document.getElementById("over-under").textContent = "You are currently under budget!";
    document.getElementById("over-under").style.backgroundColor = "#d5e8e4";
  } else if (totalSum == limitVal.innerText) {
    document.getElementById("over-under").textContent = "You are currently on-budget.";
    document.getElementById("over-under").style.backgroundColor = "#ffdfba";
  } else if (totalSum > limitVal.innerText) {
    document.getElementById("over-under").textContent = "You are currently over-budget!";
    document.getElementById("over-under").style.fontWeight = "bold";
    document.getElementById("over-under").style.backgroundColor = "	#ffb3ba";
    }
   document.getElementById("limit-value").innerHTML = val;
}
