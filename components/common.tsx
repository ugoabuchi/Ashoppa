import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { COPYRIGHTS, REDUX_SESSION_LOCAL_STORE_KEYS } from '../constants/constants';
import { IsLoggedInType, logOutType, ReduxSession, storeLocalyType, StartUpHeaderConfigType } from '../types';
import { saveLocalData, retrieveLocalData, mergeLocalData } from "../components/localdata";


//new function

export const getBearer = (): string => {
  let data = COPYRIGHTS.appSecureInstallationKey + "blark" + (new Date().toUTCString());
  return data;
}

export const storeLocally = async (session: ReduxSession, localStoreSettings: storeLocalyType): Promise<void> => {
  if (localStoreSettings.allow == true) {
    //permission granted to store locally, which enables the app resume user settings and configurations on the device,
    //default for this is set in the initial state of general_session in session part inside reducer's folder

    //check if data already exist locally so we know if to merge or add new data
    await retrieveLocalData({
      key: localStoreSettings.key,

      yourCallBack: async (error, result): Promise<void> => {
        if (result != null) {
          //data exist, so we merge
          if (localStoreSettings.key == REDUX_SESSION_LOCAL_STORE_KEYS.login_session)
            await mergeLocalData({ key: localStoreSettings.key, valueinJson: { login_session: session } });
          else if (localStoreSettings.key == REDUX_SESSION_LOCAL_STORE_KEYS.profile_session)
            await mergeLocalData({ key: localStoreSettings.key, valueinJson: { profile_session: session } });
          else if (localStoreSettings.key == REDUX_SESSION_LOCAL_STORE_KEYS.general_session) {
            //making sure that local general session attr initialappload remain constantly false when updated
            const newGeneralSession = {
              ...session,
              initialAppLoad: false
            }
            await mergeLocalData({ key: localStoreSettings.key, valueinJson: { general_session: newGeneralSession } })
          };
        }
        else {
          //data does not exist, so we insert
          if (localStoreSettings.key == REDUX_SESSION_LOCAL_STORE_KEYS.login_session)
            await saveLocalData({ key: localStoreSettings.key, valueinJson: { login_session: session } });
          else if (localStoreSettings.key == REDUX_SESSION_LOCAL_STORE_KEYS.profile_session)
            await saveLocalData({ key: localStoreSettings.key, valueinJson: { profile_session: session } });
          else if (localStoreSettings.key == REDUX_SESSION_LOCAL_STORE_KEYS.general_session) {
            //making sure that local general session attr initialappload remain constantly false when updated
            const newGeneralSession = {
              ...session,
              initialAppLoad: false
            }
            await saveLocalData({ key: localStoreSettings.key, valueinJson: { general_session: newGeneralSession } })
          }
        }
      }
    });

  }
}

export const isLoggedIn = ({ login_session, mandate, yourCallBack = null }: IsLoggedInType) => useEffect(() => {

  if (login_session.login_session == mandate) {
    //if callback is not null  
    if (yourCallBack != null)
      yourCallBack();


  }
}, [login_session.login_session]);


export const StartUpHeaderConfiguration = ({ login_session, profile_session, general_session, login_session_action, profile_session_action, general_session_action, notifyBeforeBackHandler = false, backScreenDispatch, yourCallBack = null, setTimer = -1, backHandlerRef, timerHandlerRef }: StartUpHeaderConfigType) => useEffect(() => {


  //onBackHandler
 backHandlerRef.current = BackHandler.addEventListener('hardwareBackPress', () => {
    backScreenDispatch();
    return true
  })


  //setTimer as params is only applicable to StartUpSplash Screen
  if (setTimer != -1 && setTimer > 0) {
    timerHandlerRef.current = setTimeout(() => {


      //check if its initial app load
      if (general_session.general_session.initialAppLoad == true) {
        //update temp state sessions when results are available in local for all REDUX_SESSION_LOCAL_STORE_KEYS

        //general state
        retrieveLocalData({
          key: REDUX_SESSION_LOCAL_STORE_KEYS.general_session,
          yourCallBack: (error, result) => {
            if (result != null) {
              //making sure that initialappload remains false in local_session of general
              general_session_action(result.general_session, {
                key: REDUX_SESSION_LOCAL_STORE_KEYS.general_session,
                allow: false
              })

            }


            //next state
            //profile state
            retrieveLocalData({
              key: REDUX_SESSION_LOCAL_STORE_KEYS.profile_session,
              yourCallBack: (error, result) => {
                if (result != null) {
                  profile_session_action(result.profile_session, {
                    key: REDUX_SESSION_LOCAL_STORE_KEYS.profile_session,
                    allow: false
                  })

                }

                //next state
                //login state
                retrieveLocalData({
                  key: REDUX_SESSION_LOCAL_STORE_KEYS.login_session,
                  yourCallBack: (error, result) => {

                    if (result != null) {
                      login_session_action(result.login_session, {
                        key: REDUX_SESSION_LOCAL_STORE_KEYS.login_session,
                        allow: false
                      })

                    }

                    if (yourCallBack != null)
                      yourCallBack();



                  }
                });


              }
            });



          }
        });


      }
      else {
        if (yourCallBack != null)
          yourCallBack();
      }


    }, setTimer * 1000)
  }

  return () => {
    clearTimeout(timerHandlerRef.current);
    BackHandler.removeEventListener('hardwareBackPress', backHandlerRef.current);
  };

}, []);


export const logOut = ({ login_session, general_session, login_session_action }: logOutType) => {


  if (login_session.login_session == true) {

    //make login state false
    login_session_action(
      false,
      {
        allow: general_session.general_session.storeLocalData,
        key: REDUX_SESSION_LOCAL_STORE_KEYS.login_session
      }
    )

  }


}