let btn1 = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnim()    {
    let pos =0;

    let id = setInterval(frame,10);
    function frame(){
        if (pos == 300) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }                

    }

}

btn1.addEventListener('click',myAnim);

let buttonblock = document.querySelector('.btn-block'),
	btns = document.getElementsByTagName('button');
/*	
buttonblock.addEventListener('click', function(event){
	if (event.target && event.target.classList.contains('first')){
		console.log('Hello');

	}

});	
*/

buttonblock.addEventListener('click', function(event){
	if (event.target && event.target.matches('button.first')){
		console.log('Hello');

	}

});	

