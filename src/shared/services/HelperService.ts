import Toast from 'react-native-toast-message';

export const showToast = (text1: string, text2: string, type: boolean) => {
  Toast.show({text1, text2, type: type ? 'success' : 'error'});
};

export const addLeadingZero = (val: any) => {
  return val < 10 ? `0${val}` : val;
};

export const randomNumberGenerator = () => {
  const result = [];
  while (result.length < 3) {
    const randomNum = Math.ceil(Math.random() * 10);
    if (result.indexOf(randomNum) === -1) result.push(randomNum);
  }
  return result.sort();
};
