#!/usr/bin/env node

var Put = require('../index.js');
var buf = (new Put())
    .word16be(1337)
    .word8(1)
    .pad(5)
    .put(new Buffer('pow', 'ascii'))
    .word32le(9000)
    .buffer()
;
console.log(buf);
