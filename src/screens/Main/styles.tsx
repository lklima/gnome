import { MotiText } from "moti";
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

export const Bottom = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: -5px;
`;

export const RateTitleView = styled.View`
  background: ${({ theme }) => theme.colors.flame_gold};
  height: 20px;
  width: 100px;
  padding: 0 10px;
  margin-bottom: -25px;
`;

export const RateTitleText = styled(MotiText)`
  font-size: 16px;
`;

export const RateValueView = styled.View`
  background: ${({ theme }) => theme.colors.flame_gold};
  height: 55px;
  width: 200px;
  padding: 0 10px;
`;

export const RateValueText = styled(MotiText)`
  font-size: 55px;
  font-weight: bold;
  overflow: hidden;
`;
