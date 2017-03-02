var x=500;
var y =500;

var xa=0;
var ya =0;

var xb=0;
var yb =1000;

var xc=1000;
var yc =0;

var xd=1000;
var yd =1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
frameRate(160);

}

function draw() {

  var r = random(0,125);
  var g = random(0,125);
  var b = random(255);

fill(r,g,b);
ellipse(x,y,25,25);
  if (x>mouseX) {
    x-=1;
  }
  if (x<mouseX) {
    x+=1;
  }
  if (y>mouseY) {
    y-=1;
  }
  if(y<mouseY){
    y+=1
  }

  fill(r*2,g*2,b);
  ellipse(xa,ya,25,25);
    if (xa>mouseX) {
      xa-=2;
    }
    if (xa<mouseX) {
      xa+=2;
    }
    if (ya>mouseY) {
      ya-=2;
    }
    if(ya<mouseY){
      ya+=2
    }

    fill(r*2,g,b);
    ellipse(xb,yb,25,25);
      if (xb>mouseX) {
        xb-=3;
      }
      if (xb<mouseX) {
        xb+=3;
      }
      if (yb>mouseY) {
        yb-=3;
      }
      if(yb<mouseY){
        yb+=3
      }

      fill(r,g*2,b);
      ellipse(xc,yc,25,25);
        if (xc>mouseX) {
          xc-=4;
        }
        if (xc<mouseX) {
          xc+=4;
        }
        if (yc>mouseY) {
          yc-=4;
        }
        if(yc<mouseY){
          yc+=4
        }

        fill(r/2,g/2,b);
        ellipse(xd,yd,25,25);
          if (xd>mouseX) {
            xd-=5;
          }
          if (xd<mouseX) {
            xd+=5;
          }
          if (yd>mouseY) {
            yd-=5;
          }
          if(yd<mouseY){
            yd+=5;
          }
}
