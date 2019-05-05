const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','#F0F8FF','#00FFFF','#7FFFD4','BurlyWood','Coral','DarkGoldenRod','#9932CC','#1E90FF'];

colorBtn.addEventListener('click',changeColor);

function changeColor () {
	//bodyBcg.style.backgroundColor = colors[2];
	let random = Math.floor(Math.random()*colors.length)
	bodyBcg.style.backgroundColor = colors[random];
}