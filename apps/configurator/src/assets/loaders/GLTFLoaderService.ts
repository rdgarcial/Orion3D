import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export class GLTFLoaderService {
  private loader = new GLTFLoader();

  load(url: string) {
    return new Promise((resolve, reject) => {
      this.loader.load(url, resolve, undefined, reject);
    });
  }
}
