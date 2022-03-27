
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

//!Icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

//!StyledUi Components
import StyledListItemText from "components/StyledUi/StyledListItemText";

//! Interfaces
import {ItemCollapseProps} from "./interfaces";

function ItemCollapse({item, setItems}: ItemCollapseProps){

    return (
        <Box>
            <Divider />
            <ListItemButton
                onClick={() => setItems(state => state.map((stat) => stat._id === item._id ? {...stat, status: !stat.status} : {...stat, status: false} ))}
                sx={{px: {xs: 2, md: 4}}}
            >
                {item.status ? <ExpandLess sx={{mr: 2}}/> : <ExpandMore sx={{mr: 2}}/>}
                <StyledListItemText primary={item.label} />
            </ListItemButton>

            <Collapse in={item.status} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Divider />
                    <ListItemButton sx={{px: {xs: 2, md: 4}}}>
                        <StyledListItemText className="text-normal" primary={item.description} />
                    </ListItemButton>
                </List>
            </Collapse>
        </Box>
    )
}
export default ItemCollapse