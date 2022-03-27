import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {CounterArgs} from "./interfaces";

function Counter({value, setValue}: CounterArgs){

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography
                variant="body1"
                component="p"
                sx={{
                    fontWeight: "lighter",
                    mb: 0.5,
                    color: (theme) =>
                        theme.palette.grey["600"],
                }}
            >
                Cantidad
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        cursor: "pointer",
                        color: (theme) =>
                            theme.palette.grey["700"],
                    }}
                    onClick={() => setValue(-1)}
                >
                    -
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    sx={{
                        mx: 1.25,
                        padding: (theme) =>
                            `${theme.spacing(
                                0.5
                            )} ${theme.spacing(1.5)}`,
                        border: (theme) =>
                            `1px solid ${theme.palette.grey["400"]}`,
                        backgroundColor: (theme) =>
                            theme.palette.common.white,
                    }}
                >
                    {value}
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        cursor: "pointer",
                        color: (theme) => theme.palette.grey["700"],
                    }}
                    onClick={() => setValue(1)}
                >
                    +
                </Typography>
            </Box>
        </Box>

    )
}
export default Counter
