import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #000;
    padding: 24px;
    gap: 24px;
`;

export const SubTitle = styled.Text`
    font-size: 24px;
    color: #fff;
    font-weight: 500;
`;