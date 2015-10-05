function __userlib1__(pl) {
    exports = {};
//--------------------------------------------------------------
    exports.newImg = function(x,y) {
        console.log('lib1.newImg()');
        var img1 = new pl.Image("images/rect.png")
        img1.x = x;
        img1.y = y;
    }
//--------------------------------------------------------------
    ;
    return exports;
}