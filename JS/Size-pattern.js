
      var bxo = document.getElementById("box")
			var boxs = box.getElementsByClassName("boxs")
			var box1 = document.getElementById("box1")
			var boxss = document.getElementById("boxss")
			var boxs1 = document.getElementsByClassName("boxs1")
			var img1left = document.getElementById("img1left")
			var img1right = document.getElementById("img1right")
			var pvalue = document.getElementsByClassName("pvalue")
			var img2bon = document.getElementById("img2bon")
			var imgbon = document.getElementById("imgbon")
			var pimg = document.getElementById("pimg")
			var p2img = document.getElementById("p2img")
			var btn2 = document.getElementById("btn2")
			var inp = document.getElementsByClassName("inp")
			var winheight = document.documentElement.clientHeight
			var winwidth = document.documentElement.clientWidth
		  function can(){
		  
			 for(var i=0;i<boxs.length;i++){
				boxs[i].style.height = winheight+"px";
				boxs[i].style.width = winwidth+"px"
			}
			 box1.style.width = winwidth+"px"
			 box1.style.height = winheight+"px";
			 boxss.style.width = winwidth*10+"px"
		for(var j=0;j<boxs1.length;j++){
				boxs1[j].style.width = winwidth+"px"
				boxs1[j].style.height = winheight*0.7+"px"
			}
			 img1left.style.top = winheight*0.3+"px"
			 img1right.style.top = winheight*0.3+"px"
			 for(var k=0;k<pvalue.length;k++){
			 var boxs1width = boxs1[k].offsetWidth
			 var boxs1height = boxs1[k].offsetHeight
			 pvalue[k].style.left = (boxs1width-pvalue[k].offsetWidth)/2+"px"
			 pvalue[k].style.top = boxs1height*0.2+"px"
			 }
		  }
		  can()
			window.onresize = function(){can()}
			//动态箭头
			var nom = 1
			var nom1= 1
			var num=0;
			function imgbon1(){
				if(img2bon.offsetTop > imgbon.offsetHeight-img2bon.offsetHeight){nom1 = -1}else if(img2bon.offsetTop<0){nom1 = 1}
					 img2bon.style.top = img2bon.offsetTop+nom1 +"px"}
			function pimg1(){
				if(p2img.offsetLeft > pimg.offsetWidth - p2img.offsetWidth){nom = -1}else if(p2img.offsetLeft < 0){nom = 1}
					p2img.style.left = p2img.offsetLeft+nom+"px"}
		var dinsi = null;dinsi2 = null
			boxs[0].onmouseover = function(){
				  clearInterval(dinsi);
				  dinsi = setInterval(imgbon1,20)
			}
    btn2.onmouseover = function(){
    	 clearInterval(dinsi2);
       dinsi2 = setInterval(pimg1,25)
    }
		btn2.onmouseout = function(){clearInterval(dinsi2)}
			boxs[1].onmouseover = function(){clearInterval(dinsi)}
			//用户名框与密码框
		for(var f=0;f<inp.length;f++){
				inp[f].addEventListener('click',function(event){
					var ev = event||window.event;
					this.style.background = "white"
					ev.stopPropagation();//阻止事件冒泡
					this.style.color = "black"
			})
		}
			boxs[0].onclick = function(){
				for(var d=0;d<inp.length;d++){
					inp[d].style.background = "rgba(0,0,0,.4)"
					inp[d].style.color = "white"
				}
			}
			//无缝轮播
			var uls1 = document.getElementById("uls1")
			var lisq = uls1.getElementsByTagName("li")
			var lis2 = uls1.getElementsByClassName("lis2")
			var boxss = document.getElementById("boxss")
			
		function dbl(cad){//清除兄弟样式
			 for (var j=0;j<lisq.length;j++) {
					lisq[j].className = "";
				}
				lisq[cad].className = "lis2";
	}
			for(var f=0;f<lisq.length;f++){
				lisq[f].index = f
				lisq[f].onclick = function(){
					$("#img1left").show()
					$("#img1right").show()
					for(var j=0;j<lisq.length;j++){
						dbl(this.index)
					}
            $("#boxss").stop().animate({"left":-(winwidth*$(this).index())},1000)
            num = $(this).index()
			}
		}
			var onoff = true//开关
			$("#img1left").click(function(){
				if(onoff){
					$("#img1right").show()
					num--
				  if(num <= 0){
				  	$(this).hide()
				  	num = 0
				  }
					$("#boxss").stop().animate({"left":-winwidth*num},1000)
					onoff=false
					dbl(num)
					setTimeout(function(){
						onoff = true
					},1000)
			  } 
			})
		$("#img1right").click(function(){
			if(onoff){
				$("#img1left").show()
				num++
				if(num >= $(".boxs1").length-1){ 
					$(this).hide()
					num = $(".boxs1").length-1
				}
				$("#boxss").stop().animate({"left":-winwidth*num},1000)
				  onoff = false
				  dbl(num)
				setTimeout(function(){
					onoff = true
				},1000)}
			})
		//滚屏
		
		function jd(cal){//清除兄弟样式
			$("#uls li").eq(cal).addClass("#uls lis").siblings().removeClass()
		}
		 $("#uls li").click(function(){ //Tab切换
		 	   jd($(this).index())
		 	   aom = $(this).index()
		 	   $("#box").stop().animate({"top":-($(this).index()*$(window).height())},600)
		 })
		mouseWheel(document);//判断鼠标滚动
			function mouseWheel(obj){
				var user = navigator.userAgent.toLowerCase();//判断浏览器类型
				if (user.indexOf("firefox") == -1){
					obj.onmousewheel = wheel;//非火狐
				} else{
					obj.addEventListener('DOMMouseScroll',wheel);//火狐
				}
			}
			var flag = null;
			var aom = 0
