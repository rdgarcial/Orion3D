export class RenderLoop{
 private running=false;
 start(cb:()=>void){
   this.running=true;
   const tick=()=>{
     if(!this.running)return;
     cb();
     requestAnimationFrame(tick);
   };
   requestAnimationFrame(tick);
 }
 stop(){this.running=false;}
}