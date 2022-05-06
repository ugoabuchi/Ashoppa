import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { DropdownListParamType } from "../types";
import ModalDropdown from 'react-native-modal-dropdown';

const DropdownListDropDown = ({ theme, items, defaultIndex = 0, yourCallBack }: DropdownListParamType) => {
  const [value, setValue] = useState(items[defaultIndex])
  const [listItems, setlistItems] = useState(items)
  useEffect(() => {
    setlistItems(items);
  }, [items]);

  useEffect(() => {
    setValue(defaultIndex);
  }, [defaultIndex]);

  return (
    <View style={{}}>
      <ModalDropdown
        style={{}}
        showsVerticalScrollIndicator={true}
        defaultValue={value}
        textStyle={{}}
        dropdownStyle={{}}
        dropdownTextStyle={{}}
        onSelect={(index, option) => {
          yourCallBack(index)
        }
        }
        options={listItems}
      />
    </View>
  );


}

export {
  DropdownListDropDown
};
