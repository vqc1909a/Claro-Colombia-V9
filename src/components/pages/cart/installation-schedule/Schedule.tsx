import {useState, useEffect} from "react";

import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
// import DatePicker from '@mui/lab/DatePicker';

//!Customizar
import PickersDay, {PickersDayProps} from "@mui/lab/PickersDay";
// import endOfWeek from "date-fns/endOfWeek";
// import startOfWeek from "date-fns/startOfWeek";
import endOfMonth from "date-fns/endOfMonth";
import startOfMonth from "date-fns/startOfMonth";
import isSameDay from "date-fns/isSameDay";
import isWithinInterval from "date-fns/isWithinInterval";

//!i18
import esLocale from "date-fns/locale/es";
import frLocale from "date-fns/locale/fr";
import ruLocale from "date-fns/locale/ru";
import deLocale from "date-fns/locale/de";
import enLocale from "date-fns/locale/en-US";

//! Interfaces
import {SetValue} from "interfaces";
import {DateTimeState} from "./interfaces";

const localeMap = {
	es: esLocale,
	en: enLocale,
	fr: frLocale,
	ru: ruLocale,
	de: deLocale,
};

//!Estos valores del mask, son por defecto, o sea que si no pones la propiedad mask, representarán ese formato por defecto
const maskMap = {
	es: "__/__/____",
	fr: "__/__/____",
	en: "__/__/____",
	ru: "__.__.____",
	de: "__.__.____",
};

type CustomPickerDayProps = PickersDayProps<Date> & {
	dayIsBetween: boolean;
	isFirstDay: boolean;
	isLastDay: boolean;
	isToday: boolean;
};

const CustomPickersDay = styled(PickersDay, {
	  shouldForwardProp: (prop) =>
	    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay' && prop !== "isToday",
})<CustomPickerDayProps>(
	({theme, dayIsBetween, isFirstDay, isLastDay, isToday}) => ({
		...(dayIsBetween && {
			borderRadius: 0,
			backgroundColor: theme.palette.grey["300"],
			color: theme.palette.common.black,
			fontWeight: "bolder",
			"&:hover, &:focus": {
				backgroundColor: theme.palette.primary.dark,
				color: theme.palette.common.white,
			},
			// padding: "1px"
		}),
		...(isToday && {
			borderRadius: "0",
			//   padding: "1px"
			//!Las propiedades de color no dan para el principal, xq ya esta insertado el color primary.main pero no se donde lo hace eso, al igual que el color del texto es blanco pero dónde lo hará?
			//       backgroundColor: "yellow",
		}),
		//   ...(isFirstDay && {
		//     borderTopLeftRadius: '50%',
		//     borderBottomLeftRadius: '50%',
		//   }),
		//   ...(isLastDay && {
		//     borderTopRightRadius: '50%',
		//     borderBottomRightRadius: '50%',
		//   })
	})
) as React.ComponentType<CustomPickerDayProps>;

function Schedule({setDateTime}: {setDateTime: SetValue<DateTimeState>}) {
	const [value, setValue] = useState<Date | null>(new Date());
	const [locale/* , setLocale */] = useState<keyof typeof maskMap>("es");

	const renderWeekPickerDay = (
		date: Date,
		selectedDates: Array<Date | null>,
		pickersDayProps: PickersDayProps<Date>
	) => {
		//!value: es la fecha de hoy
		if (!value) {
			return <PickersDay {...pickersDayProps} />;
		}
		//!Date: es la fecha de cada día del mes
		//!start: Es la fecha del día domingo pasado respecto a la fecha de ahora (value).
		//!end: Es la fecha del día sabado próximo respecto a la fecha de ahora (value).
		const start = startOfMonth(value);
		const end = endOfMonth(value);

		//!El dayIsBetween está calculado respecto a la fecha de cada día con el intervalo de start y end => start >= date <= end
		//!El isFirstDay está calculado respecto a la fecha de cada día con la fecha start => fecha de cada día === fecha start
		//!El isLastDay está calculado respecto a la fecha de cada día con la fecha end => fecha de cada día === fecha end
		const dayIsBetween = isWithinInterval(date, {start, end});
		const isFirstDay = isSameDay(date, start);
		const isLastDay = isSameDay(date, end);
		const isToday = isSameDay(date, value);
		// console.log({
		// 	date,
		// 	value,
		// 	start,
		// 	end,
		// 	dayIsBetween,
		// 	isFirstDay,
		// 	isLastDay,
		// 	isToday,
		// });
		return (
			<CustomPickersDay
				{...pickersDayProps}
				// disableMargin
				dayIsBetween={dayIsBetween}
				isFirstDay={isFirstDay}
				isLastDay={isLastDay}
				isToday={isToday}
			/>
		);
	};

	useEffect(() => {
		setDateTime(state => ({...state, date: value}));

		//eslint-disable-next-line
	}, [value]);

	return (
		<LocalizationProvider
			dateAdapter={AdapterDateFns}
			locale={localeMap[locale]}
		>
			<StaticDatePicker
				displayStaticWrapperAs="desktop"
				views={["day"]}	
				mask={maskMap[locale]}
				// openTo="day"
				value={value}
				onChange={(newValue) => setValue(newValue)}
				renderInput={(params) => (
					<TextField
						{...params}
						helperText={params?.inputProps?.placeholder}
					/>
				)}
				renderDay={renderWeekPickerDay}
				label="Fecha de Instalación"
				//! Este el formato del input
				// inputFormat="'Fecha:' Y MM dd"
			/>
		</LocalizationProvider>
	);
}

export default Schedule;
