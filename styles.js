import * as React from 'react';
import {StyleSheet} from "react-native";


export default function styles() {
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#CDC8B1',
            alignItems: 'center',
            justifyContent: 'center',
        },
        movieListItem: {
            width: 900,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2,
            backgroundColor: '#EE7621',
            resizeMode: 'cover'
        },
        tinyLogo: {
            width: '90%',
            height: 300,
            resizeMode: 'contain'
        },
        musicMenuItem: {
            width: 900,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2,
            backgroundColor: '#8B7355',
            resizeMode: 'cover'
        },
        text: {
            flex: 1,
            fontSize: 24,
            color: 'white',
        },
        breakfastMenuItem: {
            width: 900,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2,
            backgroundColor: '#EE7621',
            resizeMode: 'cover'
        },
        dinnerMenuItems: {
            width: 900,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2,
            backgroundColor: '#8B7355',
            resizeMode: 'cover'
        },
    });
}
