import styled from "styled-components/native";
import { colors } from "@/styles/theme/colors";
import { fontSizes, fontWeights } from "@/styles/theme/typography";

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
    margin-bottom: 32px;
`;

export const TitleMovie = styled.Text`
    font-family: 'Roboto-Regular-bold';
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
    font-family: 'Roboto-Regular';
    color: ${colors.textPrimary};
    font-size: ${fontSizes.body}px;
`;

export const OverView = styled.Text`
    font-family: 'Roboto-Regular';
    color: ${colors.textSecondary};
    font-size: ${fontSizes.body}px;
    margin-top: 8px;
`;

export const VoteAverage = styled.Text`
    font-family: 'Roboto-Regular';
    color: ${colors.textPrimary};
    font-size: ${fontSizes.label}px;
    margin: 0 8px;
`;

export const ReleaseDate = styled.Text`
    font-family: 'Roboto-Regular';
    color: ${colors.textPrimary};
    font-size: ${fontSizes.label}px;
`;

export const Revenue = styled.Text`
    font-family: 'Roboto-Regular';
    color: ${colors.textPrimary};
    font-size: ${fontSizes.body}px;
`;

export const RowButton = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyIcon = styled.View`
  margin-bottom: 16px;
`;

export const EmptyText = styled.Text`
  font-size: ${fontSizes.body}px;
  color: ${colors.textSecondary};
  text-align: center;
  line-height: 22px;
  max-width: 80%;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  background-color: ${colors.background};
  justify-content: center;
  align-items: center;
`;