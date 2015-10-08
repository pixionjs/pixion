//function main_js__pixion__(po) { exports = {};
// PIXION.userFile["lib/bullet"] = function(po) { exports = {};
 PIXION.userFiles["main"] = function(po) { exports = {};
//--------------------------------------------------------------
    var sheet1 = new po.ImageSheet("images/cat.png", {width: 512, height: 256, numFrames: 8});
    var ani1 = new po.Sprite(sheet1, {time: 500, x:300, y:600, name:"ani1"});
//        ani1.y = 300;

    new po.Timer(3000, function () {
            po.gotoScene("scene1", {effect: "slideRight", time: 500});
        });

    var tt = new po.Text("SCENE 1",{font:'50px Hack', layer:7, name:"tt1"});
        tt.x = 300;
        tt.y = 100;

    tt.moveTo({time:500,y:700,scale:0.5,delay:800});
    ani1.moveTo({time:500,y:100,scale:0.1,delay:800});

//        po.eventFrame(function() {
//            console.log("arrTmr:["+po.scene._arrTmrId+"]");
//        });
//--------------------------------------------------------------
    ;
    return exports;
}
