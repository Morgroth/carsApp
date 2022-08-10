import React, {  useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';

const Dropdown = ({ label, data, onSelect,resetHandler }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item)=> {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item })=> (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={['Reset',...data]}
              renderItem={renderItem}
              keyExtractor={( item ) => item}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      <View style={styles.filterItem}>
        {renderDropdown()}
        <Text style={styles.buttonText}>
          {(selected) || label}
        </Text>
        <Icon style={styles.icon} type="font-awesome" name="chevron-down" />
      </View>
    </TouchableOpacity>
  );
};

export default Dropdown;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6666',
    height: 60,
    zIndex: 1,
    borderWidth:2
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Baskerville',
    fontSize:30
  },
  icon: {
    marginRight: 10,
    marginLeft:10

  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#e60000',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    backgroundColor:'#ffb3b3'
  },
  filterItem:{
    flexDirection:'row',
    width: windowWidth,
  },
  optionText:{
    fontFamily:'Baskerville'
  }
});

