import styled from 'styled-components/native';
import { colors } from '@/styles/theme/colors';
import { fontSizes } from '@/styles/theme/typography';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 16px;
    background-color: ${colors.surface};
    border: 1px solid ${colors.border};
`;

export const Input = styled.TextInput`
    flex: 1;
    height: 50px;
    padding: 0 16px;
    color: ${colors.textPrimary};
    font-size: ${fontSizes.subtitle}px;
`;

export const ButtonSearch = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
`;
