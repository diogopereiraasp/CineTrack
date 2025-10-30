import styled from "styled-components/native";
import { colors } from "../../styles/theme/colors";
import { fontSizes, fontWeights } from "../../styles/theme/typography";

export const Button = styled.TouchableOpacity`
    flex: 0.75;
    flex-direction: row;
    gap: 8px;
    background-color: ${colors.primary};
    height: 48px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
`;

export const FavoriteButtonText = styled.Text`
    color: ${colors.textPrimary};
    font-size: ${fontSizes.body}px;
    font-weight: ${fontWeights.medium};
`;