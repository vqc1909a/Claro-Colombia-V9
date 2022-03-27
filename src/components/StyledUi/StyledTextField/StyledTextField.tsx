import TextField from "@mui/material/TextField";
import {styled} from "@mui/material/styles"

const StyledTextField = styled(TextField)(({theme}) => ({
 width: "100%",
 "&.MuiFormControl-root": {
    margin: 0,
 },
 //! Hijos
 "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "0px"
 },
 //! Variants
 "&.vendorCode": {
    backgroundColor: theme.palette.common.white
 }
}))
export default StyledTextField