import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  changeGeneralSession,
  changeProfileSession,
  changeLoginSession
} from '../redux/actions/Session';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isLoggedIn } from '../components/common';
import { NavPropsType } from '../types';
import { SPLASH_SCREEN_TIMEOUT } from '../constants/constants';
import { StartUpHeaderConfiguration } from '../components/common';
import StatusBar from '../components/Statusbar';

const LoadingScreen = ({ navigation, route, login_session, profile_session, general_session, login_session_action, profile_session_action, general_session_action }: NavPropsType) => {

  const [shouldLogIn, setShouldLogIn] = useState<boolean>(false);

  const Theme = general_session.general_session.theme_mode;
  const Lang = general_session.general_session.Language;

  const backHandlerListener = useRef<any>();
  const timerHandlerListener = useRef<any>();

  StartUpHeaderConfiguration({
    login_session: login_session,
    profile_session: profile_session,
    general_session: general_session,
    login_session_action: login_session_action,
    profile_session_action: profile_session_action,
    general_session_action: general_session_action,
    backScreenDispatch: () => () => {
      //noaction
    },
    setTimer: SPLASH_SCREEN_TIMEOUT,
    backHandlerRef: backHandlerListener,
    timerHandlerRef: timerHandlerListener,
    yourCallBack: () => {
      setShouldLogIn(true);
    }
  });

  isLoggedIn({
    login_session: login_session,
    mandate: true,
    yourCallBack: () => {
      timerHandlerListener.current = setTimeout(() => {

        //navigation.replace('Main', {screen: 'AfterLogin'})

      }, SPLASH_SCREEN_TIMEOUT * 1000)

    }
  });

  useEffect(() => {
    if (shouldLogIn == true && login_session.login_session == false) {
      timerHandlerListener.current = setTimeout(() => {
        //navigation.replace('LoadingScreen');
      }, SPLASH_SCREEN_TIMEOUT * 1000);
    }
  }, [shouldLogIn])




  return (
    <>
    <StatusBar/>
      <View>
        <Text>Loadind Screen done</Text>
      </View>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  login_session: state.login_session,
  profile_session: state.profile_session,
  general_session: state.general_session,
});

const mapDispatchToProps = (dispatch: any) => ({
  login_session_action: bindActionCreators(changeLoginSession, dispatch),
  profile_session_action: bindActionCreators(changeProfileSession, dispatch),
  general_session_action: bindActionCreators(changeGeneralSession, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
