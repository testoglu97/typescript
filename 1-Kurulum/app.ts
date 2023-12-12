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
//#15. If Else Ternary Operator
// let x: number = 20;
// let y: number = 20;
// if (x > y) {
//     console.log("x y'den büyüktür")
// } else if (x < y) {
//     console.log("x y'den küçüktür.")
// } else {
//     console.log("x y'ye eşittir.")
// }

// x > y ? console.log("x y'den büyüktür") : console.log("x y'den büyüktür veya eşittir.")


//#16. Switch Case
// let day: number = 2;

// switch (day) {
//     case 0:
//         console.log("Pazar")
//         break;
//     case 1:
//         console.log("Pazartesi")
//         break;
//     case 2:
//         console.log("Salı")
//         break;
//     case 3:
//         console.log("Çarşamba")
//         break;
//     case 4:
//         console.log("Perşembe")
//         break;
//     case 5:
//         console.log("Cuma")
//         break;
//     case 6:
//         console.log("Cumartesi")
//         break;
//     default:
//         console.log("Böyle bir gün yok!")
//         break;
// }


//#17. For Loop
// for (let i = 0; i < 3; i++) {
//     console.log("i değerim=" + i)
// }

// let arr = [10,20,30,40];

// for(let item of arr){
//     console.log(item);
// }

// for(let item in arr){ //in ve of farklıdır
//     console.log(item);
// }

// let str = "HAYDAR";
// for(let item1 of str){
//     console.log(item1)
// }


//#18. While Loop - Do While Loop - Break
// let counter = 0;

// while(counter<5){
//     console.log(counter);
//     counter++;

//     if(counter == 3){
//         break;
//     }
//  }

// do {
//     console.log(counter);
//     counter++;    
// } while (counter<5);


//Bölüm 4: Typescript - Functions
//#19. Function
// function add(a:number,b:number):number{
//     return a+b;
// }

// let toplam = add(4,4);
// // let toplam = add('4','4');//Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

// console.log(toplam);
// console.log(typeof(toplam));

//void
// function bastir():void{
//     console.log("Test Testoğlu");
// }

// bastir();

// function birlestir(name:string,surname:string="Default Parametre"){
//     return name+ ' ' + surname;
// }

// let adSoyad = birlestir('Haydar','Testoğlu');
// let adSoyad1 = birlestir('Haydar');
// console.log(adSoyad);
// console.log(adSoyad1);

//#20. Optional Parameters - Arrow Functions
//Optional olan ? ile gösterilir.
// function carpim(a:number,b:number,c?:number){
//     if(typeof(c) !== 'undefined'){
//         return a*b*c;
//     }else{
//         return a*b
//     }
// }

// let degisken = carpim(3,4,5);
// console.log(degisken)

// let degisken1 = carpim(3,4);
// console.log(degisken1)


// function carpim(a:number,b:number):number{
//         return a*b
// }
//Kısa yazım
// let carpim = (a:number,b:number) => a*b;
// let degisken2 = carpim(3,4);
// console.log(degisken2)

//Fonksiyon arrow function
// let carpim = (a:number,b:number) => {
//         return a*b
// }
// let degisken2 = carpim(3,4);
// console.log(degisken2)

//Kısa yazım
// let bastir = ()=> console.log("Test");
//Uzun hali
// let bastir = ()=> {
//         console.log("Test");
// }

// bastir();

//#21. Function Overloading
//Her iki tipide alabilecek şekilde dönüştürdük.
// function islem(a: number, b: number): number;
// function islem(a: string, b: string): string;

// function islem(a:any, b:any):any{
//         return a+b;
// }

// let degisken = islem("Test", "Testoglu");
// let degisken1 = islem(2,3);
// console.log(degisken);
// console.log(degisken1);


//#22. Rest Parameters
// function toplam(...numbers:number[]){
//         let total=0;
//         numbers.forEach((num) => total +=num);
//         return total;
// }

// console.log(toplam(10,20,30));

//Hata vermesin diye rest parameters en sonda kullanılır.
// function toplam(a:string,...numbers:number[]){
//         console.log(a);
//         let total=0;
//         numbers.forEach((num) => total +=num);
//         return total;
// }

// console.log(toplam("Can",20,30));

// function birlestir(message:string, ...names:string[]){
//         console.log(message + " " + names.join(","));
// }

// birlestir("Sınıf listesi:", "Haydar","Şükrü","Hayri","Osman")



//Bölüm 5: Typescript - Classes
//#23. Class

// class Person {
//     id:number;
//     firstName:string;
//     lastName:string;

//     //yani üst tarafa parametleri eşitledik.
//     constructor(idim:number, firstNameim:string, lastNameim:string) {
//         this.id = idim;
//         this.firstName = firstNameim;
//         this.lastName = lastNameim;
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// let kisiBilgim = new Person(1, "Haydar", "Testoğlu");
// console.log(kisiBilgim);

// console.log(kisiBilgim.getFullName());


//#24. Access Modifiers (Public Private Protected)
// class Person {
//     protected id:number;
//     firstName:string;
//     lastName:string;

//     //yani üst tarafa parametleri eşitledik.
//     constructor(idim:number, firstNameim:string, lastNameim:string) {
//         this.id = idim;
//         this.firstName = firstNameim;
//         this.lastName = lastNameim;
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


//#25. Readonly
// class Person {
//     readonly id:number;
//     firstName:string;
//     lastName:string;

//     //yani üst tarafa parametleri eşitledik.
//     constructor(idim:number, firstNameim:string, lastNameim:string) {
//         this.id = idim;
//         this.firstName = firstNameim;
//         this.lastName = lastNameim;
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// let kisiBilgim = new Person(1, "Haydar", "Testoğlu");
// // kisiBilgim.id=5; //Cannot assign to 'id' because it is a read-only property.ts(2540) Değer bastırabliriz ama dışarıda değer değiştiremeyiz readonly'de.

// console.log(kisiBilgim.getFullName());

//#26. Inheritance
class Person {
    readonly id: number;
    firstName: string;
    lastName: string;

    //yani üst tarafa parametleri eşitledik.
    constructor(idim: number, firstNameim: string, lastNameim: string) {
        this.id = idim;
        this.firstName = firstNameim;
        this.lastName = lastNameim;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(idim: number, firstNameim: string, lastNameim: string) {
        super(idim, firstNameim, lastNameim)
    }
}
DK 3.16