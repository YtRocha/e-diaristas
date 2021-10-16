import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const TextFieldStyled = styled(TextField)`
    .MuiInputBase-root {
        background-color: ${({ theme }) => theme.palette.grey[50]};
    }

    .MuiOutLinedInput-notchedOutLine {
        border-corlo: ${({ theme }) => theme.palette.grey[100]};
    }
`;
