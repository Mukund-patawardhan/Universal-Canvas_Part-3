class Settings{
    constructor(){

    }

    getDrawing(){
        database.ref('drawings').on("value",(data)=>{
            if(data.val()!==0){
                console.log(data.val())
                drawing = data.val();
                //console.log(drawing);
            }
            
        })
    }

    updateDrawing(){
        database.ref('/').update({
            drawings:drawing
        })
    }

    getCount(){
        var playerCountRef = database.ref('Count');
        playerCountRef.on("value",(data)=>{
          Count = data.val();
        })
      }

    updateCount(){
        database.ref('/').update({
            Count:Count
        })
    }
}