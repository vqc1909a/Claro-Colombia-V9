import InputLabel from "@mui/material/InputLabel";
import {styled} from "@mui/material/styles"

const StyledInputLabel = styled(InputLabel)(({theme}) => ({
//  marginLeft: theme.spacing(1),
 marginBottom: theme.spacing(.5),
 color: theme.palette.grey['700']
}))
export default StyledInputLabel