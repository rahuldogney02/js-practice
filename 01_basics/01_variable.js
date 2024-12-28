const accountId = 12344;
let accountEmail = 'test20@gmial.com';
var accountPassword = "Admin@123";
accountCity  = "Indore";
let accountState;
// accountId = 2; console.log(accountId);// not allowed
accountEmail = "test@gmail.com";
accountPassword = "Pass@123";
accountCity = "Bhopal";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
because of block scop and fuctional scope
*/

/*
┌─────────┬──────────────────┐
│ (index) │ Values           │
├─────────┼──────────────────┤
│ 0       │ 12344            │
│ 1       │ 'test@gmail.com' │
│ 2       │ 'Pass@123'       │
│ 3       │ 'Bhopal'         │
│ 4       │ undefined        │
└─────────┴──────────────────┘
*/