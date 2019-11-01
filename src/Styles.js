import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonBook: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#cccccc',
    alignContent: 'center',
    paddingVertical: 7,
  },
  header: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginRight: 10,
  },
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    marginLeft: 0,
    padding: 0,
    width: 250,
  },
  imageTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  ratingContainer: {
    backgroundColor: '#00076d',
    padding: 5,
    borderRadius: 8,
    flexDirection: 'row',
  },
  booked: {
    paddingVertical: 8,
    bottom: 0,
    marginTop: 'auto',
    backgroundColor: 'rgba(134, 65, 244, 0.2)',
  },
});

export default styles;
