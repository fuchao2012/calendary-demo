/**
 * 
 * @authors gaozhuo (you@example.org)
 * @date    2018-10-30 15:45:52
 * @version $Id$
 */
$(function(){
					//查询页
	//输入框获取焦点样式变化
	$(".search .inputCon input").focus(function(){
		if($(".search .inputCon input").val()=="日程标题"){
			$(".search .inputCon input").val("");
		}
		$(".search .inputCon").animate({width:'5.98rem'});
		$(".search .icon02").show();
		setTimeout(function(){
			$(".search .btn").show();
		},500)
	});
	//删除输入框内容
	$(".search .icon02").on("click",function(){
		$(".search .inputCon input").val("").focus();
	});
	//wrapper高度计算
	var winHeight = $(window).height();
	$(".search #wrapper").css("height",winHeight*2/100-0.84+"rem");	
					//按人员查询页面
	//wrapper高度计算
	var winHeight = $(window).height();
	$(".person #wrapper").css("height",winHeight*2/100-0.84+"rem");	
	$(".person .inputCon input").focus(function(){
		if($(".person .inputCon input").val()=="姓名"){
			$(".person .inputCon input").val("");
		}
	});
	//点击选中样式
	$(".person .result li").on("click",function(){
		if($(this).hasClass('select')){
			$(this).removeClass('select');
			var idx = $(this).index();
			for(var i=0;i<$(".person footer ul li").length;i++){
				if($(".person footer ul li").eq(i).attr("class")==idx){
					$(".person footer ul li").eq(i).remove();
					var num = $(".person footer button span").html();
					$(".person footer button span").html(num-1);
					if(num==1){
						$(".person footer").hide();
						$(".search #wrapper").css("height",winHeight*2/100-0.84+"rem");	
						$(".person .scroller").css("padding-bottom","0");	
					}
				}
			}
		}else{
			$(this).addClass('select');
			$(".person footer").show();
			$(".person #wrapper").css("height",winHeight*2/100-0.84-1.2+"rem");
			$(".person .scroller").css("padding-bottom","1.2rem");	
			var idx = $(this).index();
			var name = $(this).find(".name").html();
			$(".person footer ul").append("<li class='"+idx+"'>"+name+"</li>");
			var liLength = $(".person footer ul li").length;
			$(".person footer button span").html(liLength);
			$(".person footer ul li").on("click",function(){
				$(this).css("background","#f00")
				$(this).remove();
				var cidx= $(this).attr("class");
				$(".person .result li").eq(cidx).removeClass('select');
				var fnum = $(".person footer button span").html();
				var fnum01 = $(".person footer ul li").length;
					$(".person footer button span").html(fnum01);
					if(fnum01==0){
						$(".person footer").hide();
						$(".search #wrapper").css("height",winHeight*2/100-0.84+"rem");	
						$(".person .scroller").css("padding-bottom","0");	
					}
			})
		}
	});
	//弹窗
	$(".person footer button").on("click",function(){
		var num = $(this).find("span").html();
		if(num>=10){
			$(".person #tip").show();
		}
	})
	$(".person #tip div span").on("click",function(){
		$(".person #tip").hide();
	})

	                // 按机构查询页面
	//选中样式
	$(".orga ul li").on("click",function(){
		if($(this).hasClass('select')){
			$(this).removeClass('select');
		}else{
			$(this).addClass('select');
		}
	})
	      			//新增日程页面
	//弹窗
	$(".add .toSelect").on("click",function(){
		$(".add #select").show();
		if($(this).hasClass('a')){
			$(".add #select ul").addClass('aa').removeClass('bb cc dd');
			$(".add #select ul").html("<li>公开</li><li>私有</li>")
		}else if($(this).hasClass('b')){
			$(".add #select ul").addClass('bb').removeClass('aa cc dd');
			$(".add #select ul").html("<li>一般</li><li>重要</li><li>紧急</li>");
		}else if($(this).hasClass('c')){
			$(".add #select ul").addClass('cc').removeClass('aa bb dd');
			$(".add #select ul").html("<li>不提醒</li><li>邮件提醒</li>");
		}else if($(this).hasClass('type')){
			$(".add #select ul").addClass('dd').removeClass('aa bb cc');
			$(".add #select ul").html("<li>会议</li><li>培训</li><li>出差</li><li>休假</li><li>其他</li>");
		}
		var ulHeight = $(".add #select ul").height();
		$(".add #select ul").css("marginTop",-ulHeight/2);
		$(".add #select ul li").on("click",function(){
			$(".add #select").hide();
			var liHtml = $(this).html();
			if($(this).parent("ul").hasClass('aa')){
				$(".add .seUl .a .right").html(liHtml);
			}else if($(this).parent("ul").hasClass('bb')){
				$(".add .seUl .b .right").html(liHtml);
			}else if($(this).parent("ul").hasClass('cc')){
				$(".add .seUl .c .right").html(liHtml);
			}else if($(this).parent("ul").hasClass('dd')){
				$(".add .type .right").html(liHtml);
			}
		})
	})
})
