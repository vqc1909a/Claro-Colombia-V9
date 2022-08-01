
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
import {ItemCollapse} from "./interfaces";

function ItemCollapseOnlyText({item, setItems}: ItemCollapse){
    return (
        <Box>
            {!item.notIsOnlyText
            ?
            <Divider />
            :
            ""
            }
            <ListItemButton
                onClick={() => setItems(state => state.map((stat) => stat._id === item._id ? {...stat, status: !stat.status} : {...stat, status: false} ))}
                sx={{px: {xs: 2, md: !item.notIsOnlyText ? 4 : 2}, border: item.notIsOnlyText ? "1px dashed black": ""}}
            >
                {item.status ? <ExpandLess sx={{mr: 2}}/> : <ExpandMore sx={{mr: 2}}/>}
                <StyledListItemText primary={item.label} />
            </ListItemButton>

            <Collapse in={item.status} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={(theme) => ({borderLeft: item.notIsOnlyText ? `1px solid ${theme.palette.grey["300"]}`: "", borderRight: item.notIsOnlyText ? `1px solid ${theme.palette.grey["300"]}` : "", borderBottom: item.notIsOnlyText ? `1px solid ${theme.palette.grey["300"]}` : ""})}>
                    {!item.notIsOnlyText
                    ?
                    <>
                        <Divider />
                        <ListItemButton sx={{px: {xs: 2, md: 4}}}>
                            <StyledListItemText className="text-normal" primary={item.description} />
                        </ListItemButton>

                    </>
                    :
                    <Box sx={{py: 2, px: 6}}>
                        {item.description}
                    </Box>
                    }
                </List>
            </Collapse>
        </Box>
    )
}
export default ItemCollapseOnlyText