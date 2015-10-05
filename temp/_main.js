// PIXION.userFiles["lib/bullet"] = function(po) { exports = {};
// PIXION.userFiles["main"] = function(po) { exports = {};
function main_js__pixion__(po) { exports = {};
//--------------------------------------------------------------
//    var lib = po.require('userlib1');
        
        var sht1 = new po.ImageSheet("images/fighter.png", {width: 56, height: 62, numFrames: 3});
//        var myShip = new po.Sprite(sht1, {time:500});
        var myShip = po.Image.fromImageSheet(sht1, 0);
        myShip.x = 300;
        myShip.y = 500;
        
        var arrBul = [];
        new po.Timer(100, function() {
            var bull = new po.Image("images/bul.png");
            bull.x = myShip.x;
            bull.y = myShip.y-20;
            bull.setScale(0.5);
            arrBul.push( bull );
            
        },0);
                                
        new po.Timer(1000,function() {
            console.log("tmr1");
        });
        
        po.eventFrame(function() {
            for(var id = arrBul.length-1; id>=0; id--) {
                if (arrBul[id].y < 0) {
                    arrBul[id].remove();
                    arrBul.splice(id,1);
                } else {
                    arrBul[id].y -= 20;
                }
            }
//            myShip.x -= 1;
//            console.log("tmr.len:"+po.scene._arrTmrId.length);
            console.log("tmr.len:"+po.scene._arrTmrId);
        });
        
        po.eventMouse( function(event) {
//                console.log(event);
            if (event.action == "moved" && event.isLeftDown) {
                myShip.x += event.dx;
                myShip.y += event.dy;
            }
            
        });
        
        var rect = new po.Image('images/rect.png',{x:300,y:400});
        rect.rotation = 30;
        rect.eventMouse( function(event) {
            console.log("rect1 event:"+event);
            if (event.action == "moved" && event.isLeftDown) {
                rect.x += event.dx;
                rect.y += event.dy;
            }
        });
        
        var rect2 = new po.Image('images/rect.png',{layer:2,x:400,y:400});
        rect2.eventMouse( function(event) {
            console.log("rect2 event:"+event);
            if (event.action == "moved" && event.isLeftDown) {
                rect2.x += event.dx;
                rect2.y += event.dy;
            }
        });
        
        rect2.moveTo({x:100,y:100,scale:0.5,alpha:0.5,time:500});
//        po.scene.container.interactive = true;
//        po.scene.container.on("mousedown", function(md) {
//            var event = {phase:"began"};
//            event.x = md.data.originalEvent.clientX;
//            event.y = md.data.originalEvent.clientY;
//            event.dx = 0;
//            event.dy = 0;
//            mouseEvent(event);
////            console.log("mdown x:"+md.data.originalEvent.clientX+", y:"+md.data.originalEvent.clientY);
////            console.dir(md.data.originalEvent);
//        });
//
//        po.scene.container.on("mousemove", function(md) {
//            var event = {phase:"moved"};
//            event.x = md.data.originalEvent.clientX;
//            event.y = md.data.originalEvent.clientY;
//            event.dx = md.data.originalEvent.movementX;
//            event.dy = md.data.originalEvent.movementY;
//            mouseEvent(event);
//        });
//        
//        po.scene.container.on("mouseup", function(md) {
//            var event = {phase:"ended"};
//            event.x = md.data.originalEvent.clientX;
//            event.y = md.data.originalEvent.clientY;
//            event.dx = md.data.originalEvent.movementX;
//            event.dy = md.data.originalEvent.movementY;
//            mouseEvent(event);
//        });
//        
//        po.scene.container.on("mouseupoutside", function(md) {
//            var event = {phase:"endedoutside"};
//            event.x = md.data.originalEvent.clientX;
//            event.y = md.data.originalEvent.clientY;
//            event.dx = md.data.originalEvent.movementX;
//            event.dy = md.data.originalEvent.movementY;
//            mouseEvent(event);
//        });
        
//        ani1.y = 300;

//        console.log("main run")
//        
//        var ast = [];
//        new pl.Timer(50, function() {
//            var img1 = new pl.Image("images/ast1.png");
//            img1.x = Math.random()*600;
//            img1.dy = Math.random()*5+2;
//            img1.setScale(0.5);
//            img1.dr = (Math.random()-0.5)*0.1;
//            ast.push(img1);
//        }, 0);
//        
//        new pl.Timer(200, function() {
//            var img2 = new pl.Image("images/ast1.png",{layer:2});
//            img2.x = Math.random()*600;
//            img2.dy = Math.random()*5+2;
////            img1.scaleX = img1.scaleY = 0.7;
//            img2.dr = (Math.random()-0.5)*0.1;
//            ast.push(img2);
//        }, 0);
//        
//        var sht1 = new pl.ImageSheet("images/ast2.png",{width:60, height:101, numFrames:6});
//        
//        new pl.Timer(200, function() {
//            var ani1 = new pl.Sprite(sht1,{time:500, layer:1});
//            ani1.x = Math.random()*600;
//            ani1.dy = Math.random()*5+2;
////            img1.scaleX = img1.scaleY = 0.7;
//            ani1.dr = 0;
//            ast.push(ani1);
//        }, 0);
////
//        var tt = new pl.Text("SCENE 1",{font:'50px Hack', layer:7});
//        tt.x = 300;
//        tt.y = 400;
//
//        pl.enterFrame(function() {
//            var cnt = 0;
//            ast.forEach(function(ele,id,arr) {
//                ele.y += ele.dy;
//                ele.rotation += ele.dr;
//                if (ele.y>900) {
//                    ele.remove();
//                    delete arr[id];
//                    
//                }
//                cnt++;
//            });
////            console.log("dispObjs.length:"+pl.scene.dispObjs.length);
//        });
////
////        
////        //
//////        new pl.Timer(2000, function () {
//////            pl.gotoScene("scene1", {effect: "slideLeft", time: 3000});
//////        });
////
////        
////        var img1 = new pl.Image('images/ch1.png', {name:"img1"});
//////        grp.addChild(img1);
//////        pl.log("withd:"+grp.width);
//////        pl.log("height:"+grp.height);
////
////        var img2 = new pl.Image('images/rect.png',{name:"img2"});
//////        grp.addChild(img2);
//////        pl.log("withd:"+grp.width);
//////        pl.log("height:"+grp.height);
////        
////
////        var img3 = new pl.Image('images/ast1.png', {name:"img3"});
//////        grp.addChild(img1);
//////        pl.log("withd:"+grp.width);
//////        pl.log("height:"+grp.height);
////
////        var img4 = new pl.Image('images/ast2.png', {name:"img4"});
////        var img5 = new pl.Image('images/ast1.png', {name:"img5"});
////
////        var grp = new pl.Group({name:"grp1"});
////        grp.addChild(img1);
////        grp.addChild(img2);
////        grp.x = 300;
////        grp.y=300;
////
//////        grp.removeChild(img1);
//////        grp.remove();
//////
////////    var sheet1 = new pl.ImageSheet("images/cat.png",
////////                                   {width: 512, height: 256, numFrames: 8});
////////    var ani1 = new pl.Sprite(sheet1, {time:1000, layer:2});
////////        ani1.x = 300;
////////        ani1.y = 400;
//////    
//////
////////    var grp1 = new pl.Group({x:300,y:400});
////////        grp1.add(img1);
////////        grp1.add(ani1);
////////    
//////////        img1.parent.removeChild(ani1);
//////////        grp.addChild(ani1);
//////////
////////        
////////        new pl.Timer(1000/60, function() {
////////            //ani1.rotation += 0.02;
////////            grp1.rotation += 0.02;
////////            //pl.log('upd');
////////        },0)
//////        
////////        new pl.Timer(1000, function () {
////////            var img1 = new pl.Image("images/ch1.png");
////////            img1.x = Math.random()*400+100;
////////            img1.y = Math.random()*600+100;
//////////            pl.log("gen");
//////////            pl.log("after img1.remove():"+img1);
////////        },0);
////////        
////////        new pl.Timer(4000, function () {
////////            grp1.add(img1);
////////        });
//////      
////        pl.enterFrame(function() {
////            grp.rotation += 0.05;
////        });
//        
//        new po.Timer(6000, function () {
//            po.gotoScene("scene1", {effect: "slideLeft", time: 1000});
//        });
//    };

//--------------------------------------------------------------
    ;
    return exports;
}