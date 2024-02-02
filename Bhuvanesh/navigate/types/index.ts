type RootParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  StackContainer: undefined;
};

export type DrawerParamList = {
  TabContainer: undefined;
  Stack1: undefined;
};

export type StackParamList = {
  Stack1: undefined;
  Stack2: undefined;
  Stack3: undefined;
  Drawer: undefined;
};

export interface action {
  type: string;
  payload: string;
}

export default RootParamList;
