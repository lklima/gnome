import React from "react";
import { CountUp } from "use-count-up";

import * as S from "./styles";

interface Props {
  isCounting: boolean;
  wins: number;
}

export default function BottomContent({ isCounting, wins }: Props) {
  return (
    <S.Container>
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
        <CountUp isCounting={isCounting} end={wins} duration={3.2} />%
      </S.RateValueText>
      <S.RateValueView />
    </S.Container>
  );
}
