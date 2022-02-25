import { MotiView, MotiImage } from "moti";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const BottomContainer = styled(MotiView)`
  height: 130px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const BottomCurve = styled.View`
  width: 130px;
  height: 130px;
  background: ${({ theme }) => theme.colors.botttom_bar};
  border-top-left-radius: 140px;
  border-top-right-radius: 140px;
  transform: scaleX(3.6);
  position: absolute;
`;

export const BottomCircle = styled.View`
  width: 63px;
  height: 63px;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  background: ${({ theme }) => theme.colors.flame_gold};
  position: absolute;
  z-index: 999;
  top: -48px;
`;

export const BottomCircleIcon = styled(MotiImage)`
  height: 35%;
  width: 35%;
  tint-color: black;
`;

export const BottomContent = styled(MotiView)`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BottomText = styled.Text`
  color: white;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ArrowsView = styled.View`
  flex-direction: row;
`;

export const Arrow = styled(Feather).attrs({
  name: "chevron-right",
})`
  font-size: 22px;
  margin-left: -5px;
`;
