export interface IRoute {
    path: string;
    component: any;
    name?: string;
    exact: boolean;
    role? : any;
  }
  