import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,View,Image } from 'react-native';

const App = () => {
  return (
    
      <ScrollView style={styles.scrollView} horizontal>
        {/* <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text> */}
		  <Image
								source={{
									uri: 'https://lh3.googleusercontent.com/proxy/D3qDtDq27hbgp5f2_hWOnWEks2PPJuT7jQ1AR3BZERROJxUeyj7DeBvPbxrQQE3AEDxJMKXSyMaFuBqByqzlG2mEZGIXtiEDS3xayO81RGmhoLbuK0g',
								}}
								style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'blue'}}
							/>
		  <View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'red'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'blue'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'yellow'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'red'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
					<View style={{width: 30, height: 30, borderRadius: 30, backgroundColor: 'black'}}></View>
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App;