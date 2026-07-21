import {Runtime} from "../runtime/Runtime";
import {EventBus} from "../events/EventBus";
import {ServiceContainer} from "../services/ServiceContainer";
export class OrionEngine{
 readonly runtime=new Runtime();
 readonly events=new EventBus();
 readonly services=new ServiceContainer();
 initialize(){this.runtime.initialize();}
 start(){this.runtime.start();}
 stop(){this.runtime.stop();}
}