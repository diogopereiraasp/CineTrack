import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;    
    background-color: #333;
    border-radius: 16px;
`;

export const Input = styled.TextInput`
    flex: 1;
    height: 50px;
    padding: 0 16px;
    color: #fff;
    font-size: 18px;
`;

export const ButtonSearch = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
`;
