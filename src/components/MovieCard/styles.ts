import styled from 'styled-components/native';
import { colors } from '@/styles/theme/colors';
import { fontSizes, fontWeights } from '@/styles/theme/typography';

export const Container = styled.TouchableOpacity`
    background-color: #${colors.background};
    border-radius: 12px;
    margin-bottom: 16px;
    height: 120px;

    flex-direction: row;
    overflow: hidden;

    border-width: 1px;
    border-color: ${colors.border};
`;

export const Image = styled.Image`
    flex: 0.35;
    aspect-ratio: 2 / 3;
    width: 100%;
    height: undefined;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
`;

export const Info = styled.View`
    flex: 0.65;
    padding: 12px;
    gap: 8px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: baseline;
`;

export const Title = styled.Text`
    font-size: ${fontSizes.subtitle}px;
    color: ${colors.textPrimary};
    font-weight: ${fontWeights.bold};
    text-transform: capitalize;
    flex-shrink: 1;
`;

export const ReleaseDate = styled.Text`
    font-size: ${fontSizes.small}px;
    color: ${colors.textTertiary};
    margin-left: 4px;
    flex-shrink: 0;
`;

export const Average = styled.Text`
    font-size: ${fontSizes.label}px;
    color: ${colors.textPrimary};
    margin-left: 4px;
`;

export const Votes = styled.Text`
    font-size: ${fontSizes.small}px;
    color: ${colors.textSecondary};
    margin-left: 6px;
`;

export const Popularity = styled.Text`
    font-size: ${fontSizes.label}px;
    color: ${colors.textPrimary};
    margin-left: 4px;
`;