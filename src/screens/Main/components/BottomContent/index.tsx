import React, { useEffect, useState } from "react";
import { CountUp } from "use-count-up";

import * as S from "./styles";

interface Props {
  currentWins: number;
  tintColor: string;
}

export default function BottomContent({ currentWins, tintColor }: Props) {
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsCounting(true), 1600);
  }, []);

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
          <CountUp
            key={`${currentWins}`}
            isCounting={isCounting}
            start={currentWins - 40}
            end={currentWins}
            duration={1}
          />
          %
        </S.RateValueText>
      </S.RateValueView>
    </S.Container>
  );
}
