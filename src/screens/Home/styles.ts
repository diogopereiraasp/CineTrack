import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { colors } from '@/styles/theme/colors';
import { fontSizes } from '@/styles/theme/typography';


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${colors.background};
    padding: 0 24px;
    gap: 24px;
`;

export const Title = styled.Text`
    font-size: ${fontSizes.display}px;
    color: ${colors.textPrimary};
    font-weight: bold;
    margin-top: 24px;
`;

export const SubTitle = styled.Text`
    font-size: ${fontSizes.subtitle}px;
    color: ${colors.textSecondary};
    font-weight: 500;
`;
