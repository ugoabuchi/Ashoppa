import React, { useEffect, useState, useRef} from 'react';
import {View, BackHandler, Text} from 'react-native';
import {changeLoginSession, changeProfileSession, changeGeneralSession} from '../redux/actions/Session';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StatusBar from '../components/Statusbar';
import { NavPropsType } from '../types';


    //Setting notification handler


const Settings = ({ navigation, route, login_session, profile_session, general_session, login_session_action, profile_session_action, general_session_action }: NavPropsType) => {

  const Theme = general_session.general_session.theme_mode;
  const Lang = general_session.general_session.Language;

  //set notification state variables
  const backHandlerListener = useRef<any>();




  useEffect(() => {
    //BackHandlerCallBack
   backHandlerListener.current = BackHandler.addEventListener("hardwareBackPress", () => {
      //Ask if user wants to exit the appp
      return true;
    });

 


    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backHandlerListener.current);
    };

  }, [])

  


  return (
    <>
    <StatusBar/>
      <View>
        <Text>This is the Settings Screen</Text>
      </View>

      
    </>
  );
};



const mapStateToProps = (state: any) => ({
  login_session: state.login_session,
  profile_session: state.profile_session,
  general_session: state.general_session
});

const mapDispatchToProps = (dispatch: any) => ({
  login_session_action: bindActionCreators(changeLoginSession, dispatch),
  profile_session_action: bindActionCreators(changeProfileSession, dispatch),
  general_session_action: bindActionCreators(changeGeneralSession, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);