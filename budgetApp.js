const decreaseLimitBtn = document.getElementById("decrease-limit");
const increaseLimitBtn = document.getElementById("increase-limit");
const limitVal = document.getElementById("limit-value");


increaseLimitBtn.addEventListener("click", () => {
  event.preventDefault();
  limitVal.style.fontSize = "1.3em";
  limitVal.innerText = Number(limitVal.innerText) + 10;
}); 

decreaseLimitBtn.addEventListener("click", () => {
  event.preventDefault();
  limitVal.style.fontSize = "1.3em";
  limitVal.innerText = Number(limitVal.innerText) - 10;
}); 



document.getElementById("over-under").textContent = "Your budget position will be displayed here";


function totalBudget() {
  const budgetArr = [...document.getElementsByClassName("list-item")].map((i) => Number(i.value));
  let totalSum = budgetArr.reduce((acc, el) => acc + el, 0);
  let limitValNum = Number(limitVal.innerText);
  document.getElementById("total-sum").innerText = "£" + totalSum;
  
    let shopVal = ((budgetArr[0] / limitValNum) * 100);
    let fuelVal = ((budgetArr[1] / limitValNum) * 100);
    let elecGas = ((budgetArr[2] / limitValNum) * 100);
    let selfCare = ((budgetArr[3] / limitValNum) * 100);
    let hobbies = ((budgetArr[4] / limitValNum) * 100);
    let other = ((budgetArr[5] / limitValNum) * 100);
    let remain = limitValNum - (shopVal + fuelVal + elecGas + selfCare + hobbies + other);

    let val = `
    
      <div id="limit-value" style="background: linear-gradient(to right, #d5e8e4 0%, #d5e8e4 ${shopVal}%, #DEDAF4 ${shopVal}%, #DEDAF4 ${shopVal + fuelVal}%, #FFD6A5 ${shopVal + fuelVal}%, #FFD6A5 ${shopVal + fuelVal + elecGas}%, #D9EDF8 ${shopVal + fuelVal + elecGas}%, #D9EDF8 ${shopVal + fuelVal + elecGas + selfCare}%, #FDFFB6 ${shopVal + fuelVal + elecGas + selfCare}%, #FDFFB6 ${shopVal + fuelVal + elecGas + selfCare + hobbies}%, #FFADAD ${shopVal + fuelVal + elecGas + selfCare + hobbies}%, #FFADAD ${shopVal + fuelVal + elecGas + selfCare + hobbies + other}%, #fff ${shopVal + fuelVal + elecGas + selfCare + hobbies + other}%)">${limitVal.innerText}</div>
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
