import {by, device, element, expect} from 'detox';

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Given any, When I open App, Then I should see "Pomodoro", And I should see "25:00", And I should see button "Play"', async () => {
    await expect(element(by.text('Pomodoro'))).toBeVisible();
    await expect(element(by.text('25:00'))).toBeVisible();
    await expect(element(by.id('pomodoroStartButton'))).toBeVisible();
  });
});
