import { Ionicons } from "@expo/vector-icons";

import {
    Container,
    Input,
    ButtonSearch
} from "./styles";
import { colors } from "../../styles/theme/colors";
import { fontSizes } from "../../styles/theme/typography";

export default function Search() {
    return (
        <Container>
            <Input />
            <ButtonSearch>
                <Ionicons name="search" size={fontSizes.icon} color={colors.textPrimary} />
            </ButtonSearch>
        </Container>
    );
}