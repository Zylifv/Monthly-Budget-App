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
      <div id="limit-value" style="background: linear-gradient(to right, #77B254 0%, #77B254 ${shopVal}%, #d25aff ${shopVal}%, #d25aff ${shopVal + fuelVal}%, #ffa500 ${shopVal + fuelVal}%, #ffa500 ${shopVal + fuelVal + elecGas}%, #38acff ${shopVal + fuelVal + elecGas}%, #38acff ${shopVal + fuelVal + elecGas + selfCare}%, #fbe922 ${shopVal + fuelVal + elecGas + selfCare}%, #fbe922 ${shopVal + fuelVal + elecGas + selfCare + hobbies}%, #fb6a4b ${shopVal + fuelVal + elecGas + selfCare + hobbies}%, #fb6a4b ${shopVal + fuelVal + elecGas + selfCare + hobbies + other}%, #fff ${shopVal + fuelVal + elecGas + selfCare + hobbies + other}%)">${limitVal.innerText}</div>
    `
    limitVal.style.fontSize = "1em";
  if (totalSum < limitVal.innerText) {
    document.getElementById("over-under").textContent = "You are currently under budget!";
    document.getElementById("over-under").style.backgroundColor = "#77B254";
    } else if (totalSum == limitVal.innerText) {
      document.getElementById("over-under").textContent = "You are currently on-budget.";
      document.getElementById("over-under").style.backgroundColor = "#FFC145";
      } else if (totalSum > limitVal.innerText) {
        document.getElementById("over-under").textContent = "You are currently over-budget!";
        document.getElementById("over-under").style.fontWeight = "bold";
        document.getElementById("over-under").style.backgroundColor = "#D84040";
    }
      document.getElementById("limit-value").innerHTML = val;
}
