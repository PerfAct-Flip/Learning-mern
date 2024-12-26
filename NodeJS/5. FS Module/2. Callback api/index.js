import * as fs from "fs";

fs.mkdir('d:\\MERN\\Nodejs\\Mod', function (error) {
    if (error) throw error;
    console.log("Directory Created ...")
})