import { useAnimationState } from "moti";
import React, { useEffect } from "react";
import BottomBar from "./components/BottomBar";

import * as S from "./styles";

export default function Main() {
  return (
    <S.Container>
      <S.Content></S.Content>

      <BottomBar />
    </S.Container>
  );
}
