# pull-ric
A pull through that works only on idle time

## Usage
``` js
var pull = require('pull-stream')
var ric = require('pull-ric')

var pipe = pull(pull.infinite(),ric())

// pipe executes reads and cb from any reader on browser idle time
// this allows to do some work withowt interfering with render performance

setInterval(function(){return pipe(null, console.log)},5)
```
It uses the average execution time of the readers cb to determine how many calls to do on each frame.

## Todo
* [ ] tests
* [ ] perf tests
* [ ] demo with animation 
