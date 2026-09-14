import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    padding: 20,
  },
});

const AppBarTab = ({ children }: { children: string }) => {
  return (
    <Pressable style={styles.tab}>
      <Text color="white" fontSize="subheading" fontWeight="bold">
        {children}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
