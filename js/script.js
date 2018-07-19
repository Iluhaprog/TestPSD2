$("#button").click(function(){
	$("html").animate({ 'scrollTop' :650} , "500");
});

$("#about").click(function(){

	$("html").animate({ 'scrollTop' :650} , "400");

});

$("#service").click(function(){

	$("html").animate({ 'scrollTop' :1950} , "400");

});

$("#portfolio").click(function(){

	$("html").animate({ 'scrollTop' :3050} , "600");

});

$("#testim").click(function(){

	$("html").animate({ 'scrollTop' :4450} , "600");

});

$("#contact").click(function(){

	$("html").animate({ 'scrollTop' :5050} , "700");

});





var a = document.getElementById('all').style;
var w = document.getElementById('web').style;
var m = document.getElementById('mobile').style;
var p = document.getElementById('photography').style;

function all(){

	p.display = 'none';
	m.display = 'none';
	w.display = 'none';
	a.display = 'flex';

}

function web(){

	p.display = 'none';
	m.display = 'none';
	a.display = 'none';
	w.display = 'flex';

}

function mobile(){

	p.display = 'none';
	w.display = 'none';
	a.display = 'none';
	m.display = 'flex';

}

function photography(){

	m.display = 'none';
	w.display = 'none';
	a.display = 'none';
	p.display = 'flex';

}