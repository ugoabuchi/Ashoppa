import React from "react"
import { Modal } from "react-native-paper"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { ModalPopUp } from "../types"

export const ModalPopUpBox = ({theme, language, title = null, showModal = false, content, enableContentScrollView = true, showConfirm = false, confirmText = null, confirmAction = ()=>{}, isClosable = true, closeAction} : ModalPopUp) => {

    return <Modal
    visible ={showModal}

    dismissable = {false}

    style={{}}
    children={
      <View style={{}}>


        {/* Header */}
        <View style={{}}>

          <View style={{}}>

        <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{}}>{title == null || title == "" ? language.GENERAL.DEFAULT_MODAL_TITLE : title}</Text>
          </View>

        {
          showConfirm == true

          ?

          (
            <>

              <TouchableOpacity style={isClosable == true ? {} : {}}
              
              onPress={() => confirmAction()}
              >
                <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{}}>{confirmText == null ? language.GENERAL.DEFAULT_MODAL_CORNFIRM_TEXT : confirmText}</Text>

              </TouchableOpacity>

              <TouchableOpacity style={[{}, {display: isClosable == true ? 'flex' : 'none'}]}
              
              onPress={() => closeAction()}
              >

              <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{}}>{language.GENERAL.DEFAULT_MODAL_CLOSE_TEXT}</Text>
              </TouchableOpacity>
            
            </>
          )

          :

          (
            <>

              <TouchableOpacity style={[{}, {display: isClosable == true ? 'flex' : 'none'}]}
              
              onPress={() => closeAction()}
              >

              <Text numberOfLines={1} adjustsFontSizeToFit={true} style={{}}>{language.GENERAL.DEFAULT_MODAL_CLOSE_TEXT}</Text>
              </TouchableOpacity>
            
            </>
          )
        }
          
        </View>


        {/* Body */}
        <View style={{}}>
          {
            enableContentScrollView == true

            ?

            (
              <ScrollView>
              {content}
              </ScrollView>
            )

            :

            content

          }
        </View>

      </View>
    }
    />
}