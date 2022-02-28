import React, { useEffect, useRef } from "react";
import { useAnimationState } from "moti";
import { FlatList } from "react-native";

import * as S from "./styles";

import { Gnome } from "../..";

export interface Props {
  data: Gnome[];
  index: number;
}

export default function Avatar({ data, index }: Props) {
  const avatarListRef = useRef<FlatList>(null);

  const imageStatic = useAnimationState({});
  const imageAnimate = useAnimationState({
    bounce: {
      translateX: -15,
    },
    reset: {
      translateX: 0,
    },
    scale: {
      scale: 1,
    },
  });

  useEffect(() => {
    avatarListRef.current?.scrollToIndex({ index, animated: true });
    imageAnimate.transitionTo("bounce");
    setTimeout(() => imageAnimate.transitionTo("reset"), 300);
    setTimeout(() => imageAnimate.transitionTo("scale"), 500);
  }, [index]);

  return (
    <S.Container
      delay={1500}
      from={{ marginLeft: 500 }}
      animate={{ marginLeft: 0 }}
      transition={{ type: "timing" }}
    >
      <FlatList
        ref={avatarListRef}
        data={data}
        keyExtractor={(item) => item.name}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          height: 500,
          alignItems: "flex-end",
          flexDirection: "row",
          overflow: "hidden",
        }}
        renderItem={({ item, index: i }) => (
          <S.Avatar
            key={item.name}
            source={item.avatar}
            from={{
              opacity: 0,
              marginLeft: item.offsetX || 0,
              marginBottom: item.offsetY || 0,
              height: item.height || 350,
              scale: 0.9,
            }}
            animate={{ opacity: 1 }}
            transition={{
              scale: {
                type: "timing",
                duration: 2000,
              },
            }}
            state={i === index ? imageAnimate : imageStatic}
          />
        )}
      />
    </S.Container>
  );
}
