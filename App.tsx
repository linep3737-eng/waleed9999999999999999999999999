import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import StudioScreen   from './src/screens/StudioScreen';
import DeviceScreen   from './src/screens/DeviceScreen';
import ProtocolScreen from './src/screens/ProtocolScreen';
import MonitorScreen  from './src/screens/MonitorScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import {AppStateProvider} from './src/utils/AppState';

const Tab = createBottomTabNavigator();

const TAB_ICONS: Record<string, string> = {
  Studio: '🎬', Device: '📡', Protocols: '⚡', Monitor: '📊', Settings: '⚙',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppStateProvider>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#040b04" />
          <Tab.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarStyle: styles.tabBar,
              tabBarActiveTintColor: '#00ff78',
              tabBarInactiveTintColor: '#2a4a2a',
              tabBarLabelStyle: styles.tabLabel,
              tabBarIcon: ({focused}) => null,
              tabBarLabel: TAB_ICONS[route.name] + ' ' + route.name,
            })}>
            <Tab.Screen name="Studio"    component={StudioScreen}   options={{tabBarLabel:'🎬 الاستوديو'}}/>
            <Tab.Screen name="Device"    component={DeviceScreen}   options={{tabBarLabel:'📡 الأجهزة'}}/>
            <Tab.Screen name="Protocols" component={ProtocolScreen} options={{tabBarLabel:'⚡ بروتوكولات'}}/>
            <Tab.Screen name="Monitor"   component={MonitorScreen}  options={{tabBarLabel:'📊 مراقبة'}}/>
            <Tab.Screen name="Settings"  component={SettingsScreen} options={{tabBarLabel:'⚙ إعدادات'}}/>
          </Tab.Navigator>
        </NavigationContainer>
      </AppStateProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#040b04',
    borderTopColor: '#0a150a',
    borderTopWidth: 1,
    paddingBottom: 4,
    height: 56,
  },
  tabLabel: {
    fontFamily: 'Cairo-Bold',
    fontSize: 10,
    marginBottom: 2,
  },
});
