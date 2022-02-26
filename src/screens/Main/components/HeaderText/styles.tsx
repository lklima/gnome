import { MotiText } from "moti";
import styled from "styled-components/native";

interface ColorProps {
  tintColor: string;
}

export const Container = styled.View`
  width: 100%;
  position: absolute;
  top: 85px;
  padding-left: 30px;
  overflow: hidden;
`;

export const TitleContent = styled.View`
  margin-bottom: 8px;
  overflow: hidden;
`;

export const Title = styled(MotiText)<ColorProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 30px;
  line-height: 40px;
  color: ${({ tintColor }) => tintColor};
`;

export const SubTitle = styled(MotiText)<ColorProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ tintColor }) => tintColor};
`;
