import {Lifecycle} from "../lifecycle/Lifecycle";
export class Runtime{
 state=Lifecycle.Created;
 initialize(){this.state=Lifecycle.Initialized;}
 start(){this.state=Lifecycle.Running;}
 pause(){this.state=Lifecycle.Paused;}
 stop(){this.state=Lifecycle.Stopped;}
 dispose(){this.state=Lifecycle.Disposed;}
}