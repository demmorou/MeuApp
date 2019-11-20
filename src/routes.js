import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Home from './pages/Home';
import Buscar from './pages/Buscar';
import Info from './pages/Info';
import Perfil from './pages/Perfil';

const tabBottomNavigator =  createBottomTabNavigator(
    {
        Home: {
            screen: Home
        },
        Buscar: {
            screen: Buscar
        },
        Info: {
            screen: Info
        },
        Perfil: {
            screen: Perfil
        }
    }
);

export default createStackNavigator({
    Main: {
        screen: Main
    },
    tabBottomNavigator
});