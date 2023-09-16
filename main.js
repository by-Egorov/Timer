const minuteTens = document.getElementById('min-tens')
const minute = document.getElementById('min')
const secondTens = document.getElementById('sec-tens')
const second = document.getElementById('sec')
const timerInput = document.getElementById('timer-input')
const timerBtn = document.getElementById('timer-btn')

let interval

// Звуковой сигнал
const audioAlert = new Audio('https://zvukitop.com/wp-content/uploads/2021/04/kogda-vremya-vyshlo-frfrc.mp3')
audioAlert.onplaying = function () {
  clearInterval(interval)
}

// Обработка введенных значений
function timer (seconds) {
  // Очистка таймера
  clearInterval(interval)
  // Получение текущего времени
  const currentTime = Date.now()
  // Перевод введенного числа в секунды
  const endTime = currentTime + seconds * 1000

  interval = setInterval(() => {
    const secondLeft = Math.round((endTime - Date.now()) / 1000)

    if (secondLeft < 0) {
      // Когда таймер закончится звуковое оповещение
      audioAlert.play()
      return
    }
    displayTimer(secondLeft)
  }, 1000)
}

// Вывод цифер таймера на экран
function displayTimer (seconds) {

  const min = Math.floor(seconds / 60)
  const sec = seconds % 60

  // Получаем целые минуты/секунды
  minuteTens.innerHTML = Math.floor(min / 10)
  secondTens.innerHTML = Math.floor(sec / 10)

  // Получаем десятые минуты/секунды
  minute.innerHTML = Math.floor(min % 10)
  second.innerHTML = Math.floor(sec % 10)

  console.log({ min, sec })
}

// Запуск таймера
timerBtn.addEventListener('click', () => {

  const timerMinutes = parseInt(timerInput.value)
  timer(timerMinutes * 60)
  console.log(timerMinutes)
})