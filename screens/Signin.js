import React, {useState} from 'react';

import {
 
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import s from '../styling';
import auth from '@react-native-firebase/auth';

 import database from '@react-native-firebase/database';

const reference = database().ref('/users/');

const style = StyleSheet.create(s);

export default function Signin() {
  const [Obj, setObj] = useState([]);
  const signUp = () => {
    console.log(Obj);
    auth()
      .createUserWithEmailAndPassword(Obj.email, Obj.password)
      .then(user => {
        console.log('User account created & signed in!');
        Obj.uid = user.user.uid;
        reference
          .child(Obj.uid)
          .set(Obj)
          .then(() => {
            console.log('Data Saved in Database Succesfully');
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
}


    return (
      <>
        <View style={[s.main, s.bgWhite]}>
          <View style={[s.flexCenter, {flex: 3}]}>
            <View style={[s.p1]}>
              <Text style={s.fs1}>Sign In</Text>
            </View>
            <View>
              <View style={[s.p1]}>
                <TextInput
                  onChangeText={(e) => setObj({ ...Obj, name: e })}
                  style={[s.input]}
                  placeholder="name"
                />
              </View>
              <View style={[s.p1]}>
                <TextInput
                  onChangeText={(e) => setObj({...Obj, email:e})}
                  style={[s.input]}
                  placeholder="email"
                />
              </View>
              <View style={[s.p1]}>
                <TextInput
                  onChangeText={(e) => setObj({...Obj, password:e})}
                  style={[s.input]}
                  placeholder="password"
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={signUp} style={[s.btn]}>
                <Text style={[s.txtWhite, s.fs5]}>SignIn</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

