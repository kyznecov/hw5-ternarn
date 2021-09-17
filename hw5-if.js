// 1. Хочешь пива?
const wantBeer = confirm("Хочешь пива?")

if (wantBeer === true) {
    alert("messege1")
}else {
    alert("messege2")
}


// 2. Пользователь вводит возраст ==> Больше 30?
const userInputAge = prompt("Пользователь вводит возраст")

if (userInputAge < 18) {
    alert('Сообщение о запрете!!!')
}else if (userInputAge >= 18) {
    confirm('Больше 30?') ? alert('Милорд, искренне приветствую Вас!') : alert('Здарова бро!')
}


// 3."Чай или кофе"
const selectTeaCoffe = confirm('Чай или кофе?')

if (selectTeaCoffe === true) {
    confirm('Чай с сахаром') ? alert('Есть чай с сахаром') : alert('Есть чай БЕЗ сахара')
}else if (selectTeaCoffe !== true) {
    confirm('Кофе с сахаром?') ? alert('Есть кофе с сахаром') : alert('Есть кофе БЕЗ сахара')
}