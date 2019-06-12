exports.Client = class {
  constructor () {
    this.msg = [{ 
      msg: 'Good morning',
      start: 0,
      end: 12 
    },
    { 
      msg: 'Good afternoon',
      start: 12,
      end: 18
    },
    {
      msg: 'Good evening',
      start: 18,
      end: 24
    }]
  }

  getGreeting(h) {
    h = (h ==  undefined) ? (new Date()).getHours() : h
    let rtn = ''

    this.msg.forEach(function(val) {
      if (val.start <= h && h<val.end) {
        rtn = val.msg
        return false
      }
    })

    return rtn
  }
}