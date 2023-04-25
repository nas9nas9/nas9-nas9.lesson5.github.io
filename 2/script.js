let number = +prompt('Введіть число');

function checkNumber(number){
    let message = 'Потрібно ввести додатнє натуральне число'
    if (number == 1) {
        message = 'Ви ввели номер одиниці'
    }
    if (number>1) {
        let check = 1;
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                check = 0;
            }   
            check *= check;
        }
        switch (check) {
            case 1:
                message = 'Ви ввели просте число';
                break;
            default:
                message = 'Ви ввели складене число';    
                break;
        }
    }
    return message;
}

let res = checkNumber(number)
console.log(res);



