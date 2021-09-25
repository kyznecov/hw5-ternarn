// 1. Хочешь пива?
let isUserWantBeer = confirm("Хотите пива?");

const userChoseBeer = isUserWantBeer ? 'сообщение №1' : 'сообщение №2';



// 2. Возраст?
let userInputAge = prompt("Age???");

let userAgeMassege = userInputAge < 18 ? 'сообщение о запрете' :
    (userInputAge < 30 ? 'Привет' : 'Добрый день');



// 3. Чай или кофе?

let isTea = confirm("Нажми чтобы выбрать: ЧАЙ(ok) или COFFE(cancel)");
let withSugar = confirm("С сахаром?");

let massegeDrink = (isTea && withSugar) ?
    "Чай с сахаром" :
    isTea ?
        "Чай без сахара" :
        withSugar ? 
            "Кофе с сахаром" : 
            "Кофе без сахара";




