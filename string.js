//creating
let str=" good afternoon"
console.log(str);
console.log("length->"+str.length);
//Good Afternoon
console.log("indexof mtd");
console.log(str.indexOf("m"));
console.log(str.indexOf("g"));
console.log(str.indexOf("er"));
console.log(str.indexOf("n"));

console.log("last index mtd");//took arr seq
console.log(str.lastIndexOf("o"));//12
console.log(str.lastIndexOf("a"));

console.log("search mtd");
console.log(str.search("good"));//0
console.log(str.search("s"));//-1
console.log(str.search("good afternoon"));//0

console.log("includes mtd");
console.log(str.includes("good"));//t
console.log(str.includes(" "));//t
console.log(str.includes("afternoon"));//t
console.log(str.includes("Good afternoon"));//f

//" good afternoon"
console.log("starts with mtdf")
console.log(str.startsWith("good"));//f
console.log(str.startsWith(" good"));//t
console.log("ends with mtdh");
console.log(str.endsWith("on"));//t
console.log(str.endsWith("good"));//f
console.log(str.endsWith(" good after"));//f

//" good afternoon"
console.log("str manipultion");
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str22="       Hello! Pravallika   i    love u   "
console.log("trim mtd");
console.log(str22);
console.log(str22.trim());//removing space first and last

let str1="  Hello,       world!   "
console.log("trim mtd");
console.log(str1);
console.log("OG str length "+str1.length);

let t_str=str1.trim()
console.log(t_str);
console.log("trimmed str length " +t_str.length);//
console.log("trim str length"+str1.trim().length);//


