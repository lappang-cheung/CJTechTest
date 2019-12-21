//  Required packages
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

// Simple loader for waiting data to load
class Loader extends Component {

    // One big circle for loading
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator 
                    color="#ffffff"
                    size="large"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 99,
        justifyContent: "center"
    }
})

export default Loader;