'use strict';
//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Image,
  View
 } from 'react-native';

// create a component
class SelectionLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:-1,
      selected:"",
    };
  }

  render() {
    let selectItems = [];
    this.props.data.forEach((element, index) => {
      let selectStyle = {};
      let selectTxtStyle = {};
      if(index==this.state.index){
        selectStyle = {borderColor: "#f00", borderWidth:4};
        Object.assign(selectStyle, this.props.selectedStyle);
        selectTxtStyle = {color:'#ccc'}
        Object.assign(selectTxtStyle, this.props.selectTxtStyle);
      }
      let that = this;
      selectItems.push (
        <TouchableOpacity 
          style={[styles.row, this.props.rowStyle, selectStyle]}
          onPress={()=>{
                      this.props.onSelect(element.txt, element.value);
                      this.setState({
                        index:index
                      })
                      }}>
          {element.img?
            <View style={[styles.imgContainer,this.props.imgContainer]}>
              <Image 
                style={[styles.img,this.props.imageStyle]} 
                source={element.img}
                resizeMode="contain"
                />
            </View>
          :null}
          {element.txt?
            <Text style={[styles.txt, this.props.txtStyle, selectTxtStyle]}>
              {element.txt}
            </Text>
            :null
          }
          
        </TouchableOpacity>
      )  
    });
    return (
      <View style={[styles.view, this.props.style]} >
        {selectItems}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  view:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row:{
    flexDirection: 'row',
    borderColor:'#b3f',
    justifyContent: 'center',
    borderWidth:2,
    borderRadius: 40,
    marginBottom: 30,
    alignItems: 'center'
  },
  txt:{
    margin: 10,
    marginLeft: 40,
    marginRight:40,
    color:'#fff',
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
  },
  img:{
   width:35,
  },
  imgContainer:{
    borderRadius:40,
    width:70,
    height: 70,
    backgroundColor: "#9a8",
    alignItems:"center",
    justifyContent: 'center'
  }
});

// module.exports = SelectionLabel;
export { SelectionLabel };