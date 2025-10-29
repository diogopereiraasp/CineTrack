import { Ionicons } from "@expo/vector-icons";

import {
    Container,
    Input,
    ButtonSearch
} from "./styles";

export default function Search() {
    return (
        <Container>
            <Input />
            <ButtonSearch>
                <Ionicons name="search" size={25} color="#fff" />
            </ButtonSearch>
        </Container>
    );
}