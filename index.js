const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
    //write code here
    const data = await fs.writeFile(fileName, fileContent)
    //dont change function name
}

const myFileReader = async (fileName) => {
    //write code here
    const data = await fs.readFile(fileName, "utf-8");//await no need of callback because ypu are asking your thread to wait unless that operation is completed
        console.log(data);
    
    //dont change function name
}

const myFileUpdater = async (fileName, fileContent) => {
    //write code here
    const data = await fs.appendFile(fileName, fileContent);
    console.log(data);
    //dont change function name
}

const myFileDeleter = async (fileName) => {
    //write code here
    const data = await fs.unlink(fileName);
    //dont change function name
}

myFileWriter("file1.txt","This is the first assignment");
myFileReader("file1.txt");
myFileUpdater("file1.txt", " Some new words");
myFileDeleter("file1.txt");
// module.exports = { myFileWriter, myFileReader, myFileUpdater, myFileDeleter }

