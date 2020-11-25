

function handleForm(){
	event.preventDefault()
	var insider = document.getElementById('insider')
	var plusheader = document.createElement('div');
	plusheader.setAttribute('class','plusheader');
	var mailSend = document.createElement('div');
	mailSend.setAttribute('class','mailSend');
	mailSend.style.border = "1px solid #0000FF";
	mailSend.style.width = "120px";
	mailSend.style.height = "120px";
	// plusheader.append(mailSend)
	insider.append(plusheader,mailSend);
}

window.addEventListener('load',function(){
	var btn = document.getElementById('plus');
	btn.addEventListener('click',handleForm)
})