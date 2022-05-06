import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, } from 'react-native';
import { changeLoginSession, changeProfileSession, changeGeneralSession } from '../redux/actions/Session';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Drawer} from 'react-native-paper';
import { NavPropsType } from '../types';

const MenuDrawer = ({ navigation, login_session, profile_session, general_session, login_session_action, profile_session_action, general_session_action }: NavPropsType) => {

 
    return (
        <View>
            <DrawerContentScrollView>
               {//W can create a new drawer section here, create chidren view independently
                }
            </DrawerContentScrollView>
            <Drawer.Section>
                {//We can call a drawer item here
                }
                
            </Drawer.Section>
        </View>

    );
}


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


export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)