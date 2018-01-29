功能；主要用于web端中判断终端类型，可以判断 微信 pc 移动端 安卓还是苹果 
使用：
	const Platform=require('web-platform-judgment')
		
	let platform=new Platform().type
	
	会得到：
		mo:表示移动端
		pc:表示pc
		and:安卓
		apple:苹果
		wexin:微信
	
		mo_and
		mo_apple
		mo_apple_wexin
		mo_and_wexin
		mo_other
		
		pc_win
		pc_apple
		pc_other