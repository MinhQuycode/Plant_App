import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Setting from "../screens/Setting";

import { theme } from "../constants";

const Stack = createStackNavigator(
  {
    Welcome,
    Login,
    Explore,
    Browse,
    Product,
    Setting,
  },
  { navigationOptions: {} }
);

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
};

export default MainNavigator;
