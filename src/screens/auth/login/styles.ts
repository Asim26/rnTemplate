import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    ...GST.mt6,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: '10%',
  },
  forgotPasswordTxt: {
    textAlign: 'center',
    ...GST.mb20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsTxt: {
    textAlign: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  logoStyle: {
    marginBottom: '50%',
  },
  clickHere: {paddingLeft: RF(5)},
});

export default styles;
