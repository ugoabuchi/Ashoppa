import React, { useEffect, useRef } from 'react';
import {
  BackHandler,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { NavPropsType } from '../types';
import { SPLASH_SCREEN_TIMEOUT } from '../constants/constants';
import StatusBar from '../components/Statusbar';

const OnBoarding1 = ({ navigation, general_session }: NavPropsType) => {

  
  const Theme = general_session.general_session.theme_mode;

  const backHandlerListener = useRef<any>();
  const timerHandlerListener = useRef<any>();

  useEffect(() => {



    backHandlerListener.current = BackHandler.addEventListener("hardwareBackPress", () => {
      //no action
      return true;
    });

   timerHandlerListener.current = setTimeout(() => {
      //navigation.replace('SplashScreen');
    }, SPLASH_SCREEN_TIMEOUT * 1000)

    return () => {
      clearTimeout(timerHandlerListener.current);
      BackHandler.removeEventListener('hardwareBackPress', backHandlerListener.current);
    };
  }, [])

  return (
    <>
    <StatusBar/>
      <View>
        <Text>Onboarding1 is done</Text>
      </View>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  general_session: state.general_session
});


export default connect(mapStateToProps)(OnBoarding1);
