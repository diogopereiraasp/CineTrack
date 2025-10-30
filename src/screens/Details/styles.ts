import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { colors } from "../../styles/theme/colors";
import { fontSizes, fontWeights } from "../../styles/theme/typography";

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${colors.background};
`;

export const PosterImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Body = styled.View`
    padding: 16px;
    gap: 16px;
`;

export const TitleMovie = styled.Text`
    font-size: ${fontSizes.title}px;
    font-weight: ${fontWeights.bold};
    color: ${colors.textPrimary};
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Info = styled.View`
`;

export const Genre = styled.Text`
    color: ${colors.textPrimary};
    font-size: ${fontSizes.body}px;
`;

export const OverView = styled.Text`
    color: ${colors.textSecondary};
    font-size: ${fontSizes.body}px;
    margin-top: 8px;
`;

export const VoteAverage = styled.Text`
    color: ${colors.textPrimary};
    font-size: ${fontSizes.label}px;
    margin: 0 8px;
`;

export const ReleaseDate = styled.Text`
    color: ${colors.textPrimary};
    font-size: ${fontSizes.label}px;
`;

export const Revenue = styled.Text`
    color: ${colors.textPrimary};
    font-size: ${fontSizes.body}px;
`;