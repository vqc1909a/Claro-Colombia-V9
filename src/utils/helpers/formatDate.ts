const months = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre",
];

const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate(); 
    const newYear = year.toFixed();
    const newMonth = month.toFixed().length === 1 ? `0${month}` : month;
    const newDay = day.toFixed().length === 1 ? `0${day}` : day;
    return {year: newYear, month: newMonth, day: newDay}
}

export const formatDateForDB = (date: Date) => {
    const {year, month, day} = formatDate(date);
    return `${year}-${month}-${day}`
}

export const formatDateForUser = (date: Date) => {
    const {year, month, day} = formatDate(date);
    return `${day}/${month}/${year}`
}

export const formatDateForUserExtended = (date: Date) => {
    const {year, month, day} = formatDate(date);
    return `${parseFloat(day as string)} de ${months[parseFloat(month as string) - 1]} de ${parseFloat(year as string)}`
}

export const formatDateDBToUserExtended = (date: string) => {
    const day = parseInt(date.split("-")[2]);
    const month = parseInt(date.split("-")[1]) - 1;
    const year = parseInt(date.split("-")[0]);

    return formatDateForUserExtended(new Date(year, month, day));
}

export const formatDateDBToUser = (date: string) => {
    const day = parseInt(date.split("-")[2]);
    const month = parseInt(date.split("-")[1]) - 1;
    const year = parseInt(date.split("-")[0]);

    return formatDateForUser(new Date(year, month, day));
}


