import {joinRoom, selfId} from 'https://esm.run/trystero@0.20.0'
const config = {appId: 'test4341'}
let room


init(4341)

function init(n) {
    let getMove
    let getClick
  
    room = joinRoom(config, 'room' + n);
  
    //byId('room-num').innerText = 'room #' + n
    //room.onPeerJoin(addCursor)
    //room.onPeerLeave(removeCursor)
    //getMove(moveCursor)
    //getClick(dropFruit)
  }
