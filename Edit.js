class Edit{
    constructor(){
        this.r=createButton("Red");
        this.g=createButton("Green");
        this.b=createButton("Blue");
        this.y=createButton("Yellow");
        this.w=createButton("White");
        this.p=createButton("Pink");
        this.pur=createButton("Purple");
        this.v=createButton("Violet");
        this.c=createButton("Coral");
        this.ol=createButton("Olive");
        this.t=createButton("Turquoise");
        this.m=createButton("Magenta");
        this.or=createButton("Orange");
        this.pp=createButton("Peach");
        this.te=createButton("Teal");
        this.slider=createSlider(1,15,1,1);
        this.value;
    }
    
    display(){
        this.r.position(0,0);
        this.r.mousePressed(()=>{
  colour="red";
})

this.g.position(100,0);
this.g.mousePressed(()=>{
  colour="green";
})

this.b.position(200,0);
this.b.mousePressed(()=>{
  colour="blue";
})

this.y.position(0,100);
this.y.mousePressed(()=>{
  colour="yellow";
})

this.w.position(100,100);
this.w.mousePressed(()=>{
  colour="white";
})

this.p.position(200,100);
this.p.mousePressed(()=>{
  colour="pink";
})

this.pur.position(0,200);
this.pur.mousePressed(()=>{
  colour="purple";
})

this.v.position(100,200);
this.v.mousePressed(()=>{
  colour="violet";
})

this.c.position(200,200);
this.c.mousePressed(()=>{
  colour="coral";
})

this.t.position(0,300);
this.t.mousePressed(()=>{
  colour="turquoise";
})

this.ol.position(100,300);
this.ol.mousePressed(()=>{
  colour="olive";
})

this.pp.position(200,300);
this.pp.mousePressed(()=>{
  colour="peachpuff";
})

this.or.position(0,400);
this.or.mousePressed(()=>{
  colour="orange";
})

this.m.position(100,400);
this.m.mousePressed(()=>{
  colour="magenta";
})

this.te.position(200,400);
this.te.mousePressed(()=>{
  colour="teal";
})

this.slider.position(100,450);
this.value=this.slider.value();


    }
}

