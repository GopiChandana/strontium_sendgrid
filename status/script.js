
function handleForm(){
		event.preventDefault()
			var insider = document.getElementById('insider')
			var insider1 = document.getElementById('insider2')

		        var plusheader = document.createElement('div');
			    plusheader.setAttribute('class','plusheader');
			    
			    var plusheader1 = document.createElement('div');
			    plusheader1.setAttribute('class','plusheader');

				var mailSend = document.createElement('div');
				mailSend.style.border = "1px solid #0000FF";
				mailSend.style.width = "690px";
				mailSend.style.height = "auto";
				mailSend.style.marginLeft = "32px";

				// 	 // change //
				var mailSend1 = document.createElement('div');
				mailSend1.style.border = "1px solid #0000FF";
				mailSend1.style.width = "690px";
				mailSend1.style.height = "auto";
				mailSend1.style.marginLeft = "32px";


				var apiV5 = document.createElement('div');
					 apiV5.style.display= 'flex';
					 apiV5.style.border= '1px solid #294661';
					 var p1 = document.createElement('p');
					 var p2 = document.createElement('a');
					 p1.textContent = "apiV3";
					 p1.style.color="color";
					 // p1.style.fontWeight = "bold"
					 p2.textContent = "operation"
					 p2.style.color = "#294661";
					 p2.style.href = "operation";
					 p2.style.marginLeft="530px";
					 p2.style.textDecoration = "none";
					 var p3 = document.createElement("img");
					 p3.src="/home/milind/Desktop/question.png";
					 // p3.style.position ="relative";
					 // p3.top= "300px" 

					 apiV5.append(p1,p3,p2);

				var apiV6 = document.createElement('div');
					 apiV6.style.display= 'flex';
					 apiV6.style.border= '1px solid #294661';
					 
					 var p4 = document.createElement('p');
					 var p5 = document.createElement('a');
					 p4.textContent = "apiV3";
					 p4.style.color="black";
					 // p4.style.fontWeight = "bold"
					 p5.textContent = "operation"
					 p5.style.color = "#294661";
					 p5.style.href = "operation";
					 p5.style.marginLeft="530px";
					 p5.style.textDecoration = "none";
					 var p14 = document.createElement("img");
					 p14.src="/home/milind/Desktop/question.png";

					 apiV6.append(p4,p14,p5);

				var apiV7 = document.createElement('div');
					 apiV7.style.display= 'flex';
					 apiV7.style.border= '1px solid #294661';
					 var p6 = document.createElement('p');
					 var p7 = document.createElement('a');
					 p6.textContent = "apiV3";
					 p6.style.color="black";
					 // p6.style.fontWeight = "bold"
					 p7.textContent = "operation"
					 p7.style.color = "#294661";
					 p7.style.href = "operation";
				  	 p7.style.marginLeft="530px";
					 p7.style.textDecoration = "none"
					 	 
					 var p15 = document.createElement("img");
					 p15.src="/home/milind/Desktop/question.png";

					 apiV7.append(p6,p15,p7);



 	 // ===================================================

 	 // second operator
				var apiV8 = document.createElement('div');
					 apiV8.style.display= 'flex';
					 apiV8.style.border= '1px solid #294661';
					 var p8 = document.createElement('p');
					 var p9 = document.createElement('a');
					 p8.textContent = "apiV3";
					 p8.style.color="black";
					 // p8.style.fontWeight = "bold"
					 p9.textContent = "operation"
					 p9.style.color = "#294661";
					 p9.style.href = "operation";
					 p9.style.marginLeft="530px"
					 p9.style.textDecoration = "none"

					 apiV8.append(p8,p9);



				var apiV9 = document.createElement('div');
					 apiV9.style.display= 'flex';
					 apiV9.style.border= '1px solid #294661';
					 
					 var p10 = document.createElement('p');
					 var p11 = document.createElement('a');
					 p10.textContent = "apiV3";
					 p10.style.color="black";
					 // p10.style.fontWeight = "bold"
					 p11.textContent = "operation"
					 p11.style.color = "#294661";
					 p11.style.href = "operation";
					 p11.style.marginLeft="530px"
					 p11.style.textDecoration = "none"
					 apiV9.append(p10,p11);

				var apiV10 = document.createElement('div');
					 apiV10.style.display= 'flex';
					 apiV10.style.border= '1px solid #294661';
					 var p12 = document.createElement('p');
					 var p13 = document.createElement('a');
					 p12.textContent = "apiV3";
					 p12.style.color="black";
					 // p12.style.fontWeight = "bold"
					 p13.textContent = "operation"
					 p13.style.color = "#294661";
					 p13.style.href = "operation";
					 p13.style.marginLeft="530px"
					 p13.style.textDecoration = "none"
					 apiV10.append(p12,p13);


					mailSend.append(apiV5,apiV6,apiV7)
					mailSend1.append(apiV8,apiV9,apiV10) 
					

			// plusheader.append(mailSend1)

	     // mailSend.append(apiV5,apiV6,apiV7)
	     // mailSend.append(apiV8,apiV9,apiV10)
		// mailSend.append(apiV5,apiV6,apiV7,apiV8,apiV9,apiV10)
		
	 // plusheader.append(mailSend)
	insider.append(plusheader,mailSend);
	insider2.append(plusheader1,mailSend1);
}


window.addEventListener('load',function(){
	var btn = document.getElementById('plus');
	btn.addEventListener('click',handleForm)
	var btn1 = document.getElementById('plus2');
	btn1.addEventListener('click',handleForm)
})





