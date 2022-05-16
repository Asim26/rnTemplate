import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    ...GST.MAINT_CONTAINER,
    justifyContent: 'center',
  },
  heading: {
    lineHeight: RF(50),
  },
  desc: {
    ...GST.mt8,
    width: '90%',
    lineHeight: RF(20),
  },
});

export default styles;
