// 1. Хочешь пива?
let isUserWantBeer = confirm("beer?");

const userWantBeer = isUserWantBeer ? alert("Пивка для рывка!") : alert("Очень жаль:(");
alert



// 2. Возраст?
let userInputAge = prompt("Age???");

let greetingsUser = userInputAge < 18 ? alert("Error") :
    (userInputAge < 30 ? alert("Привет") : alert("Доброго времени суток!"));



// 3. Чай или кофе?

let teaOrCoffe = confirm("Нажми чтобы выбрать: ЧАЙ(ok) или COFFE(cancel)");

let userDrink = teaOrCoffe === true ? 'Чай' : 'coffe';

let userDrinkSugar = confirm('Сахар?') ? `${userDrink}  с сахаром ` : `${userDrink} без сахара`; 

alert(userDrinkSugar);




