import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native";

import { Gnome } from "../..";

import * as S from "./styles";

interface Props {
  index: number;
  data: Gnome[];
  tintColor: string;
}

export default function HeaderText({ data, index, tintColor }: Props) {
  const nameListRef = useRef<FlatList>(null);
  const descListRef = useRef<FlatList>(null);

  useEffect(() => {
    nameListRef.current?.scrollToIndex({ index, animated: true });
    setTimeout(() => {
      descListRef.current?.scrollToIndex({ index, animated: true });
    }, 150);
  }, [index]);

  return (
    <S.Container>
      <S.TitleContent
        delay={1000}
        from={{ paddingTop: 80 }}
        animate={{ paddingTop: 0 }}
        transition={{ type: "timing", duration: 600 }}
      >
        <FlatList
          ref={nameListRef}
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <S.Title tintColor={tintColor}>{item.name}</S.Title>}
          scrollEnabled={false}
        />
      </S.TitleContent>
      <S.SubTitleContent
        delay={1200}
        from={{ paddingTop: 22 }}
        animate={{ paddingTop: 0 }}
        transition={{ type: "timing", duration: 600 }}
      >
        <FlatList
          ref={descListRef}
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <S.SubTitle tintColor={tintColor}>{item.description}</S.SubTitle>
          )}
          scrollEnabled={false}
        />
      </S.SubTitleContent>
    </S.Container>
  );
}
