import {Test,SimulatedPlayer} from "mojang-gametest";
import {world,BlockLocation} from "mojang-minecraft";
world.events.beforeChat.subscribe((e)=>{
    let location=new BlockLocation(Math.round(e.sender.location.x),Math.round(e.sender.location.y),Math.round(e.sender.location.z));
    if(e.message=="spawn"){
        Test.spawnSimulatedPlayer(location,"Fake Player");
        e.sender.runCommand("say Done!");
        e.cancel=true;
    }
    return true;
});