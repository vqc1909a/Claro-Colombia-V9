
import * as React from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

//!Icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

//! Mui Components
import StyledContainer from "components/StyledUi/StyledContainer";

//!Uuids
import {v4 as uuid} from "uuid";

const stepIcons: {[index: string]: React.ReactElement} = {
    1: <ShoppingCartOutlinedIcon fontSize="large"></ShoppingCartOutlinedIcon>,
    2: <ContactMailOutlinedIcon fontSize="large"></ContactMailOutlinedIcon>,
    3: <AddModeratorOutlinedIcon fontSize="large"></AddModeratorOutlinedIcon>,
    4: <HistoryEduOutlinedIcon fontSize="large"></HistoryEduOutlinedIcon>,
    5: <DateRangeOutlinedIcon fontSize="large"></DateRangeOutlinedIcon>,
    6: <Inventory2OutlinedIcon fontSize="large"></Inventory2OutlinedIcon>
}

const steps = [
    {
        _id: uuid(),
        label: <Box component="span" sx={{fontWeight: "bolder"}}>Carrito</Box>
    },
    {
        _id: uuid(),
        label: <Box component="span" sx={{fontWeight: "bolder"}}>Titular y datos<br /> de instalación</Box>
    },
    {
        _id: uuid(),
        label: <Box component="span" sx={{fontWeight: "bolder"}}>Seguridad</Box>
    },
    {
        _id: uuid(),
        label: <Box component="span" sx={{fontWeight: "bolder"}}>Contratación<br /> Servicios Fijos</Box>
    },
    {
        _id: uuid(),
        label: <Box component="span" sx={{fontWeight: "bolder"}}>Agendamiento<br /> de Instalación</Box>
    },
    {
        _id: uuid(),
        label: <Box component="span" sx={{fontWeight: "bolder"}}>Resumen</Box>
    }
]

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 9,
    left: "-50%",
    right: "50%"
    // left: 'calc(-50% + 16px)',
    // right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
        background: theme.palette.success.light
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
        background: theme.palette.success.light
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    position: "relative",
    zIndex: theme.zIndex.mobileStepper,
    height: 6,
    border: 0,
    borderRadius: 0,
    // background: `linear-gradient(to right, ${theme.palette.success.light} 50%, ${theme.palette.grey["300"]} 60%)`,
    background: theme.palette.grey["300"],

  }
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean, completed?: boolean } }>(
  ({ theme, ownerState }) => ({
    position: "relative",
    zIndex: theme.zIndex.speedDial,
    color: theme.palette.grey["300"],
    backgroundColor: theme.palette.common.white,
    height: 23,
    width: 23,
    // display: 'flex',
    // alignItems: "center",
    // justifyContent: "center",
    border: `4px solid ${theme.palette.grey["300"]}`,
    borderRadius: "50%",
    // Si esta activo el step, el color que sea azul sino por defecto el medio gris
    ...(ownerState.active && {
      border: `4px solid ${theme.palette.success.light}`,
      boxShadow: "0px 0px 6px black"
    //   color: theme.palette.success.light,
    }),
    ...(ownerState.completed && {
      border: `4px solid ${theme.palette.success.light}`,
      boxShadow: "0px 0px 6px black"
    //   color: theme.palette.success.light,
    }),

    ...(ownerState.completed && {
        '& .QontoStepIcon-float': {
            color: theme.palette.secondary.main
        }
    }),
    ...(ownerState.active && {
        '& .QontoStepIcon-float': {
            color: theme.palette.secondary.main
        }
    })
    // Estos dos de abajo son los hijos que envuelve

    // '& .QontoStepIcon-completedIcon': {
    //   color: theme.palette.success.light,
    //   zIndex: 1,
    //   fontSize: 18,
    // },
    // '& .QontoStepIcon-circle': {
    //   width: 8,
    //   height: 8,
    //   borderRadius: '50%',
    //   backgroundColor: 'currentColor',
    // },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
// {
//     "completed": true,
//     "active": false,
//     "error": false,
//     "icon": 1
// }
    return (
    <QontoStepIconRoot ownerState={{ active, completed }} className={className}>
        <Box sx={{position: "absolute", top: "-50px", left: "50%", transform: "translateX(-50%)"}} className="QontoStepIcon-float">
            {stepIcons[String(props.icon)]}
        </Box>
        {/* {completed ? (
            // Si esta completado que me muestre el check con el estilo
            <Check className="QontoStepIcon-completedIcon" />
            // Caso contrario que me  muestre solamente una bolita
        ) : (
            <div className="QontoStepIcon-circle" />
        )} */}
    </QontoStepIconRoot>
  );
}





interface StepperHeaderProps {
  numberStep: number
}

function StepperHeader({numberStep}: StepperHeaderProps) {
  return (
    <Box sx={{ width: '100%', pb: 6, pt: 12}}>
      <StyledContainer className="container-services">
        <Stepper alternativeLabel activeStep={numberStep} connector={<QontoConnector />}>
          {steps.map((step) => (
            <Step key={step._id} /* completed={true} */>
              <StepLabel StepIconComponent={QontoStepIcon}>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>   
      </StyledContainer>   
    </Box>
  );
}

export default StepperHeader