const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later'
];

// const sweetMessages = [
//     'how are you doing, sweetie?',
//     'what are you up to, sweetie?',
//     'would you like to get a bite later, sweetie?',
// ];

// const sweetMessages=${messages[0]},sweetie?;

// const sweetMessages=[];

// for (let i=0;i<messages.length;i++){
//     const newMessages=`${messages[i]}, sweetie?`;
//     sweetMessages.push(newMessages);
// }

// for(let i = 0; i < messages.length; i++) {
//     const newMessage = `${messages[i]}, sweetie?`;
//     sweetMessages.push(newMessage); 
// }

const sweetMessages = messages.map(message => `${message}, sweetie?`);


const testm=[
    1,
    2,
    3
]

const newFinding = testm.map(mess => `${mess}, sweetie?`);
// const newFinding = testm.map(func(mess));

// const func = (mess) =>{
//     `${mess}, sweetie?`;
// }

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );

console.log(newFinding);
console.log(sweetMessages);

const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map((number) => number * 2);
console.log(doubled);