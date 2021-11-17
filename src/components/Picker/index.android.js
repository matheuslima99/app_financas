import React from 'react';
import {PickerView} from './styles';
import {Picker as RNPickerSelect} from '@react-native-picker/picker';

function Picker({type, onChange}) {
  return (
    <PickerView>
      <RNPickerSelect
        style={{width: '100%', color: '#222'}}
        selectedValue={type}
        onValueChange={itemValue => {
          onChange(itemValue);
        }}>
        <RNPickerSelect.Item label="Receita" value="receita" />
        <RNPickerSelect.Item label="Despesa" value="despesa" />
      </RNPickerSelect>
    </PickerView>
  );
}

export default Picker;
