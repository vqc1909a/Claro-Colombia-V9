
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

//!Icons
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";

//!Interfaces
import {ModalProps} from "./interfaces";

function OwnModal({openModal, setOpenModal, children}: ModalProps){
    return (
        <Modal
            keepMounted
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={(theme) => ({
                    position: "absolute" as "absolute",
                    width: "90%",
                    borderRadius: "5px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    margin: "0 auto",
                    // minWidth: 300,
                    bgcolor: "background.paper",
                    // border: '2px solid #000',
                    boxShadow: theme.shadows["0"],
                    py: 4,
                    px: 5,
                    textAlign: "center",
                    [theme.breakpoints.up("sm")]: {
                        px: 9,
                        width: "70%",
                        borderRadius: "0px",
                    },
                    [theme.breakpoints.up("md")]: {
                        px: 13,
                        width: "45%"
                    }
                })}
            >
                <Box
                    sx={{position: "absolute", top: "3%", right: "2%"}}
                >
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={() => setOpenModal(false)}
                    >
                        <CloseOutlinedIcon></CloseOutlinedIcon>
                    </IconButton>
                </Box>
                {children}
            </Box>
        </Modal>
    )
}
export default OwnModal