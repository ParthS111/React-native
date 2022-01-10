import React, { useState } from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Color } from '../utils/color';

const CustomSwitch = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View>
      <View
        style={Styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={[Styles.switchBackground, {
            backgroundColor: getSelectionMode == 1 ? Color.BORDER_COLOR : Color.UNSELECT,
            borderRadius: getRoundCorner ? 25 : 0,
          }]}>
          <Text
            style={{
              color: getSelectionMode == 1 ? Color.SELECTTEXT : selectionColor,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={[Styles.switchBackground, {
            backgroundColor: getSelectionMode == 2 ? Color.BORDER_COLOR : Color.UNSELECT,
            borderRadius: getRoundCorner ? 25 : 0,
          }]}>
          <Text
            style={{
              color: getSelectionMode == 2 ? Color.SELECTTEXT : selectionColor,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 44,
    width: 215,
    backgroundColor: '#121212',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
  },
  switchBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})
export default CustomSwitch;