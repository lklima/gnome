import { MotiText, MotiView } from "moti";
import styled from "styled-components/native";

export const StarContent = styled(MotiView)`
  width: 55px;
  height: 60px;
  border-radius: 80px;
  align-items: center;
  background: white;
  position: absolute;
  left: 30px;
  top: 250px;
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
