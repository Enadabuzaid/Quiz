var score = 0;
var total = 10;
var point = 1;
var highest = total * point;

function init(){
	// set correct answers 
	sessionStorage.setItem('a1','b');
	sessionStorage.setItem('a2','d');
	sessionStorage.setItem('a3','d');
	sessionStorage.setItem('a4','c');
	sessionStorage.setItem('a5','b');
	sessionStorage.setItem('a6','d');
	sessionStorage.setItem('a7','d');
	sessionStorage.setItem('a8','b');
	sessionStorage.setItem('a9','c');
	sessionStorage.setItem('a10','b');
}

$ (document).ready(function(){
	$('.questionForm').hide();

	$('#q1').show();

	$('.questionForm #submit').click(function(){
		//get data attribute 
		current = $(this).parents('form:first').data("question");
		next = $(this).parents('form:first').data("question")+1;

		$('.questionForm').hide();
		$('#q'+next+'').fadeIn(300);
		process(''+current+'');
		return false

	});

	/*$('#q1 #submit').click(function(){
		$('.questionForm').hide();
		process('q1');
		$('#q2').fadeIn(300);
		return false;
	});

	$('#q2 #submit').click(function(){
		$('.questionForm').hide();
		process('q2');
		$('#q3').fadeIn(300);
		return false;
	});

	$('#q3 #submit').click(function(){
		$('.questionForm').hide();
		process('q3');
		$('#q4').fadeIn(300);
		return false;
	});

	$('#q4 #submit').click(function(){
		$('.questionForm').hide();
		process('q4');
		$('#q5').fadeIn(300);
		return false;
	});

	$('#q5 #submit').click(function(){
		$('.questionForm').hide();
		process('q5');
		$('#q6').fadeIn(300);
		return false;
	});

	$('#q6 #submit').click(function(){
		$('.questionForm').hide();
		process('q6');
		$('#results').fadeIn(300);
		return false;
	});*/
});

function process(n){
	var submitted = $('input[name=q'+n+']:checked').val();
		if(submitted == sessionStorage.getItem('a'+n+'')){
		score = score + point;
	}

/*
	if(q == "q1"){
		var submitted = $('input[name=q1]:checked').val();
		if(submitted == sessionStorage.a1){
			score++;
		}
	}



	if(q == "q2"){
		var submitted = $('input[name=q2]:checked').val();
		if(submitted == sessionStorage.a2){
			score++;
		}
	}



	if(q == "q3"){
		var submitted = $('input[name=q3]:checked').val();
		if(submitted == sessionStorage.a3){
			score++;
		}
	}




	if(q == "q4"){
		var submitted = $('input[name=q4]:checked').val();
		if(submitted == sessionStorage.a4){
			score++;
		}
	}



	if(q == "q5"){
		var submitted = $('input[name=q5]:checked').val();
		if(submitted == sessionStorage.a5){
			score++;
		}
	}


*/
if(n== total){
		$('#results').html('<h3>Final Score is :'+score+' out of '+highest+' </h3>');


		if (score >= highest/2) {
			$('#results').append('<center><p style="background-color:#81ff8ebf;">pass</p></center><br><center><button><a href="index.html">Take again</a></button></center>');
		} else  {
			$('#results').append('<center><p style="background-color:#ff8181bf">faild!!</p></center><br><center><button><a href="index.html">Take again</a></button></center>');
		}
	}
	
	return false;
}

window.addEventListener('load',init,false);
