// This type of import is called DYNAMIC IMPORT
import ('./converter.js').then(
    getModule =>{
       let result = getModule.treatSeriousStudent()
       console.log(result);       
    }
)

// asynic import

// async function getDetails() {
//    const module =  await import('./my_module/converter.js')

//  let result =  module.treatSeriousStudent();
//     console.log(result);
    
// }


// USING TRY AND CATCH - FINANLLY, THROW

// try {
//     const result = await getModule();
//     return result;
// } catch (error){
//     console.error(error);
// }finally{
//     console.log("this eventually worked");
    
// }

// Destructuring
// const [colorOne, colorTwo, colorThree] = ["red", "blue", "Green"];

const color = ["red", "blue", "Green"];
const[colorOne, colorTwo, colorThree] = color
console.log(colorThree);
