import React from 'react';
import { StyleSheet, Image } from 'react-native';

const ImageViewer = React.forwardRef(({ placeholderImageSource, selectedImage }, ref) => {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

  return <Image ref={ref} source={imageSource} style={styles.image} />;
});

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
