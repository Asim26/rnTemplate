import {COLORS} from '@theme/colors';
import {FONTS} from '@theme/fonts';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {Text, TextProps, View} from 'react-native';

const {BOLD, MEDIUM, ROMAN, ITALIC} = FONTS;

interface Props extends TextProps {
  bold: boolean;
  size: number;
  capital: boolean;
  color: any;
  onPress: () => void;
  medium: boolean;
  contain: boolean;
  italic: boolean;
}

const CustomText = (props: Partial<Props>) => {
  const {
    size = 12,
    color = COLORS.WHITE,
    style,
    numberOfLines = 0,
    capital = false,
    onPress,
    medium,
    contain,
    bold,
    italic,
  } = props;
  return (
    <View style={contain && GST.FLEX}>
      <Text
        onPress={onPress}
        numberOfLines={numberOfLines}
        style={[
          {
            fontFamily: bold ? BOLD : medium ? MEDIUM : italic ? ITALIC : ROMAN,
            fontSize: RF(size),
            color,
            textTransform: capital ? 'uppercase' : 'none',
          },
          style,
        ]}>
        {props.children}
      </Text>
    </View>
  );
};

export default CustomText;
