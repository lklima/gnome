import React from "react";

import * as S from "./styles";

export default function BottomBar() {
  return (
    <S.BottomContainer
      delay={1000}
      from={{ translateY: 100 }}
      animate={{ translateY: 0 }}
    >
      <S.BottomCircle />
      <S.BottomCurve />
      <S.BottomContent>
        <S.BottomText>Let's Go</S.BottomText>
        <S.ArrowsView>
          <S.Arrow color="white" />
          <S.Arrow color="white" />
          <S.Arrow color="white" />
        </S.ArrowsView>
      </S.BottomContent>
    </S.BottomContainer>
  );
}
