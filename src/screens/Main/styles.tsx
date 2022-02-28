import { MotiView } from "moti";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

interface TransitionProps {
  tintColor: string;
}

export const Container = styled(Animated.View)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Transition = styled(MotiView)<TransitionProps>`
  height: ${width}px;
  width: ${width}px;
  border-radius: ${width}px;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: ${({ theme, tintColor }) => tintColor || theme.colors.ice_diamond};
`;
