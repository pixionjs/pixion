PIXION.begin(600,600);

(new PIXION.Scene( function(scene) {
  var frame = new scene.Circle(290, {x:300, y:300, lineWidth:20});
  var center = new scene.Circle(15, {layer:2, x:300, y:300, fillColor:0xffffff});
  var niddleSec = new scene.Lines(0,0,0,-270,{layer:1, x:300,y:300,lineWidth:5});
  var niddleMin = new scene.Lines(0,0,0,-260,{x:300,y:300,lineWidth:10,lineColor:0xff0000});

  var secs = 0;
  new scene.Timer(1000, function() {
    secs++;
    niddleSec.rotation += 6*Math.PI/180;
    if (secs % 60 == 0) {
      niddleMin.rotation += 6*Math.PI/180;
    }
  },0);
})).show();
