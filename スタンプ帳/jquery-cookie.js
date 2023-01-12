$(function(){
	
	//Cookieの読み込み
	var visitCount = $.cookie('visitCount');
	//訪問数のカウント
	if(visitCount == null){ //最初の訪問
		visitCount = 0;
	}else{
		visitCount++;
	}
	//Cookieに訪問数を保存
	$.cookie('visitCount', visitCount, {expires: 7});
	
	//スタンプの処理
	if($('#visit-stamp td:eq('+visitCount+') span').length){ //指定のtd要素があるか判定
		//過去に訪問したぶんのスタンプを表示
		if($('#visit-stamp td:lt('+visitCount+') span').length){
			$('#visit-stamp td:lt('+visitCount+') span').addClass('visited');
		}
		//今回訪問したぶんのスタンプをアニメーションで表示
		 setTimeout(function(){
			$('#visit-stamp td:eq('+visitCount+') span')
				.css('transition','all 0.5s ease-in')
				.addClass('visited');
		 },300);
	}else{
		//訪問回数がtd要素の数を超えたらすべて表示
		$('#visit-stamp td:lt('+visitCount+') span').addClass('visited');
	}
	
	//訪問数の表示
	$('#visitnum').text(visitCount+1 +'回目の訪問です。');
	
	//Cookieのリセットクリック時の処理
	$('#reset').click(function(){
		$.removeCookie('visitCount');
		alert("Cookieをリセットしました。")
	});
	
});