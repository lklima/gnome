import { MotiImage, MotiText, MotiView } from "moti";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.flame_gold};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StarContent = styled(MotiView)`
  width: 55px;
  border-radius: 80px;
  align-items: center;
  background: white;
  position: absolute;
  left: 30px;
  top: 150px;
  overflow: hidden;
  padding-top: 18px;
  z-index: 9999;
`;

export const StarText = styled(MotiText)`
  color: ${({ theme }) => theme.colors.botttom_bar};
  font-weight: bold;
  font-size: 20px;
  position: absolute;
`;

export const Avatar = styled(MotiImage).attrs({
  resizeMode: "contain",
})`
  height: 350px;
`;
