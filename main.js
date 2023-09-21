const timerInput = document.getElementById('timer-input')
const timerBtn = document.getElementById('timer-btn')

let interval

// Звуковой сигнал
const audioAlert = new Audio(
	'https://zvukitop.com/wp-content/uploads/2021/04/kogda-vremya-vyshlo-frfrc.mp3'
)
audioAlert.onplaying = function () {
	clearInterval(interval)
}

// Обработка введенных значений
function timer(seconds) {
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
			timerInput.value = ''
			return
		}
		displayTimer(secondLeft)
	}, 1000)
}

// Вывод чисел таймера на экран
function displayTimer(seconds) {
	const min = Math.floor(seconds / 60)
	const sec = seconds % 60

	let minuteTens = Math.floor(min / 10)
	let minute = Math.floor(min % 10)
	let secondTens = Math.floor(sec / 10)
	let second = Math.floor(sec % 10)

	document.getElementById('min-tens').innerHTML = minuteTens
	document.getElementById('min').innerHTML = minute
	document.getElementById('sec-tens').innerHTML = secondTens
	document.getElementById('sec').innerHTML = second

	document.title = `${minuteTens}${minute}:${secondTens}${second}`
}

// Запуск таймера
timerBtn.addEventListener('click', () => {
	const timerMinutes = parseInt(timerInput.value)
	timer(timerMinutes * 60)
})
