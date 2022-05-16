import CustomAvatar from '@components/customAvatar';
import CustomText from '@components/customText';
import Input from '@components/input';
import SubmitBtn from '@components/submitBtn';
import Wrapper from '@components/wrapper';
import {setUser} from '@redux/reducers/userReducer';
import {GST} from '@theme/globalStyles';
import {LoginSchema} from '@utils/validations';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useDispatch} from 'react-redux';
import CustomLoading from '@components/customLoading';
import styles from './styles';

const initialValues = {
  email: '',
  password: '',
};

const Login = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = ({email, password}: any, {setSubmitting}: any) => {
    setTimeout(() => {
      setSubmitting(false);
      dispatch(setUser({email}));
    }, 3000);
    // const params = {
    //   email,
    //   password,
    // };
    // loginUser(params)
    //   .then((res: any) => {
    //     setSubmitting(false);
    //     dispatch(setUser(res.data.user));
    //     dispatch(setAuthToken(res.data.token));
    //   })
    //   .catch((err: any) => {
    //     setSubmitting(false);
    //     showToast('Request Failed', err?.response.data?.message, false);
    //   });
  };

  return (
    <Wrapper>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <CustomText bold size={24}>
            Login
          </CustomText>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={submitHandler}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              keyboardShouldPersistTaps={'always'}>
              <Input
                textContentType={'emailAddress'}
                value={values.email}
                autoCapitalize={'none'}
                placeholder={'Email'}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                error={touched.email && errors.email ? errors.email : ''}
              />
              <Input
                returnKeyType={'done'}
                onSubmitEditing={handleSubmit}
                value={values.password}
                placeholder={'Password'}
                textContentType={'password'}
                onChangeText={handleChange('password')}
                showPassword={showPassword}
                toggleShowPassword={toggleShowPassword}
                secureTextEntry={!showPassword}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <SubmitBtn
                title={'Login'}
                onPress={handleSubmit}
                containerStyle={GST.mt10}
              />
              <CustomLoading visible={isSubmitting} />
              <View>
                <CustomText size={10} style={styles.termsTxt}>
                  Terms and Conditions
                </CustomText>
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </View>
    </Wrapper>
  );
};

export default Login;
