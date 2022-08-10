import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Dropdown from './Dropdown';

const DropDownMenu = ({label,data,selectHandler}) => {
  const [selected, setSelected] = useState(undefined)

  const onSelect = (item) => {
    setSelected(item)
    selectHandler(item)
  }

  return (
    <View style={styles.container}>
      <Dropdown label = {label} data={data} onSelect={onSelect} 
       />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e60000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    
  },
});

export default DropDownMenu