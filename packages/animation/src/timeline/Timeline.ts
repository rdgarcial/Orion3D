export class Timeline{
 private playing=false;
 play(){this.playing=true;}
 pause(){this.playing=false;}
 isPlaying(){return this.playing;}
}