import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: #222;
    border-radius: 12px;
    margin-bottom: 16px;
    height: 120px;

    flex-direction: row;
    overflow: hidden;
`;

export const Image = styled.Image`
    flex: 0.35;
    aspct-ratio: 2 / 3;
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
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-transform: capitalize;
    flex-shrink: 1;
`;

export const ReleaseDate = styled.Text`
    font-size: 10px;
    color: #ccc;
    margin-left: 4px;
    flex-shrink: 0;
`;

export const Average = styled.Text`
    font-size: 14px;
    color: #fff;
    margin-left: 4px;
`;

export const Votes = styled.Text`
    font-size: 10px;
    color: #ccc;
    margin-left: 6px;
`;

export const Popularity = styled.Text`
    font-size: 14px;
    color: #eee;
    margin-left: 4px;
`;