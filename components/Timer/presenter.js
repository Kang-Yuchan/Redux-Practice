import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

class Timer extends Component {
	UNSAFE_componentWillReceiveProps(nextProps) {
		const currentProps = this.props;
		if (!currentProps.isPlaying && nextProps.isPlaying) {
			const timerInterval = setInterval(() => {
				currentProps.addSecond();
			}, 1000);
			this.setState({
				timerInterval
			});
		} else if (currentProps.isPlaying && !nextProps.isPlaying) {
			clearInterval(this.state.timerInterval);
		}
	}

	render() {
		console.log(this.props);
		const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer } = this.props;
		return (
			<View style={styles.container}>
				<StatusBar barStyle={'light-content'} />
				<View style={styles.topSide}>
					<Text style={styles.time}>30:00</Text>
				</View>
				<View style={styles.botSide}>
					{!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
					{isPlaying && <Button iconName="stop-circle" onPress={restartTimer} />}
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
