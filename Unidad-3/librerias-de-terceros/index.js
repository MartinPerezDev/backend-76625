import moment from "moment";

function calculateDays(newBirthday){

  const now = moment();
  const birthDay = moment(newBirthday, "DD-MM-YYYY");

  const days = now.diff( birthDay, "days" );

  return `Desde que naciste hasta el dia de hoy pasaron ${days} dias`;
}

console.log( calculateDays("11/07/1980") );