import * as fs from 'fs/promises';

//Creating Directory / Folder using node js
// try {
//     await fs.mkdir('d:\\MERN\\Nodejs');
//     console.log("Folder Created ...");
// } catch (error) {
//     console.log(error);
//     console.log("No Folder Created ...");
// }

//OR
// try {
//     await fs.mkdir('d:\\nodejs\\temp_folder\\modules\\toolkit', { recursive: true});
//     console.log("Folder created ...");
// } catch (error) {
//     console.log(error);
// }

// Read The Content 
// try {
//     const files = await fs.readdir("d:\\nodejs");
//     for (const file of files) {
//         console.log(file);
//     }
// } catch (error) {
//     console.log(error);
// }

// Remove Folder / Directory
// try {
//     await fs.rmdir("d:\\nodejs\\temp_folder\\modules\\toolkit")
// } catch (error) {
//     console.log(error);
// }

//Create and Write Files
// try {
//     await fs.writeFile("README.md", "Hello NODEPLAYER");
// } catch (error) {
//     console.log(error);
// }
//above code block will remove content inside README.md if it already exist
// we have other ways to append content

//Append File
// try {
//     await fs.appendFile("README.md", "\n Hello NODEPLAYER2");
// } catch (error) {
//     console.log(error);
// }
//Read File 
// try {
//     const data = await fs.readFile('README.md', "utf-8");
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

//Copy File
// try {
//     await fs.copyFile("README.md", "info.txt");
// } catch (error) {
//     console.log(error);
// }

// Get File Information
try {
    const info = await fs.stat("info.txt");
    // console.log(info);
    console.log(info.isDirectory());
    console.log(info.isFile());
} catch (error) {
    console.log(error);
}