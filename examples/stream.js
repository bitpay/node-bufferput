#!/usr/bin/env node

var Put = require('../index.js');
(new Put())
    .word16be(24930)
    .word32le(1717920867)
    .word8(103)
    .write(process.stdout)
;
console.log(); //print a newline
