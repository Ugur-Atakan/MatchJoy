import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

const NoUserComponent = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t('No more user')}</Text>
      <Text>{t('Check back later')}</Text>
    </View>
  );

}
export default NoUserComponent;