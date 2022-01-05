import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navs/StackNavigation';
import { Provider } from './src/context/CourseContext';

const App = () => {

  return (
    <Provider>
      <NavigationContainer>
          <StackNavigation />
      </NavigationContainer>
    </Provider>
  );

}

export default App;
