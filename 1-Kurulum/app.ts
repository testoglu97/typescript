// console.log("Typescript Çalışmasıııııı!");
// console.log("Haydar!");

//BÖLÜM 2: Typescript - Data Types
//#3. Data Annotation
// let age: number = 26;
// let firstName: string = "Haydar";
// let lastName: string = "Testoğlu";
// let isUpdated: boolean = true;

//lastName= 35; //Type 'number' is not assignable to type 'string'.ts(2322)
//lastName= true; //Type 'boolean' is not assignable to type 'string'.ts(2322)

// function display(id:any, name:string) {
//     console.log("Id= " + id + ", Name= " + name);
// }

//#4. Data Type - Number-String-Boolean
//let değeri değişirse kullanılır. const ise sabitse değişmeyecekse tanımlanır.
// let first: number= 123; // number
// let second: number = 0x39CF; // hexadescimal
// let third: number = 0o377; //octal
// let fourth: number = 0b111001; //binary
// console.log(first); // 123
// console.log(second); // 14287
// console.log(third); // 255
// console.log(fourth); // 57

// let employeefirstName:string = "Haydar";
// console.log(employeefirstName);


// let employeeName:string="Haydar";
// let employeeDept:string="Engineering";


// //Pre-ES6
// let employeeDesc1:string= employeeName + " works in the " + employeeDept + " department.";
// console.log(employeeDesc1);
// //Post-ES6
// let employeeDesc2:string = `${employeeName} works in the ${employeeDept} department.`;
// console.log(employeeDesc2);


// let isPresent: boolean = true;
// console.log(isPresent);


//#5. Data Type - Array
//Aşağıdaki iki array tanımında çıktısı aynıdır.
// let firstNames: string[] = ["Haydar","Osman","Orhan"];
// let firstNames1: Array<string> = ["Haydar","Osman","Orhan"];
// console.log(firstNames);
// console.log(firstNames1);

//Tip belirtmeden array tanımlama
// let arr = [1, 3, 'Apple', "Orange", true]
// console.log(arr);

//Tip belirtip array'e atama işlemi
// let fruits: Array<string>;
// fruits = ['Apple', 'Orange', 'Banana'];
// console.log(fruits);

// let ids: Array<number>;
// ids= [23,34,100,124,55];
// console.log(ids);

//Hem string hem number
// let values: (string | number)[] = ['Apple', 2 , 'Orange', 3, 4, 'Banana'];
// let values1: Array<string | number> = ['Apple', 2 , 'Orange', 3, 4, 'Banana'];
// console.log(values);
// console.log(values1);

//Hem string hem number hem boolean
// let values2: (string | number | boolean)[] = ['Apple', 2 , 'Orange', 3, 4, 'Banana', true];
// console.log(values2);

//Array elemanına erişme
// let fruits: Array<string>;
// fruits = ['Apple', 'Orange', 'Banana'];
// console.log(fruits[0]);

//Loop
// let fruits: Array<string>;
// fruits = ['Apple', 'Orange', 'Banana'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


//#6. Data Type - Tuple
// let Id: number = 1;
// let testName: string = "Haydar";

// let instructor: [number, string] = [1, "Haydar"];
// let user: [number, string, boolean, number, string] = [1, "Haydar", true, 20, "Admin"];

// console.log(instructor);
// console.log(user);

//Tupleden array yapmak
// var employee: [number, string][];
// employee = [[1,"Steve"], [2, "Bill"], [3, "Haydar"]];
// console.log(employee);



//#7. Data Type - Object
// type Person = {
//     firstName:string,
//     lastName: string,
//     age: number,
//     jobTitle: string
// };

// let instructor : Person;
// instructor = {
//     firstName: "Haydar",
//     lastName: "Testoğlu",
//     age: 29,
//     jobTitle: "Software Engineer"
// }
// console.log(instructor)
// console.log(instructor.age)

//Direk atama
// let person: {
//     firstName: string,
//     lastName: string,
//     age: number,
//     jobTitle: string
// } = {
//     firstName: "Haydar",
//     lastName: "Testoğlu",
//     age: 29,
//     jobTitle: "Software Engineer"
// };

// console.log(person)


//#8. Data Type - Enum
// enum Media {
//     Newspaper,
//     Newsletter,
//     Magazine,
//     Book
// };

// console.log(Media.Magazine) // 2 olur çünkü enum başlangıç değeri 0'dır
// console.log(Media[2]);

//Başlangıç değerini 1 yaptım
// enum Media1 {
//     Newspaper = 1,
//     Newsletter,
//     Magazine,
//     Book
// };

// enum Media2 {
//     Newspaper = "NEWSPAPER",
//     Newsletter = "NEWSLETTER",
//     Magazine = "MAGAZINE",
//     Book = "BOOK"
// };

// console.log(Media2.Book);
// console.log(Media2['Book']); //Key value olarakta görüntülenebilir.

//#9. Data Type - Union
// let code : string | number ;
// code = "123";
// code = 123;
// // code = true; //Type 'boolean' is not assignable to type 'string | number'.ts(2322)
// console.log(code);

//#10. Data Type - Any
// let someThings: any = "Hello";
// someThings = 45;
// someThings = true;
// someThings = [45, 23];
// someThings = {
//     firstName: "Haydar",
//     lastName: "Testoğlu"
// };
// console.log(someThings)

// let arr: any[]= ["John", 23, true];
// console.log(arr);


//#10. Data Type - Void (Geriye değer döndürmezse kullanılır return olmaz yani)
// function sayHello(): void{
//     let can = "Can";
//     console.log('Hi!!!');
//     //return can; //Type 'string' is not assignable to type 'void'.ts(2322)
// }

// sayHello();

//#10. Data Type - Never (Geriye hiç bir şey dönmez hata verecek)
// function throwError(err: string):never{
//     throw new Error(err);
// }

// throwError("Hata var");

//Atama voidde yapılır ama never da null veya undefined bile atanmaz.
//let someThing:void = null;
//let someThing1:void = undefined;
//let nothing:never = null; //Type 'null' is not assignable to type 'never'.ts(2322)
//let nothing:never = undefined; //Type 'undefined' is not assignable to type 'never'.ts(2322)


//#11. Type Inference (Herhangi bir değişkene tip belirtme yapmasakta tipinin tutulmasıdır)
// let sayac = 0;
// console.log(typeof (sayac))

// let a = "some text";
// let b = 123;
// a=b; //Type 'number' is not assignable to type 'string'.ts(2322)


//#12. Type Assertion
// let code:any = 123;
// console.log(typeof(code));

// let empCode = code;
// console.log(typeof(empCode));

// let empCode1 = <number>code;
// console.log(typeof(empCode1));


// interface Employee{
//     name:string,
//     code:number
// }
// let employee = <Employee>{};
// console.log(typeof(employee));
// employee.name = "Can"; //Property 'name' does not exist on type '{}'.ts(2339)
// console.log(employee);


//BÖLÜM 3: Typescript - Control Flow Statements
