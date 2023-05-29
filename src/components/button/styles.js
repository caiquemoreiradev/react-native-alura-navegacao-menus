import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default ( small, inverted ) => StyleSheet.create({

  button: {
    width: 140,
    paddingVertical: small ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: inverted ? colors.dark : colors.primary,
    borderRadius: 8
  },
  
  value: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.light,
  }
});