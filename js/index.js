$(function(){
	$('.box_l').click(function(){
		$(this).attr('src','image/bx_l_op.png');
		$(this).css('animation','run 0s forwards infinite alternate')
	})
	$('.box_r').click(function(){
		$(this).attr('src','image/bx_r_op.png');
		$(this).css('animation','run 0s forwards infinite alternate')
	})
	$('.bx').click(function(){
		$('.mb').show();
		$('.tankuang').eq($(this).index()).show()
	});
	$('.close').click(function(){
		$('.mb').hide();
		$('.tankuang').hide()
	})
})