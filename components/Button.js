import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ label, theme }) {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (theme === 'primary') {
        buttonStyles.push(styles.primaryButton);
        textStyles.push(styles.primaryText);
    }

    return ( <
        TouchableOpacity style = { buttonStyles } >
        <
        Text style = { textStyles } > { label } < /Text> < /
        TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    primaryButton: {
        backgroundColor: '#2ecc71', // Cambia el color para el tema 'primary'
    },
    primaryText: {
        color: '#fff',
    },
});