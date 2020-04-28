import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native';
import {render} from 'react-native-testing-library';
import HomeScreen from './home';

describe('Home Screen', () => {
  it('Given any, When I open App, Then I should see "Pomodoro", And I should see "25:00", And I should see button "Play"', async () => {
    const component = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );
    expect(component.getByText('Pomodoro')).toBeDefined();
    expect(component.getByText('25:00')).toBeDefined();
    expect(component.getByTestId('pomodoroStartButton')).toBeDefined();
  });
});
