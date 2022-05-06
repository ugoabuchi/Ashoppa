import React, { useState, useEffect } from "react";
import { Image, ImageSourcePropType } from "react-native";


const LogoWithNoCardView = ({ }) => {
  const [imageSrc, setImageSrc] = useState<ImageSourcePropType>(null);
  useEffect(() => {

    async function loadStaticImages() {
      setImageSrc(require('../assets/resources/images/logo/Logo_No_Card_View.png'));
    }

    loadStaticImages();

  }, []);
  return (
    <Image
      source={imageSrc}
      style={{ width: '100%', height: '100%' }}
      resizeMode='contain'
    />
  );


}


const LogoWithCardView = ({ }) => {
  const [imageSrc, setImageSrc] = useState<ImageSourcePropType>(null);
  useEffect(() => {

    async function loadStaticImages() {
      setImageSrc(require('../assets/resources/images/logo/Logo_With_Card_View.png'));
    }

    loadStaticImages();

  }, []);
  return (
    <Image
      source={imageSrc}
      style={{ width: '100%', height: '100%' }}
      resizeMode='contain'
    />
  );


}

const SecLogoWithCardView = ({ }) => {
  const [imageSrc, setImageSrc] = useState<ImageSourcePropType>(null);
  useEffect(() => {

    async function loadStaticImages() {
      setImageSrc(require('../assets/resources/images/logo/Sec_Logo_With_Card_View.png'));
    }

    loadStaticImages();

  }, []);
  return (
    <Image
      source={imageSrc}
      style={{ width: '100%', height: '100%' }}
      resizeMode='contain'
    />
  );


}


export {LogoWithNoCardView, LogoWithCardView, SecLogoWithCardView };
