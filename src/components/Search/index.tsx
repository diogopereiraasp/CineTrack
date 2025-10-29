import { Ionicons } from "@expo/vector-icons";

import {
    Container,
    Input,
    ButtonSearch
} from "./styles";
import { colors } from "../../styles/theme/colors";

export default function Search() {
    return (
        <Container>
            <Input />
            <ButtonSearch>
                <Ionicons name="search" size={25} color={colors.textPrimary} />
            </ButtonSearch>
        </Container>
    );
}