import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

function getString(message: string): Promise<string> {
        return new Promise((resolve) => {
                rl.question(message + ': ', (userInput) => {
                        resolve(userInput || "");
                });
        });
}

async function updateFile(): Promise<string> {
        const fileName: string = await getString("Enter the name of your note");
        const filePath: string = path.join(__dirname, '../notes', fileName);
        return filePath;
}

async function createNote(filePath: string) {
        const note: string = await getString("Enter your notes");
        fs.writeFile(filePath, note, () => {
                console.log("File written successfully in the 'notes' folder!");
        });
}

function displayMenu() {
        console.log("Menu:");
        console.log("1. Create Note");
        console.log("2. Edit Note");
        console.log("3. View Notes");
        console.log("4. Delete Note");
        console.log("5. Exit");
}

async function viewNotes(filePath: string) {
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log("Your notes:", data);
        await getString("Press Enter to continue...");
}

function deleteNote(filePath: string) {
        fs.unlink(filePath, () => {
                console.log("Note deleted successfully!");
        });
}

async function editNote(filePath: string) {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log("Current note:", data);
        const newNote: string = await getString("Enter your updated notes");
        fs.writeFileSync(filePath, newNote);
        console.log("Note updated successfully!");
}

async function operation(choice: string) {
        const filePath: string = await updateFile();

        switch (choice) {
                case '1':
                        await createNote(filePath);
                        break;
                case '2':
                        await editNote(filePath);
                        break;
                case '3':
                        await viewNotes(filePath);
                        break;
                case '4':
                        deleteNote(filePath);
                        break;
                case '5':
                        console.log('Exiting program');
                        rl.close();
                        process.exit(0);
                default:
                        console.log("Invalid choice. Please try again.");
        }
}

async function main() {
        while (true) {
                displayMenu();
                const option: string = await getString("Enter an option");
                await operation(option);
        }
}

main();
