import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import theme from '@/theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgrounds.appBar,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
    </View>
  );
};

export default AppBar;
