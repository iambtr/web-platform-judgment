
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
		if(/mqqbrowser/i.test(this.useragent)){
          this.type='mo_apple_qq'
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
		if(/mqqbrowser/i.test(this.useragent)){
          this.type='mo_and_qq'
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
