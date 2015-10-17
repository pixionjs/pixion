var urlMissilePng = "images/missile.png";
PIXION.begin(600,800);
(new PIXION.Scene( function(scene) {
  var sheet = new scene.ImageSheet( urlMissilePng,
    {width:34, height:190, numFrames:7});

  var sprite = new scene.Sprite(sheet,
    {time:500, x:300,y:-200});

  scene.onFrame(function(){
    sprite.y += 5;
    if (sprite.y > 1000) {
      sprite.y = -200;
      sprite.x = Math.random()*500;
    }
  })
})).show();
