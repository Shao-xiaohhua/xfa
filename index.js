$(function(){
  $('.one').on('click',function (){
	$(this).empty();
	//初始
	$.ajax({
	  url:'http://localhost:18080/getalluser',
	  dataType:'jsonp'
	}).done(function(data){
	  console.log(data)
	  for(var i = 0;i<data.length;i++){
		$('<h2>'+data[i].catname+'</h2>').appendTo('.one');
	  }
	})
  });
  $('.aaa').on('keyup',function (e){
	var cba = $('.name').val();
	if(cba===''){
	  alert('请输入姓名')
	}
	if(e.keyCode===13&&cba!==''){
	  var abc = $('.aaa').val();
	  $.ajax({
		url:'http://xiaoliaotian.duapp.com/text',
		data:{name:cba,aa:abc},
		dataType:'jsonp'
	  }).done(function (data){
		$('<li>'+data[data.length-1].name+':'+data[data.length-1].val+'</li>').appendTo('.three');
		$('.aaa').val('');
		console.log(data)
	  })
	}
  });
  $('.btn').on('click',function (){
	$('.three').empty();
	$.ajax({
	  url:'http://xiaoliaotian.duapp.com/fa',
	  dataType:'jsonp'
	}).done(function (data){
	  for(var i = 0;i<data.length;i++){
		$('<li>'+data[i].name+':'+data[i].val+'</li>').appendTo('.three');
	  }
	  console.log(data)
	})
  });
//
//$('.aaa').on('keyup',function (){
//  var va = $(this).val();
//  var reg =/^[0-9a-zA-Z]{1,10}$/;
//  if(reg.exec(va)===null){
//    $('.bbb').text('输入不正确');
//  }else if(reg.exec(va)!==null){
//	$('.bbb').text('pass');
//  }
//})
//  $('.aaa').on('keyup',function (){
//	var va = $(this).val();
//	var aab = /\s/;
//	if(va===''){
//	  $('.bbb').text('请输入密码');
//	}
//  })
});
$(function (){
  var shujuku=[];
  var len;
  var cad=function (){
	$('.three').empty();
	$.ajax({
	  url:'http://xiaoliaotian.duapp.com/fa',
	  dataType:'jsonp'
	}).done(function (data){
	  len = data.length;
	  for(var i = 0;i<data.length;i++){
		$('<li>'+data[i].name+':'+data[i].val+'</li>').appendTo('.three');
	  }
	});
  }
  setInterval(cad,1000);
  $('.enp').on('click',function (){
	$.ajax({
	  url:'http://xiaoliaotian.duapp.com/rem',
	  dataType:'jsonp'
	}).done(function (){
	  alert('chenggong')
	})
  })
});
