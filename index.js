let data = 42;
let dataType;

switch (typeof data) {
  case "number":
    dataType = "Numeric";
    break;
  case "string":
    dataType = "String";
    break;
  case "boolean":
    dataType = "Boolean";
    break;
  default:
    dataType = "Other";
}

console.log(`The data "${data}" is of type "${dataType}"`);

// let monthOfYear = 4;
// let monthName;

// switch (monthOfYear) {
//   case 1:
//     monthName = "January";
//     break;
//   case 2:
//     monthName= "February";
//     break;
//   case 3:
//     monthName = "March";
//     break;
//   case 4:
//     monthName = "April";
//     break;
//   case 5:
//     monthName = "May";
//     break;
//   default:
//     monthName = "Invalid month";
// }

// console.log(monthName);