//			$(document).bind("mousewheel DOMMouseScroll",wheel)
			function wheel(event){//调用上下滚动事件
	   	   var ev = event||window.event;
				if(ev.wheelDelta){
					//鼠标向上滚动flag为true,向下滚动flag为false
					   flag = ev.wheelDelta>0 ? true : false;//三目运算符
				}else{
					flag = ev.detail>0 ? false : true;
				}
				if(flag){
					up();//向上滚动函数
				}else{
					down();//向下滚动函数
				}
	   }
		function up(){
			if(onoff){
				 aom--
				 if(aom<0){
				 	aom = $(".boxs").length-1
				 }
				 $("#box").stop().animate({"top":-aom*$(window).height()},500)
				 jd(aom)
				 onoff = false
				setTimeout(function(){
					onoff = true
				},800)
			}
		}
		function down(){
			if(onoff){
				 aom++
				 aom%=$(".boxs").length
				 $("#box").stop().animate({"top":-aom*$(window).height()},500)
				 jd(aom)
				 onoff = false
				setTimeout(function(){
					onoff = true
				},800)
			}
		}
		//登录注册切换
		var nom = 1
	 $("#btn").click(function(){
		   nom++
		  if(nom%2 == 0){
		   $("#btn").html("登录")
       $("#boxsss2").stop().animate({"top":-213})
		 }else{
			 $("#btn").html("注册")
       $("#boxsss2").stop().animate({"top":0})
		 }
		})
		//第三屏动态切换文字
		var ade = 0
		function cad(){
				ade++
		    ade %= $(".li2").length
			$("#ul2").stop().animate({"top":-ade*30},1000)
			console.log(ade)
		}
		var xiao =null
		$("#box3").mouseover(function(){
			   clearInterval(xiao)
			 xiao =  setInterval(cad,1000)
		})
		  $("#box3").mouseout(function(){
			   clearInterval(xiao)
		})
		$(".imgx").hover(function(){
			var cal = $(this).index()
			console.log(cal)
			$(".tx1").eq(cal).stop().animate({"top":-37})
			$(".tx2").eq(cal).stop().animate({"top":75})
		},function(){
			$(".tx1").stop().animate({"top":0})
			$(".tx2").stop().animate({"top":160})
		})
	//尾部效果
	 $("#box41f2f").hover(function(){
	 	      $("#box41f2").stop().fadeToggle(1000)
	 	      $(".ps1").stop().slideToggle(500)
	 })
	$("#img41").click(function(){
		if($("#youshang4").html() == loca.yhid){
			window.location.href="Main-frame-Chind1.html"
		}else{
			alert("请先登录")
		}
	})
	//正则表达式
	//注册
	var fal = null
function yhm(){
	var car = /^[\u4e00-\u9fa5\w]{3,16}$/;//正则表达式	
	if($("#inp1b").val() == ""){
		alert("用户名不能设置为空")
		fal = false
	}else if(!car.test($("#inp1b").val())){
		alert("您设置的用户名不符合规范")
		fal = false
	}else{
		fal = true
	}
	return fal
}
function mm(){
	var caer = /^[a-z0-9_-]{6,18}$/;//正则表达式	
	if($("#inp2b").val() == ""){
		alert("密码不能设置为空")
		fal = false
	}else if(!caer.test($("#inp2b").val())){
		alert("您设置的密码不符合规范")
		fal = false
	}else{
		fal = true
	}
	return fal
}
var loca = window.localStorage
$("#btn2b").click(function(){
	if(yhm()&&mm() == true){
		alert("注册成功")
		loca.yhid = $("#inp1b").val()
		loca.mimi = $("#inp2b").val()
		$("#boxsss2").stop().animate({"top":0})
		$("#btn").html("注册")
	}
})
//登录

function zh(){
//	var car = /^[a-z0-9_-]{3,16}$/;//正则表达式	
	if($("#inp1").val() == ""){
		alert("用户名不能为空")
		fal = false
	}else if($("#inp1").val()!==loca.yhid){
		alert("用户名不正确")
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
	}else if($("#inp2").val()!==loca.mimi){
		alert("密码不正确")
		fal = false
	}else{
		fal = true
	}
	return fal
}
$("#btn2").click(function(){
	if(zh()&&mima() == true){
		alert("登录成功")
		$("#a1").hide()
		$("#btn").hide()
		$("#ysh").show()
		$("#youshang4").html(loca.yhid);
		$("#inp1").val(null)
		$("#inp2").val(null)
		$("#box").stop().animate({"top":-$(window).height()+1},500)
		jd(1)
		aom =1
	}  
})
//第一屏上下浮动箭头点击事件
$("#img2bon").click(function(){
	$("#box").stop().animate({"top":-$(window).height()+1},500)
	jd(1)
	aom = 1
})
