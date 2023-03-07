//     //переменная для хранения мат.действия
// var op;
// function func() {
//     //переменная для рез-та
//     var result;
//     //получаем первое и второе число
//     var num1 = Number(document.getElementById('num1').value);
//     var num2 = Number(document.getElementById('num2').value);
//     // смотрим, что в пер-й op
//     switch (op) {
//         case '+':
//             result = num1 + num2;
//             break
//         case '-':
//             result = num1 - num2;
//             break
//         case '*':
//             result = num1 * num2;
//             break
//         case '/':
//             result = num1 / num2;
//             break
//     }
//     document.getElementById('result').innerHTML = result;
// }

const output = document.querySelector('output');

// const div = document.createElement('div')
// div.classList.add('keyboard')
// document.querySelector('.calculator').appendChild(div)

// 'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='.split(' ')

// .map(symbol => {
//     div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
// })

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        calc(this.value)
    })
})
 
document.addEventListener('keydown', event => {
    if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key)
})


function calc(value) {
    if (value.match(/=|Enter/)) {
        try {
            // Math.trunc используется для округления до целого числа
         // output.textContent = Math.trunc(math.evaluate(output.textContent))
            // внизу строка без округления
            output.textContent = (math.evaluate(output.textContent))
            
        // если операцию выполнить невозможно
        } catch {
            // сохраняем значение поля
            let oldValue = output.textContent
            // создаем новую переменную
            let newValue = 'недопустимое выражение'
            // выводим значение новой переменной в поле
            output.textContent = newValue
            // через полторы секунды возвращаем полю старое значение
            setTimeout(() => {
                output.textContent = oldValue
            }, 1500)
        }  
         
    }
    else if (value === 'C') {
        // очищаем поле
        output.textContent = ''
    } 
    else if (value.match(/CE|Backspace/)) {
        // уменьшаем строку на один символ
        output.textContent = output.textContent.substring(0, output.textContent.length - 1)        
    // если нажата любая другая (отфильтрованная) кнопка или клавиша
    } 
    else {
        // записываем ее значение в поле
        output.textContent += value
    }
}






