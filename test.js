// Developed with help from https://github.com/TooTallNate/node-lame/blob/master/test/decoder.js

var fs = require("fs");

var flac = require("./flac");

exports.testCanConstruct = function (test){
    var decoder = flac.Decoder();
    test.done();
};


exports.testEmitsOneOrMoreReadableEvents = function (test) {
    var file = fs.createReadStream("testaudio/tone16bit.flac");
    var count = 0;
    var decoder = new flac.Decoder();
    decoder.on("readable", function () {
        count ++;
        var b;
        while (null != (b = decoder.read())) ;
    });
    decoder.on('finish', function () {
        test.ok(count > 0, "Did not get more than zero bytes");
        test.done();
    });
};
