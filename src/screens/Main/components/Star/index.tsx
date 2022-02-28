import React, { useEffect } from "react";
import { Fontisto } from "@expo/vector-icons";
import { useAnimationState } from "moti";

import * as S from "./styles";

export interface Props {
  stars: number;
}

export default function Star({ stars }: Props) {
  const contentAnimate = useAnimationState({
    expand: {
      height: 80,
    },
  });

  useEffect(() => {
    setTimeout(() => contentAnimate.transitionTo("expand"), 500);
  }, []);

  return (
    <S.StarContent
      delay={2000}
      from={{ scale: 0, height: 60 }}
      animate={{ scale: 1 }}
      transition={{ type: "timing", duration: 200 }}
      state={contentAnimate}
    >
      <Fontisto name="star" size={22} />
      <S.StarText
        delay={2200}
        from={{ opacity: 0, top: 20 }}
        animate={{ opacity: 1, top: 45 }}
        transition={{ type: "timing", duration: 500 }}
      >
        {stars}
      </S.StarText>
    </S.StarContent>
  );
}
