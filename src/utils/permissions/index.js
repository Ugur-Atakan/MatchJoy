import {Platform} from 'react-native';
import {
  checkNotifications,
  checkMultiple,
  requestNotifications,
  check,
} from 'react-native-permissions';
import AndroidPermissions from './Android';
import iOSPermissions from './iOS';

export const requestDevicePermissionsDyn = async permission => {
  if (Platform.OS !== 'ios' || Platform.OS !== 'android') {
    return;
  }
  return console.log(await check(permission));
};

export const checkPermissionStatuses = async () => {
  if (Platform.OS !== 'ios' || Platform.OS !== 'android') {
    return;
  }

  await Promise.all([
    checkMultiple([...iOSPermissions, ...AndroidPermissions]),
    checkNotifications(),
  ]);

  checkNotifications().then(({status}) => {
    console.log('notification status', status);
  });
};

export const requestNotificationPermission = async () => {
  if (Platform.OS !== 'ios' || Platform.OS !== 'android') {
    return;
  }

  requestNotifications(['alert', 'badge', 'sound']).then(({status}) => {
    console.log('notification status', status);
  });
};
