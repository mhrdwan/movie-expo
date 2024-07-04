import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import RootLayout from './_layout';

function App() {
  return (
    <NavigationContainer>
      <RootLayout />
    </NavigationContainer>
  );
}

registerRootComponent(App);
