var numberRandom= document.getElementById('numberRandom');
var timeStop=2000;
var timeRandom=50;
function run() {
	document.getElementById('btn-run').style.display="none";
	var time=0;
		setInterval(function(){
		if (time<=timeStop/timeRandom) {
			checkRun=1;
			const count = randomIntFromInterval(1, 1500);
			if (count<1000) {
				numberRandom.innerHTML="0"+count;
				if (count<100) {
					numberRandom.innerHTML="00"+count;
					if (count<10) {
						numberRandom.innerHTML="000"+count;
					}
				}
			}else{
				numberRandom.innerHTML=count;
			}
			console.log(time);
		}
		time=time+1;
		if (time==timeStop/timeRandom) {
			console.log(time);
			document.getElementById('btn-run').style.display="block";
		}
	},timeRandom);
	
	
}
function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}
