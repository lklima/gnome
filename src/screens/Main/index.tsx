import React, { useEffect, useState } from "react";
import BottomBar from "./components/BottomBar";
import { GestureDetector, Directions, Gesture } from "react-native-gesture-handler";
import { GestureDetector as GestDetec } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import * as S from "./styles";

import flameGnome from "../../assets/flame.png";

import BottomContent from "./components/BottomContent";

export default function Main() {
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsCounting(true), 1600);
  }, []);

  const flingGestureLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd((e) => console.log("I was swiped left!"));

  const flingGestureRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd((e) => console.log("I was swiped right!"));

  return (
    <S.Container>
      <GestureDetector gesture={flingGestureLeft}>
        <GestDetec gesture={flingGestureRight}>
          <S.Content>
            <S.StarContent
              delay={2000}
              from={{ scale: 0 }}
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
                transition={{ type: "timing", duration: 300 }}
              >
                9.1
              </S.StarText>
            </S.StarContent>
            <S.Avatar
              source={flameGnome}
              delay={2000}
              from={{ translateX: 400, opacity: 0 }}
              animate={{ translateX: 30, opacity: 1 }}
              transition={{ type: "spring" }}
            />
            <BottomContent isCounting={isCounting} wins={93} />
          </S.Content>
        </GestDetec>
      </GestureDetector>
      <BottomBar />
    </S.Container>
  );
}
