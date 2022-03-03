import { styled } from "@mui/material/styles";
import ListItemText from '@mui/material/ListItemText';

const StyledListItemText = styled(ListItemText)(({theme}) => ({
 "& .MuiTypography-root": {
  fontWeight: "bold"
 }
}))
export default StyledListItemText