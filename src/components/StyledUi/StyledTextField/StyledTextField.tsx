import TextField from "@mui/material/TextField";
import {styled} from "@mui/material/styles"

const StyledTextField = styled(TextField)(({theme}) => ({
 width: "100%",
 backgroundColor: theme.palette.common.white,
 "&.MuiFormControl-root": {
 },
 //! Hijos
 "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "0px"
 },
 //! Variants
 "&.vendorCode": {
    backgroundColor: theme.palette.common.white
 },
 "&.field-normal": {
   width: "initial"
 }
}))
export default StyledTextField