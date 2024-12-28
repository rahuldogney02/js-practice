console.log("<, >, =, ==, ===, >=, <=");

console.table([(`"2" > 1 = ${typeof ("2">1)} = ${"2">1}`),(`"2" < 1 = ${typeof ("2">1)} = ${"2"< 1}`)]);

console.log(`${typeof (null > 0)} = null > 0`,null > 0);
console.log(`${typeof (null == 0)} = null == 0`,null == 0);
console.log(`${typeof (null >= 0)} = null >= 0`,null >= 0);

/*
The reason is that an equlity check == and comparison > <>= <= work diffrently
Comparisons convert "null to a number" , treating it as 0.
That's why(3) null >= 0 is true and (1) null > 0 false
*/

console.log(`${typeof (undefined > 0)} = undefined > 0`,undefined > 0);
console.log(`${typeof (undefined == 0)} = undefined == 0`,undefined == 0);
console.log(`${typeof (undefined < 0)} = undefined < 0`,undefined < 0);

console.log("Strict check '2'===2 :- ",'2' === 2 );
console.log("Not strict check '2'==2 :- ",'2' == 2 );

/*
    <, >, =, ==, ===, >=, <=
    ┌─────────┬─────────────────────────────┐
    │ (index) │ Values                      │
    ├─────────┼─────────────────────────────┤
    │ 0       │ '"2" > 1 = boolean = true'  │
    │ 1       │ '"2" < 1 = boolean = false' │
    └─────────┴─────────────────────────────┘
    boolean = null > 0 false
    boolean = null == 0 false
    boolean = null >= 0 true
    boolean = undefined > 0 false
    boolean = undefined == 0 false
    boolean = undefined < 0 false
    Strict check '2'===2 :-  false
    Not strict check '2'==2 :-  true
*/