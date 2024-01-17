import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = { uri: 'https://i.imgur.com/8EK4Wd9.png' };

export default function App() {
    const pickImageAsync = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            console.log(result);
            // Aquí puedes manejar la lógica para la imagen seleccionada
        } else {
            alert('No seleccionaste ninguna imagen.');
        }
    };

    return ( <
        View style = { styles.container } >
        <
        View style = { styles.imageContainer } >
        <
        ImageViewer placeholderImageSource = { PlaceholderImage }
        /> < /
        View > <
        View style = { styles.footerContainer } >
        <
        Button theme = "primary"
        label = "Choose a photo"
        onPress = { pickImageAsync }
        /> <
        Button label = "Use this photo" / >
        <
        /View> <
        StatusBar style = "auto" / >
        <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});