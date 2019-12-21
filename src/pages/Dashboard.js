import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


class Dashboard extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texxtStyles}>This is the hasboard</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#455a64',
		flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyles: {
        color: "#ffffff"
    }
});

export default Dashboard;