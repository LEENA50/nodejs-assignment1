const fs = require('fs/promises')


const myFileWriter =  async(fileName, fileContent) =>{
    const data = await fs.writeFile(fileName, fileContent)
}

const myFileReader = async(fileName) => {
    const data = await fs.readFile(fileName, "utf-8")
    console.log(data);
}
const myFileUpdater = async(fileName, fileContent) => {
    const data = await fs.appendFile(fileName, fileContent)
    console.log(data);
}

// myFileUpdater will update the file(not overwrite) with new content.

// Ex:- File.txt contains 'Hello', when we call myFileUpdater('File.txt',' World')
// Updated file content is "Hello World".

// myFileDelete

myFileWriter("file1.txt", "This is the first assignment")
myFileReader("file1.txt")
myFileUpdater("file1.text", "Some new words")