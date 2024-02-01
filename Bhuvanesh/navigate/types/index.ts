type RootParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  StackContainer: undefined;
  Screentmp: { id: number };
};

export type DrawerParamList = {
  Tab: undefined;
  StackContainer: undefined;
};

export type StackParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
};

export interface action {
  type: string;
  payload: string;
}

export default RootParamList;
