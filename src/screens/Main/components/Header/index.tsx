import React from "react";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

import profile from "../../../../assets/profile.webp";

interface Props {
  tintColor: string;
}

export default function Header({ tintColor }: Props) {
  return (
    <S.Container
      delay={1000}
      from={{ top: -50 }}
      animate={{ top: 40 }}
      transition={{ type: "timing", duration: 500 }}
    >
      <Feather name="chevron-left" size={30} color={tintColor} />
      <S.Profile source={profile} />
    </S.Container>
  );
}
