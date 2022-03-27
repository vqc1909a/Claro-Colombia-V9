import { styled } from "@mui/material/styles";
import ListItemText from '@mui/material/ListItemText';

const StyledListItemText = styled(ListItemText)(({theme}) => ({
 "& .MuiTypography-root": {
  fontWeight: "bold"
 },
 //!Variaciones
 "&.text-normal": {
    "& .MuiTypography-root": {
        fontWeight: "initial",
        textAlign: "justify"
    }
 }
}))
export default StyledListItemText