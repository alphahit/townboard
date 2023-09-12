import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const RetweetModal = ({ isVisible, onClose, onRetweet }) => {
  return (
    <Modal isVisible={isVisible} animationIn="slideInUp" animationOut="slideOutDown">
      <View style={{ backgroundColor: 'white', padding: 10, borderRadius:5, borderWidth:2,  }}>
        <Text style={{ fontSize: 14, marginBottom: 10, color:"black", textAlign:"center"  }}>
          Are you sure you want to retweet this tweet?
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:10 }}>
          <TouchableOpacity onPress={onClose} style={{ flex: 1, marginRight: 5 }}>
            <Text style={{ fontSize: 16, color: 'red', textAlign: 'center' }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onRetweet} style={{ flex: 1, marginLeft: 5 }}>
            <Text style={{ fontSize: 16, color: 'green', textAlign: 'center' }}>Retweet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RetweetModal;
