import { RouteProp } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export const getTabBarVisibility = (route: RouteProp<any, any>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'ListMain';

  const hideOnScreens = [
    'details',
    'accountInfo/index',
    'vehicles/index',
    'emergencyContacts/EmergencyContactsScreen/index',
    'emergencyContacts/AddEmergencyContactScreen/index',
    'reviews/ReviewsScreen/index',
    'reviews/AddReviewScreen/index',
    'privacyAndSupport/index',
    'helpAndSupport/index',

    // Add other screens where you want to hide the tab bar
  ];

  if (hideOnScreens.includes(routeName)) {
    return 'none';
  }
  return 'flex';
};
