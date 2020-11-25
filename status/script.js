

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
				mailSend.style.marginLeft = "32px";
					 
					 var p1p3div = document.createElement('div')

					 var apiV3 = document.createElement('div');
					 var p1 = document.createElement('p');
					 var p3 = document.createElement('a');
					 p3.textContent = "operation"
					 p1.textContent = "p1";
					 p1.style.color="red";

					 p3.style.color = "green";
					 p3.href = "operation";
					 p3.style.textDecoration = "none"
					 
					 p

					 // var p2 = document.createElement('p');
					 // p2.textContent = "p2";

					 // var p3 = document.createElement('p');
					 // p3.textContent = "p3";
					 apiV3.append(p1,p3);

					 // apiV3.append(p1,p2,p3);
			     mailSend.append(apiV3)
	// plusheader.append(mailSend)
	insider.append(plusheader,mailSend);
}

window.addEventListener('load',function(){
	var btn = document.getElementById('plus');
	btn.addEventListener('click',handleForm)
})


