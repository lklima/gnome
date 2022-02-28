import { MotiText, MotiView } from "moti";
import styled from "styled-components/native";

interface ColorProps {
  tintColor: string;
}

export const Container = styled.View`
  width: 100%;
  position: absolute;
  top: 100px;
  padding-left: 30px;
  overflow: hidden;
`;

export const TitleContent = styled(MotiView)`
  margin-bottom: 8px;
  overflow: hidden;
  height: 80px;
`;

export const Title = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 32px;
  line-height: 40px;
  color: ${({ tintColor }) => tintColor};
`;

export const SubTitleContent = styled(MotiView)`
  margin-bottom: 8px;
  overflow: hidden;
  height: 22px;
`;

export const SubTitle = styled(MotiText)<ColorProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ tintColor }) => tintColor};
`;
