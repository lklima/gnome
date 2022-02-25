import React, { useEffect, useState } from "react";
import BottomBar from "./components/BottomBar";
import { GestureDetector, Directions, Gesture } from "react-native-gesture-handler";
import { GestureDetector as GestDetec } from "react-native-gesture-handler";
import { CountUp } from "use-count-up";

import * as S from "./styles";

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
            <S.Bottom>
              <S.RateTitleText
                delay={2000}
                from={{ translateY: 20 }}
                animate={{ translateY: 0 }}
                transition={{ type: "timing", duration: 600 }}
              >
                Win rate
              </S.RateTitleText>
              <S.RateTitleView />
              <S.RateValueText
                delay={1700}
                from={{ translateY: 55 }}
                animate={{ translateY: 0 }}
                transition={{ type: "timing", duration: 600 }}
              >
                <CountUp isCounting={isCounting} end={90} duration={3.2} />%
              </S.RateValueText>
              <S.RateValueView />
            </S.Bottom>
          </S.Content>
        </GestDetec>
      </GestureDetector>
      <BottomBar />
    </S.Container>
  );
}
