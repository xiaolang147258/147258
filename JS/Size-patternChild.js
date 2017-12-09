//登录注册按钮被点击弹出输入框
$("#btn1").click(function(){
	$("#yonghu").hide()
	$("#boxb").show(500)
	$("#mima").show(1000)
})
$("#btn2").click(function(){
	$("#mima").hide()
	$("#boxb").show(500)
	$("#yonghu").show(1000)
})
$(".xx1").click(function(){
	$("#boxb").hide()
})
//点击切换页面
$(".san").click(function(){
	$(".dan").eq($(this).index()-1).show().siblings().hide()
	var bonwid =  $("#bonxa").width()*($(this).index()-1)
	console.log(bonwid)
	$("#bonxa").stop().animate({"left":bonwid},300)
})
//百叶窗效果
$(".bchild").hover(function(){
	$(this).stop().animate({"width":"42%"},500).siblings().stop().animate({"width":"6.3%"},500)
	
},function(){
	$(".bchild").stop().animate({"width":"9.8%"},500)
	
})
//sp1被点击网页跳转
$("#sp1").click(function(){
	window.location.href = "Main-frame.html"
})
//正则表达式
var loca = window.localStorage
$("#yhID").html(loca.yhid)
$("#zuxiao").click(function(){
	$("#youshang2").hide()
	$("#youshang").show()
})
//注册
var fal = null
function yhm(){
	var car = /^[\u4e00-\u9fa5\w]{3,16}$/;//正则表达式	
	if($("#zu1").val() == ""){
		alert("用户名不能设置为空")
		fal = false
	}else if(!car.test($("#zu1").val())){
		alert("您设置的用户名不符合规范")
		fal = false
	}else{
		fal = true
	}
	return fal
}
function mm(){
	var caer = /^[a-z0-9_-]{6,18}$/;//正则表达式	
	if($("#zu2").val() == ""){
		alert("密码不能设置为空")
		fal = false
	}else if(!caer.test($("#zu2").val())){
		alert("您设置的密码不符合规范")
		fal = false
	}else{
		fal = true
	}
	return fal
}

$("#zu3").click(function(){
	if(yhm()&&mm() == true){
		alert("注册成功")
        loca.yhid = $("#zu1").val()
        loca.mimi = $("#zu2").val()
        $("#mima").hide()
        $("#yonghu").show()
	}
})
//登录
function zh(){
//	var car = /^[a-z0-9_-]{3,16}$/;//正则表达式	
	if($("#inp1").val() == ""){
		alert("用户名不能为空")
		fal = false
	}else if(!$("#inp1").val()==loca.yhid){
		alert("用户名错误")
		fal = false
	}else{
		fal = true
	}
	return fal
}
function mima(){
//	var caer = /^[a-z0-9_-]{6,18}$/;//正则表达式	
	if($("#inp2").val() == ""){
		alert("密码不能为空")
		fal = false
	}else if(!$("#inp2").val()==loca.mimi){
		alert("密码错误")
		fal = false
	}else{
		fal = true
	}
	return fal
}
$("#deng1").click(function(){
	if(zh()&&mima() == true){
		alert("登录成功")
		$("#boxb").hide()
		$("#youshang2").show()
	    $("#youshang").hide()
        $("#yhID").html(loca.yhid)
	}
})
//ajax
$(".fazhe").click(function(){
	$.ajax({
		type:"GET",
		url:"Fire/DSJ.json",
		async:true,
		dataType:"json",
		data:{},
		success:function(result){
              console.log(result["sj"]["sj"])
              $("#dongt1 .fazhe .dong1 .shijian").html(result["sj"]["sj"])
			  $("#dongt1 .fazhe .dong2").html(result["sj"]["val"])
		}
	})
})
$(".aixin").click(function(){
	$(this).attr("src","img2/zzz(1).png")
})
