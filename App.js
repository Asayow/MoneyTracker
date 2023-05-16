import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-naviation/active';
import Router from './src/router';

const App = () => {
    return (
        <NavigationContainer>
            <Router/>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({});