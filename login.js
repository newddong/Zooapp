import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.contents}>
        <View style={styles.top}>
            <Image style={styles.backbutton} source={require('./asset/back_arrow.png')}/>
            <Text>로그인</Text>
        </View>
        <View style={styles.inputform}>
          <View style={styles.textinputContainer}>
            <TextInput
              style={styles.textinput}
              placeholder="아이디 또는 이메일을 입력해주세요."></TextInput>
            <TextInput
              style={styles.textinput}
              placeholder="비밀번호를 입력해주세요."></TextInput>
          </View>
          <View style={styles.autologinContainer}>
                    <View style={styles.autologin}>
                        <View style={styles.autologinButton}/><Text>자동 로그인</Text>
                    </View>
                    <View style={styles.autologin}>
                        <View style={styles.autologinButton}/><Text>아이디 저장</Text>
                    </View>
                </View>
        </View>
        <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#FFB6A5','#FFE7A4']} style={styles.loginbutton}>
            <Text style={styles.loginbuttontxt}>로그인</Text>
        </LinearGradient>
        <View style={{backgroundColor:'red',height:150,alignItems:'center',justifyContent:'center'}}>
            <View style={{backgroundColor:'green',height:100,width:"80%"}}>
                <View style={{backgroundColor:'grey',height:40}}></View>
                <Text>계정을 잊으셨나요? ID찾기 또는 비밀번호 찾기</Text>
                <Text>아직 회원이 아닌가요? 회원가입</Text>
            </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'grey',
  },
  contents: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    // backgroundColor: 'white',
  },
  top: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputform: {
    height: 140,
    // backgroundColor: 'yellow',
  },
  textinputContainer: {
    flex: 0.7,
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  textinput: {
    width: '100%',
    height: 45,
    backgroundColor: '#FAFAF8',
    marginBottom: 4,
  },
  autologinContainer: {
    flex: 0.3,
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
  autologin: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
  autologinButton: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'white',
    marginRight: 5,
  },
  backbutton: {
      width: 20,
      height:20,
      marginRight: 5
  },
  loginbutton:{
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
  },
  loginbuttontxt:{
      color:'#ffffff'
  }
});

export default Login;
