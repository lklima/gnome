import { MotiView } from "moti";
import styled from "styled-components/native";

interface ColorProps {
  tintColor: string;
}

export const Container = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 53px;
`;

export const RateTitleView = styled(MotiView)`
  margin-bottom: -5px;
`;

export const RateTitleText = styled.Text<ColorProps>`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ tintColor }) => tintColor};
`;

export const RateValueView = styled(MotiView)`
  align-items: center;
`;

export const RateValueText = styled.Text<ColorProps>`
  font-size: 55px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ tintColor }) => tintColor};
`;
