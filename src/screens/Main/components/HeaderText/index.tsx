import React from "react";

import * as S from "./styles";

interface Props {
  title: string;
  subTitle: string;
  tintColor: string;
}

export default function HeaderText({ title, subTitle, tintColor }: Props) {
  return (
    <S.Container>
      <S.TitleContent>
        <S.Title
          delay={1000}
          tintColor={tintColor}
          from={{ translateY: 75 }}
          animate={{ translateY: 0 }}
          transition={{ type: "timing", duration: 600 }}
        >
          {title}
        </S.Title>
      </S.TitleContent>
      <S.SubTitle
        delay={1500}
        tintColor={tintColor}
        from={{ translateY: 18 }}
        animate={{ translateY: 0 }}
        transition={{ type: "timing", duration: 600 }}
      >
        {subTitle}
      </S.SubTitle>
    </S.Container>
  );
}
