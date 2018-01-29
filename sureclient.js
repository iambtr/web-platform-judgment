/*
* 浏览器端设备判断
* android/webos/ios/wp/aliyunos/symbian/blackberry/tizen/bada/wince/kindle fire(HDX7/HDX8.9)
* 平板仅区分iPAD,其余平台归类为Mobile
*/
class platform{
  constructor(){
    this.type='pc_win'
    this.useragent=navigator.userAgent.toLowerCase()
    this.init()
  }
  init(){
    if(/mobile/i.test(this.useragent)){
      if (/iphone|ipod|ipad/i.test(this.useragent)) {
        if(/micromessenger/i.test(this.useragent)){
          this.type='mo_apple_wexin'
          return this.type
        }
        this.type='mo_apple'
        return this.type
      }
      if (/android/i.test(this.useragent)) {
        if(/micromessenger/i.test(this.useragent)){
          this.type='mo_and_wexin'
          return this.type
        }
        this.type='mo_and'
        return this.type
      }
      this.type='mo_other'
      return this.type
    }else{
      if (/windows/i.test(this.useragent)) {
        this.type='pc_win'
        return this.type
      }
      if (/mac/i.test(this.useragent)) {
        this.type='pc_apple'
        return this.type
      }
      this.type='pc_other'
      return this.type
    }
  }
}
export default platform
