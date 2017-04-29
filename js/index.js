var passwords = ['BEST:HACK', 'HACKATHON', 'BEST2002', 'BOND007', 'PASS123'];
var indexOld;
var index = Math.floor((Math.random() * passwords.length));
var password = passwords[index];
var characters = [];
var counter = 0;
	
var interval = setInterval(function(){
		for(i = 0; i < counter; i++) {
			characters[i] = password.charAt(i);
		}
		for(i = counter; i < password.length; i++) {
			characters[i] = Math.random().toString(36).charAt(2);
		}
		$('.password').text(characters.join(''));
	}, 25);
	


function hack() {
	counter++;
	if(counter == password.length){
		$('.granted').removeClass('hidden');
		setTimeout( function(){
			document.body.innerHTML = '<div id="console">> </div>';
		}, 2000);
		setTimeout(function(){
			document.body.innerHTML = '<div id="console">> <span class="blink">_</span></div>';
		}, 3000);
		setTimeout(function(){
			document.getElementById('console').innerHTML="> Hello fellow hackers! Glad to see you on this page :) <br>> feel comfortable.";
		}, 4000);
	}
}

$(window).on('keydown', hack);
$('.password').on('click', hack);

//keyboard events won't fire if the iframe isn't selected first in Full Page view
$('.start').on('click', function() {
	$(this).addClass('hidden');
	$('.info p:last-child, .password').removeClass('hidden');
});