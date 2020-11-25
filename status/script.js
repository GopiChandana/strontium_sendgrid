

function handleForm(){
	event.preventDefault()
	var insider = document.getElementById('insider')
		var plusheader = document.createElement('div');
			plusheader.setAttribute('class','plusheader');
				var mailSend = document.createElement('div');
				mailSend.setAttribute('class','mailSend');
				mailSend.style.border = "1px solid #0000FF";
				mailSend.style.width = "700px";
				mailSend.style.height = "120px";
				mailSend.style.marginLeft = "32px";
					 
					 var p1p3div = document.createElement('div')

					 var apiV3 = document.createElement('div');
					 apiV3.style.display= 'flex';
					 apiV3.style.border= '1px solid green';
					 

					 var p1 = document.createElement('p');
					 var p3 = document.createElement('a');
					 
					 p1.textContent = "p1";
					 p1.style.color="red";

					 p3.textContent = "operation"
					 p3.style.color = "green";
					 p3.style.href = "operation";
					 p3.style.marginLeft="600px"
					 p3.style.textDecoration = "none"

					 
					 apiV3.append(p1,p3);
			     mailSend.append(apiV3)
	// plusheader.append(mailSend)
	insider.append(plusheader,mailSend);
}

window.addEventListener('load',function(){
	var btn = document.getElementById('plus');
	btn.addEventListener('click',handleForm)
})


