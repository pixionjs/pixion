PIXION.begin(600,600);

(new PIXION.Scene( function(scene) {
  var circ = new scene.Circle(290, {x:300, y:300, lineWidth:20});
  var niddleSec = new scene.Lines(0,0,0,-270,{layer:1, x:300,y:300,lineWidth:5});
  var niddleMin = new scene.Lines(0,0,0,-260,{x:300,y:300,lineWidth:10,lineColor:0xff0000});

  var secs = 0;
  new scene.Timer(100, function() {
    secs++;
    niddleSec.rotation += 6*Math.PI/180;
    if (secs % 60 == 0) {
      niddleMin.rotation += 6*Math.PI/180;
    }
  },0);
})).show();
