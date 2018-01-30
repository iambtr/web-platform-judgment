功能；主要用于web端中判断终端类型，可以判断 微信 pc 移动端 安卓还是苹果 
使用：
	可以通过 npm i -S web-platform-judgment
	安装到项目依赖
	
	import Platform from 'web-platform-judgment'
		
	let platform=new Platform().type
	
	会得到：
		mo:表示移动端
		pc:表示pc
		and:安卓
		apple:苹果
		qq:qq
		wexin:微信
	
		mo_and
		mo_apple
		mo_apple_wexin
		mo_apple_qq
		mo_and_wexin
		mo_and_qq
		mo_other
		
		pc_win
		pc_apple
		pc_other
