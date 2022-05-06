import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import Shop from './Shop';
import { connect } from 'react-redux';
import { NavPropsType } from '../types';

const AfterLoginTab = ({ navigation, profile_session, general_session }: NavPropsType) => {
  
    
    const Tab = createBottomTabNavigator();
    const Theme = general_session.general_session.theme_mode;


    return (
      <Tab.Navigator
        initialRouteName="Shop"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any = "", iconSize = 0;
  
            if (route.name === 'Shop') {
              iconName = focused ? 'store-alt' : 'store';
              iconSize = size ? Theme.GenralComponentColors.TABICONBIG : Theme.GenralComponentColors.TABICONSMALL ;
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart-arrow-down' : 'shopping-cart';
              iconSize = size ? Theme.GenralComponentColors.TABICONBIG : Theme.GenralComponentColors.TABICONSMALL ;
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'user-alt' : 'user';
              iconSize = size ? Theme.GenralComponentColors.TABICONBIG : Theme.GenralComponentColors.TABICONSMALL ;
            }
            else {
              iconName = focused ? 'wrench' : 'cog';
              iconSize = size ? Theme.GenralComponentColors.TABICONBIG : Theme.GenralComponentColors.TABICONSMALL ;
            }


            return <FontAwesome name={iconName} size={iconSize} color={Theme.GenralComponentColors.PRIMARY} />;
          },
        })}
  
  
  
      >
        <Tab.Screen name="Shop" component={Shop} options={{headerShown: false}}/>
        {
            general_session.general_session.CartCount > 0 
            ?
            (
                <Tab.Screen name="Cart" component={null} options={{
                    headerShown: false,
                    tabBarBadge: general_session.general_session.CartCount > 10 ? "10+" : general_session.general_session.CartCount
                  }}/>
            )
            : 
            (
                <Tab.Screen name="Cart" component={null} options={{
                    headerShown: false
                  }}/>
            )
        }
        <Tab.Screen name="Profile" component={null} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={null} options={{headerShown: false}}/>
      </Tab.Navigator>
    );
  
  
  };

const mapStateToProps = (state: any) => ({
    profile_session: state.profile_session,
    general_session: state.general_session,
});


export default connect(mapStateToProps)(AfterLoginTab)