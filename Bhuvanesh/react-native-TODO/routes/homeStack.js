const { createStackNavigator } = require("react-navigation-stack");
import { createAppContainer } from 'react-navigation';

import App from '../App';
import { Todo } from '../components/Todo';
const screens = {
    Home:{
        screen: App, 
    },
    Todos:{
        screen: Todo,
    }
}
// focus effect
// navigate stack drawer bottom tabs

const HomeStack = createStackNavigator(App);
export default createAppContainer(HomeStack);