import React from "react";
import { CountUp } from "use-count-up";

import * as S from "./styles";

interface Props {
  isCounting: boolean;
  wins: number;
  tintColor: string;
}

export default function BottomContent({ isCounting, wins, tintColor }: Props) {
  return (
    <S.Container>
      <S.RateTitleView
        delay={2000}
        from={{ height: 0 }}
        animate={{ height: 20 }}
        transition={{ type: "timing", duration: 600 }}
      >
        <S.RateTitleText tintColor={tintColor}>Win rate</S.RateTitleText>
      </S.RateTitleView>
      <S.RateValueView
        delay={1700}
        from={{ height: 0 }}
        animate={{ height: 55 }}
        transition={{ type: "timing", duration: 600 }}
      >
        <S.RateValueText tintColor={tintColor}>
          <CountUp isCounting={isCounting} end={wins} duration={3.2} />%
        </S.RateValueText>
      </S.RateValueView>
    </S.Container>
  );
}
