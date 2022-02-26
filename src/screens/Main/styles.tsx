import { MotiImage, MotiText, MotiView } from "moti";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

interface TransitionProps {
  tintColor: string;
}

export const Container = styled(MotiView)`
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

export const StarContent = styled(MotiView)`
  width: 55px;
  border-radius: 80px;
  align-items: center;
  background: white;
  position: absolute;
  left: 30px;
  top: 230px;
  overflow: hidden;
  padding-top: 18px;
  z-index: 9999;
`;

export const StarText = styled(MotiText)`
  color: ${({ theme }) => theme.colors.botttom_bar};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: bold;
  font-size: 20px;
  position: absolute;
`;

export const Avatar = styled(MotiImage).attrs({
  resizeMode: "contain",
})`
  height: 350px;
  position: absolute;
  bottom: 145px;
`;
