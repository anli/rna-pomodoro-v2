import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Headline, IconButton} from 'react-native-paper';
import styled from 'styled-components/native';

const HomeScreenComponent = () => {
  return (
    <>
      <Screen>
        <Title>Pomodoro</Title>
        <Timer>25:00</Timer>
        <PomodoroStartButton testID="pomodoroStartButton" />
      </Screen>
    </>
  );
};

const HomeScreenOptions = {headerShown: false};

const Stack = createStackNavigator();
const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreenComponent}
      options={HomeScreenOptions}
    />
  </Stack.Navigator>
);

export default HomeStackScreen;

const Screen = styled.View`
  background-color: white;
  flex: 1;
`;

const Title = styled(Headline)``;

const Timer = styled(Headline)``;

const PomodoroStartButton = ({
  testID,
  onPress,
}: {
  testID: string;
  onPress?: () => void;
}) => <IconButton testID={testID} icon="play" size={20} onPress={onPress} />;
