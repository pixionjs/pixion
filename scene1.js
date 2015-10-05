//function scene1_js__pixion__(po) { exports = {};
PIXION.userFiles["scene1"] = function(po) { exports = {};
//--------------------------------------------------------------
//    var lib = require('userlib1');

//    exports.run = function (stg) {
//        console.log("scene1 enter");

//        var img1 = new pl.Image('images/rect.png');
//        img1.x = 200;
//        img1.y = 300;
//
//        lib.newImg(200, 200);
//        new stg.Timer(1000 / 60, function () {
//            img1.rotation += 0.05;
//            pl.log('scene1 tmr1');
//        }, -1);
//
//        new pl.Timer(100, function(){
//            var img2 = new pl.Image('images/rect.png');
//            img2.x = Math.random()*600;
//            img2.y = Math.random()*800;
//        },0);
        var sheet1 = new po.ImageSheet("images/cat.png", {width: 512, height: 256, numFrames: 8});
        var ani1 = new po.Sprite(sheet1, {time: 500, x:300, y:400, name:"ani1"});
//        ani1.y = 300;
        ani1.setScale(0.6);
        var tt = new po.Text("SCENE 2",{font:'50px Hack', layer:7, name:"tt1"});
        tt.x = 300;
        tt.y = 100;
//
        new po.Timer(3000, function () {
            po.gotoScene("main", {effect: "slideRight", time: 500});
        });

        po.eventFrame(function() {
            console.log("tmr.len:"+po.scene._arrTmrId);
        });
//    }
//--------------------------------------------------------------
    ;
    return exports;
}
