import * as fs from 'fs';
import * as path from 'path';

function getString(message: string) {
        const userInput: string | null = prompt(message + ': ');
        return userInput !== null ? userInput : "";
}

var fileName: string = getString("Enter the name of your note")

const filePath: string = path.join(__dirname, '../notes', fileName);

var note: string = getString("Enter your notes")
fs.writeFile(filePath, note, (err) => {
        if (err) {
                console.error("Error writing file:", err);
        } else {
                console.log("File written successfully in the 'notes' folder!");
        }
});

