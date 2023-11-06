const burgerBtn = document.querySelector('.burger-icon')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const nav1 = document.querySelector('.nav-items2 ul')
const nav2 = document.querySelectorAll('.link')

const handleNav = () => {
	nav1.classList.toggle('active')
	burgerBtn.classList.toggle('active')
	barsIco.classList.toggle('hide')
	xIco.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav)
