import {joinRoom} from 'https://esm.run/trystero@0.20.0'
const config = {appId: 'xgfxgfxg'}
let room


init(4341)

function init(n) {
    let getMove
    let getClick
  
    room = joinRoom(config, 'dgfdghfdghvgfd' );
  
   // room.error((e)=>{ console.log(e);});
    //byId('room-num').innerText = 'room #' + n
    room.onPeerJoin(addP)
    //room.onPeerLeave(removeCursor)
    //getMove(moveCursor)
    //getClick(dropFruit)
  }


  function addP(id, isSelf) {
    console.log(id, isSelf);

  }
