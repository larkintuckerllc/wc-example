declare module '@vaadin/router' {
  export class Router {
    static go: (someParam?: any) => any;
    constructor(someParam?: any);
    setRoutes: (someParam?: any) => any;
  }
  
  export interface Location {
    params: { [key: string]: string };
  }
}
