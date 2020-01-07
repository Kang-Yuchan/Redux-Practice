import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button/index';

class Timer extends React.Component {
	render() {
		const { isPlaying, elapsedTime, timerDuration } = this.props;
		return (
			<View style={styles.container}>
				<StatusBar barStyle={'light-content'} />
				<View style={styles.topSide}>
					<Text style={styles.time}>30:00</Text>
				</View>
				<View style={styles.botSide}>
					{!isPlaying ? <Button iconName="play-circle" onPress={() => alert('This works!')} /> : null}
					{isPlaying ? <Button iconName="stop-circle" onPress={() => alert('This works!')} /> : null}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center'
	},
	topSide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	botSide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	time: {
		color: 'white',
		fontSize: 120,
		fontWeight: '100'
	}
});

export default Timer;