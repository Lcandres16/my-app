import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Button({ label, theme, onPress }) {
  const containerStyles = [
    styles.buttonContainer,
    theme === 'primary' && styles.primaryContainer,
  ];

  return (
    <View style={containerStyles}>
      <Pressable style={styles.button} onPress={onPress}>
        {theme === 'primary' && <FontAwesome name="picture-o" size={18} color="#25292e" />}
        <Text style={[styles.buttonLabel, { color: theme === 'primary' ? '#25292e' : '#000000' }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 10,
  },
  primaryContainer: {
    borderWidth: 4,
    borderColor: '#ffd33d',
    backgroundColor: '#fff',
    borderRadius: 18,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 16,
    color: '#000000',
  },
});
