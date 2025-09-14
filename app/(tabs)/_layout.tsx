import { Tabs } from 'expo-router';
import useColorScheme from '@/hooks/useColorScheme';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/theme';
import { getTabBarVisibility } from '@/helpers/tabBarHelpers';

export default function TabLayout() {
  const { isDark } = useColorScheme();
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: { display: getTabBarVisibility(route) },
        headerShown: false,
        tabBarInactiveTintColor: colors.gray,
        tabBarInactiveBackgroundColor: isDark ? colors.blackGray : colors.white,
        tabBarActiveTintColor: colors.lightPurple,
        tabBarActiveBackgroundColor: isDark ? colors.blackGray : colors.white,

        // Other global tab bar options...
      })}
      // screenOptions={{
      // headerShown: false,
      // tabBarInactiveTintColor: colors.gray,
      // tabBarInactiveBackgroundColor: isDark ? colors.blackGray : colors.white,
      // tabBarActiveTintColor: colors.lightPurple,
      // tabBarActiveBackgroundColor: isDark ? colors.blackGray : colors.white,

      // }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <AntDesign name="profile" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
