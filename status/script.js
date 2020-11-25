

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
					 
					 
				var apiV5 = document.createElement('div');
					 apiV5.style.display= 'flex';
					 apiV5.style.border= '1px solid green';
					 var p1 = document.createElement('p');
					 var p3 = document.createElement('a');
					 p1.textContent = "apiV3";
					 p1.style.color="red";
					 p1.style.fontWeight = "bold"
					 p3.textContent = "operation"
					 p3.style.color = "green";
					 p3.style.href = "operation";
					 p3.style.marginLeft="600px"
					 p3.style.textDecoration = "none"
					 apiV5.append(p1,p3);

				var apiV6 = document.createElement('div');
					 apiV6.style.display= 'flex';
					 apiV6.style.border= '1px solid green';
					 
					 var p4 = document.createElement('p');
					 var p5 = document.createElement('a');
					 p4.textContent = "apiV3";
					 p4.style.color="black";
					 p4.style.fontWeight = "bold"
					 p5.textContent = "operation"
					 p5.style.color = "green";
					 p5.style.href = "operation";
					 p5.style.marginLeft="600px"
					 p5.style.textDecoration = "none"
					 apiV6.append(p4,p5);

				var apiV7 = document.createElement('div');
					 apiV7.style.display= 'flex';
					 apiV7.style.border= '1px solid green';
					 var p7 = document.createElement('p');
					 var p8 = document.createElement('a');
					 p7.textContent = "apiV3";
					 p7.style.color="red";
					 p7.style.fontWeight = "bold"
					 p8.textContent = "operation"
					 p8.style.color = "green";
					 p8.style.href = "operation";
					 p8.style.marginLeft="600px"
					 p8.style.textDecoration = "none"
					 apiV7.append(p7,p8);

			     mailSend.append(apiV5,apiV6,apiV7)




	// plusheader.append(mailSend)
	insider.append(plusheader,mailSend);
}

window.addEventListener('load',function(){
	var btn = document.getElementById('plus');
	btn.addEventListener('click',handleForm)
})


