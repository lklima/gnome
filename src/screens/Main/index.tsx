import React, { useEffect, useState } from "react";
import { GestureDetector, Directions, Gesture } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { ImageSourcePropType, StatusBar } from "react-native";
import { useDynamicAnimation } from "moti";
import Animated, { useSharedValue, useAnimatedStyle } from "react-native-reanimated";

import * as S from "./styles";

import BottomContent from "./components/BottomContent";
import BottomBar from "./components/BottomBar";
import HeaderText from "./components/HeaderText";
import Header from "./components/Header";

import data from "../../data";

export interface Gnome {
  name: string;
  description: string;
  wins: number;
  stars: number;
  avatar: ImageSourcePropType;
  color: string;
  tintBlack?: boolean;
}

export default function Main() {
  const [gnome, setGnome] = useState<Gnome>(data[0]);
  const [index, setIndex] = useState(0);
  const [firstSlide, setFisrtSlide] = useState(false);
  const backgroundColor = useSharedValue(gnome.color);

  const transition = useDynamicAnimation();
  const animationContainer = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const tintColor = gnome.tintBlack ? "black" : "white";

  useEffect(() => {
    if (firstSlide) {
      transition.animateTo({
        scale: [3, 0],
      });

      setTimeout(() => {
        backgroundColor.value = gnome.color;
      }, 500);
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
    <Animated.View style={[{ flex: 1 }, animationContainer]}>
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
          <HeaderText gnome={gnome} data={data} index={index} tintColor={tintColor} />
          <S.StarContent
            delay={2000}
            from={{ scale: 0, height: 60 }}
            animate={{
              scale: 1,
              height: [
                { value: 60, type: "timing", delay: 0 },
                { value: 80, type: "timing", delay: 400 },
              ],
            }}
            transition={{ type: "timing", duration: 200 }}
          >
            <Fontisto name="star" size={22} />
            <S.StarText
              delay={2200}
              from={{ opacity: 0, top: 20 }}
              animate={{ opacity: 1, top: 45 }}
              transition={{ type: "timing", duration: 500 }}
            >
              {gnome.stars}
            </S.StarText>
          </S.StarContent>
          <S.Avatar
            source={gnome.avatar}
            delay={2000}
            from={{ translateX: 400, opacity: 0 }}
            animate={{
              translateX: 40,
              opacity: 1,
              scale: [
                { value: 0.8, delay: 0 },
                { value: 1, type: "timing", duration: 3000, delay: 1000 },
              ],
            }}
          />
          <BottomContent currentWins={gnome.wins} tintColor={tintColor} />
        </S.Content>
      </GestureDetector>
      <BottomBar tintColor={tintColor} />
    </Animated.View>
  );
}
