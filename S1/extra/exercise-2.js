const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
let fruitIndex =0;
for (let i=0; i<foodSchedule.length && fruitIndex<fruits.length; i++){
    const food = foodSchedule[i];
    if(!food.isVegan){
        const selectedFruit = fruits[fruitIndex++];
        foodSchedule.splice(i, 1, {name: selectedFruit, isVegan: true});
    }
}
console.log(foodSchedule);