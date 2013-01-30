var flac = require("./flac");

exports.testCanConstruct = function(test){
    test.expect(1);
    var decoder = flac.Decoder();
    test.ok(true, "this assertion should pass");
    test.done();
};
