$(document).ready(function(){
	$(".box").css("background","red").addClass("round");
	$(document).click(function(){
		$(".box").fadetoggle(4000);
	})
});