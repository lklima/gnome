import React, { useEffect, useState } from "react";
import { GestureDetector, Directions, Gesture } from "react-native-gesture-handler";
import { ImageSourcePropType, StatusBar } from "react-native";
import { useDynamicAnimation } from "moti";
import { useSharedValue, useAnimatedStyle } from "react-native-reanimated";

import * as S from "./styles";

import BottomContent from "./components/BottomContent";
import BottomBar from "./components/BottomBar";
import HeaderText from "./components/HeaderText";
import Header from "./components/Header";
import Star from "./components/Star";
import Avatar from "./components/Avatar";

import data from "../../data";

export interface Gnome {
  name: string;
  description: string;
  wins: number;
  stars: number;
  avatar: ImageSourcePropType;
  color: string;
  tintBlack?: boolean;
  offsetX?: number;
  offsetY?: number;
  height?: number;
}

export default function Main() {
  const [gnome, setGnome] = useState<Gnome>(data[0]);
  const [index, setIndex] = useState(0);
  const [firstSlide, setFisrtSlide] = useState(false);
  const [tintColor, setTintColor] = useState("black");
  const backgroundColor = useSharedValue(gnome.color);

  const transition = useDynamicAnimation();
  const animationContainer = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  useEffect(() => {
    setTimeout(() => {
      setTintColor("black");
    }, 800);
  }, []);

  useEffect(() => {
    if (firstSlide) {
      transition.animateTo({ scale: [3, 0] });
      setTimeout(() => (backgroundColor.value = gnome.color), 500);
      setTimeout(() => setTintColor(gnome.tintBlack ? "black" : "white"), 200);
    }
  }, [gnome, firstSlide]);

  function handleSlide() {
    if (!firstSlide) setFisrtSlide(true);
    setIndex((prev) => {
      if (prev < data.length - 1) {
        setGnome(data[prev + 1]);
        return prev + 1;
      }
      setGnome(data[0]);
      return 0;
    });
  }

  const flingGestureLeft = Gesture.Fling().direction(Directions.LEFT).onEnd(handleSlide);

  return (
    <S.Container style={animationContainer}>
      <StatusBar barStyle={gnome.tintBlack ? "dark-content" : "light-content"} />
      <GestureDetector gesture={flingGestureLeft}>
        <S.Content>
          <S.Transition
            from={{ scale: 0 }}
            state={transition}
            transition={{ type: "timing", duration: 500 }}
            tintColor={gnome.color}
          />
          <Header tintColor={tintColor} />
          <HeaderText data={data} index={index} tintColor={tintColor} />
          <Star stars={gnome.stars} />
          <Avatar data={data} index={index} />
          <BottomContent currentWins={gnome.wins} tintColor={tintColor} />
        </S.Content>
      </GestureDetector>
      <BottomBar tintColor={tintColor} />
    </S.Container>
  );
}
