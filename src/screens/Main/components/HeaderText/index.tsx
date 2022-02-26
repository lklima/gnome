import { useAnimationState } from "moti";
import React from "react";
import { Gnome } from "../..";

import * as S from "./styles";

interface Props {
  gnome: Gnome;
  index: number;
  data: Gnome[];
  tintColor: string;
}

export default function HeaderText({ gnome, data, index, tintColor }: Props) {
  const currentGnome = data[index];
  const currentNameAnimate = useAnimationState({
    toUp: {
      translateY: 80,
    },
  });

  return (
    <S.Container>
      <S.TitleContent>
        <S.Title
          delay={1000}
          tintColor={tintColor}
          from={{ translateY: 75 }}
          animate={{ translateY: 0 }}
          transition={{ type: "timing", duration: 600 }}
          state={currentNameAnimate}
        >
          {gnome.name}
        </S.Title>
        <S.Title
          delay={1000}
          tintColor={tintColor}
          from={{ translateY: 75 }}
          animate={{ translateY: 0 }}
          transition={{ type: "timing", duration: 600 }}
        >
          Teste
        </S.Title>
      </S.TitleContent>
      <S.SubTitle
        delay={1500}
        tintColor={tintColor}
        from={{ translateY: 18 }}
        animate={{ translateY: 0 }}
        transition={{ type: "timing", duration: 600 }}
      >
        {gnome.description}
      </S.SubTitle>
    </S.Container>
  );
}
