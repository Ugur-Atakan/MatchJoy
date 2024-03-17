import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance} from '@notifee/react-native';

export const subscribeNotification = messaging().onMessage(
  async remoteMessage => {
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  },
);

export const displayNotification = async ({title, message}) => {
  await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
    sound: 'default',
  });

  await notifee.displayNotification({
    title: title,
    body: message,
    android: {
      channelId: 'default',
      pressAction: {
        id: 'default',
      },
    },
    ios: {
      sound: 'default',
    },
  });
};

export const NotifeeRequestPermission = () => {
  try {
    return notifee.requestPermission();
  } catch (error) {
    console.log(error);
  }
};

export const requestFirebasePermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const getToken = async () => {
  try {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log('==============TOKEN START======================');
    console.log(token);
    console.log('==============TOKEN END======================');
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const cancelAllNotifications = async () => {
  await notifee.cancelAllNotifications();
};

export const notificationListener = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};

export const onTokenRefreshListener = () => {
  messaging().onTokenRefresh(token => {
    console.log('A new FCM token refreshed with token:', token);
  });
};
