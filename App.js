import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './app.css';

export default function App() {
  return (
    <View style={styles.container}>
	  <div id="login_container">
		<div id="login_form_container">
			<form id="login_form" className="login-form">
				<label>
					<input type="text" placeholder="Username" name="username" id="username_input" />
				</label>
				<label>
					<input type="password" placeholder="Password" name="password" id="password_input" />
				</label><br/>
				<button type="submit"> LOG IN </button>
			</form>
		</div>
	  </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_form : {
	  font: '4em',
  }
  
});


console.log('this is working');