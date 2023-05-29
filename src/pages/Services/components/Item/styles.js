import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  
  info: {
    padding: 24
  },

  name: {
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8
  },

  calculation: {
    color: colors.dark,
    fontSize: 14,
    marginVertical: 8,
  },

  price: {
    color: colors.purple,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },

  divider: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },

  container: {

    flexDirection: 'row',
    width: 180
  },

  moviePoster: {

    width: 120,
    height: 200,

    borderRadius: 8,
    marginRight: 16
  },  

  cart: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  value: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },

  description: {
    color: colors.text,
    fontSize: 14,
    marginBottom: 16,
  },

  detailTitle: {
    color: colors.text,
    fontSize: 14,
    marginBottom: 8,
    marginRight: 8
  },

  quantity: {
    width: 42,
  }
});