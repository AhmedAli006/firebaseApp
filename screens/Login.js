import React from 'react';

import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import s from '../styling';
const style = StyleSheet.create(s);
export default function Login() {
  return (
    <>
      <View style={[s.main, s.bgWhite]}>
        <View style={[s.flexCenter,{flex:3}]}>
          <View style={[s.p1]}>
            <Text style={s.fs1}>Log In</Text>
          </View>
          <View>
            
            <View style={[s.p1]}>
              <TextInput style={[s.input]} placeholder="email" />
            </View>
            <View style={[s.p1]}>
              <TextInput
                style={[s.input]}
                placeholder="password"
                secureTextEntry={true}
              />
            </View>

          </View>
          <View>
              <TouchableOpacity style={[s.btn]}><Text style={[s.txtWhite,s.fs5]}>Login</Text></TouchableOpacity>

          </View>
        </View>
      </View>
    </>
  );
}
