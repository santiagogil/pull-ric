var ric = require('request-idle-callback')

module.exports = function () {
  return function (read) {
    var timesCalled = 0
    var totalTime = 0
    var initial = 0
    return function (end, cb) {
      ric.requestIdleCallback(ricked)
      function ricked (deadline) {
        timesCalled ++
        if (deadline.timeRemaining() > totalTime/timesCalled) {
        return _read()
        }
        ric.requestIdleCallback(ricked)
      }
      function _read () {
        initial = performance.now()
        read(end, function (end, data) {
          cb(end, data)
        })
        totalTime = performance.now() - initial
      }
    }
  }
}
