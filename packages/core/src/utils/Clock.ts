export class Clock{
 private last=performance.now();
 delta=0;
 tick(){const n=performance.now();this.delta=(n-this.last)/1000;this.last=n;return this.delta;}
}