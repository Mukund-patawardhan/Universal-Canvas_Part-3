var dot=[];
var drawing=[];
var colour='white';
var edit,setting;
var Count=0;
var path = [];
var submit, nameInput,clear,clearAll;

function setup() {
  canvas=createCanvas(1350,3020);
  canvas.mousePressed(dragged);

  database=firebase.database();

  frameRate(100);

  edit=new Edit();

  submit=createButton("S U B M I T");
  nameInput=createInput(" ENTER  NAME  HERE");
  clear=createButton("C L E A R");
  clearAll=createButton("C L E A R   A L L");
  
}

function Press(){
  if(mouseIsPressed){
    if(mouseX>400){
      var val=edit.value;
    var point=[mouseX,mouseY,colour,val];
    dot.push(point);
    //console.log(dot);
    }
  }
  
}

function dragged(){
  //console.log(dot);
  dot=[];
  console.log(dot);
  drawing.push(dot);
  console.log(drawing);
}

function draw() {
  background(0); 

  edit.display();

  Press()

  Count=0;
  
  noFill();
  for(var i=0;i<drawing.length;i++){
    path=drawing[i];
  beginShape();
  for(var k=0;k<path.length;k++){
    stroke(path[k][2]);
    strokeWeight(path[k][3]);
    vertex(path[k][0],path[k][1]);
  }
  endShape();

}

nameInput.position(80,600);

clear.position(50,700);
clear.mousePressed(()=>{
  drawing=[];
})

clearAll.position(150,700);
clearAll.mousePressed(()=>{
  database.ref('/').update({
    drawings:0
  })
})

submit.position(130,650);
submit.mousePressed(()=>{
  console.log("submit");
    Count=1;
  saveDrawing();
})

var drawingRef=database.ref('drawings');
drawingRef.on("value",getDrawing,Err);


textSize(20);
stroke("red");
text("After Submiting, Please Refresh The Page",0,750);

stroke("white");
strokeWeight(10);
line(400,0,400,7700);

textSize(50);
stroke("white");
strokeWeight(1);
text("THICKNESS : "+edit.value,0,530);

}

function saveDrawing(){
  var ref=database.ref('drawings');
  var data={
    name:nameInput.value(),
    drawing:drawing
  }
  ref.push(data);
}

function getDrawing(data){
  var drawing=data.val();
  var keys=Object.keys(drawing);
  for(var p=0;p<keys.length;p++){
    var key=keys[p];
    var l=createButton(key);
    l.position(0,850+p*100);
    l.mousePressed(showList);
    getname(l);
    push();
    textSize(20);
    stroke("red");
    strokeWeight(1);
    var count=p+1;
    text("Project -- "+count+"  __  by  "+name,0,900+p*100);
    
    pop();
  }
}

function Err(){
  console.log("error");
}

function showList(){
  var key=this.html();
  
  var ref=database.ref('drawings/'+key);
  ref.on('value',getDraw,Err);

  function getDraw(data){
    var draw=data.val();
    drawing=draw.drawing;
  }
}

function getname(key){
  var k=key.html();
  
  var ref=database.ref('drawings/'+k);
  ref.on('value',getN,Err);

  function getN(data){
    var nam=data.val();
    name=nam.name;
  }
}


