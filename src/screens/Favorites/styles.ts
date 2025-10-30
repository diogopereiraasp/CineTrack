import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { colors } from "../../styles/theme/colors";
import { fontSizes } from "../../styles/theme/typography";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${colors.background};
    padding: 0 24px;
    gap: 24px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 32px;
`;

export const ButtonTrash = styled.TouchableOpacity`
    padding: 8px;
`;

export const Title = styled.Text`
    font-size: ${fontSizes.display}px;
    color: ${colors.textPrimary};
    font-weight: bold;
    margin-top: 24px;
`;

export const EmptyState = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const EmptyIconContainer = styled.View`
  background-color: ${colors.black};
  border-radius: 100px;
  padding: 16px;
  border: 1px solid ${colors.textSecondary};
`;

export const EmptyText = styled.Text`
  color: ${colors.textSecondary};
  font-size: ${fontSizes.body}px;
  text-align: center;
  margin-top: 16px;
  line-height: 22px;
`;
