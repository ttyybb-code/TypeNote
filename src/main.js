"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getString(message) {
    return new Promise(function (resolve) {
        rl.question(message + ': ', function (userInput) {
            resolve(userInput || "");
        });
    });
}
function updateFile() {
    return __awaiter(this, void 0, void 0, function () {
        var fileName, filePath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getString("Enter the name of your note")];
                case 1:
                    fileName = _a.sent();
                    filePath = path.join(__dirname, '../notes', fileName);
                    return [2 /*return*/, filePath];
            }
        });
    });
}
function createNote(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var note;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getString("Enter your notes")];
                case 1:
                    note = _a.sent();
                    fs.writeFile(filePath, note, function () {
                        console.log("File written successfully in the 'notes' folder!");
                    });
                    return [2 /*return*/];
            }
        });
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
function viewNotes(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.promises.readFile(filePath, 'utf8')];
                case 1:
                    data = _a.sent();
                    console.log("Your notes:", data);
                    return [4 /*yield*/, getString("Press Enter to continue...")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function deleteNote(filePath) {
    fs.unlink(filePath, function () {
        console.log("Note deleted successfully!");
    });
}
function editNote(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var data, newNote;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs.readFileSync(filePath, 'utf8')];
                case 1:
                    data = _a.sent();
                    console.log("Current note:", data);
                    return [4 /*yield*/, getString("Enter your updated notes")];
                case 2:
                    newNote = _a.sent();
                    fs.writeFileSync(filePath, newNote);
                    console.log("Note updated successfully!");
                    return [2 /*return*/];
            }
        });
    });
}
function operation(choice) {
    return __awaiter(this, void 0, void 0, function () {
        var filePath, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, updateFile()];
                case 1:
                    filePath = _b.sent();
                    _a = choice;
                    switch (_a) {
                        case '1': return [3 /*break*/, 2];
                        case '2': return [3 /*break*/, 4];
                        case '3': return [3 /*break*/, 6];
                        case '4': return [3 /*break*/, 8];
                        case '5': return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 10];
                case 2: return [4 /*yield*/, createNote(filePath)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 4: return [4 /*yield*/, editNote(filePath)];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 6: return [4 /*yield*/, viewNotes(filePath)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 8:
                    deleteNote(filePath);
                    return [3 /*break*/, 11];
                case 9:
                    console.log('Exiting program');
                    rl.close();
                    process.exit(0);
                    return [3 /*break*/, 11];
                case 10:
                    console.log("Invalid choice. Please try again.");
                    _b.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var option;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 3];
                    displayMenu();
                    return [4 /*yield*/, getString("Enter an option")];
                case 1:
                    option = _a.sent();
                    return [4 /*yield*/, operation(option)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 3: return [2 /*return*/];
            }
        });
    });
}
main();
