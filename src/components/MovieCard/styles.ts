import styled from 'styled-components/native';
import { colors } from '@/styles/theme/colors';
import { fontSizes, fontWeights } from '@/styles/theme/typography';
import { Platform } from 'react-native';


export const Container = styled.TouchableOpacity`
    background-color: ${colors.card};
    border-radius: 12px;
    margin-bottom: 8px;
    height: 120px;
    flex-direction: row;
    overflow: hidden;
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
    font-family: 'Roboto-Regular-bold';
    font-size: ${fontSizes.subtitle}px;
    color: ${colors.textPrimary};
    font-weight: ${fontWeights.bold};
    text-transform: capitalize;
    flex-shrink: 1;
`;

export const ReleaseDate = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: ${fontSizes.small}px;
    color: ${colors.textTertiary};
    margin-left: 4px;
    flex-shrink: 0;
`;

export const Average = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: ${fontSizes.label}px;
    color: ${colors.textPrimary};
    margin-left: 4px;
`;

export const Votes = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: ${fontSizes.small}px;
    color: ${colors.textSecondary};
    margin-left: 6px;
`;

export const Popularity = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: ${fontSizes.label}px;
    color: ${colors.textPrimary};
    margin-left: 4px;
`;