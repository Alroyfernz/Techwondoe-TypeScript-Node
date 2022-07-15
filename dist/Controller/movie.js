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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("../Model/Movie"));
const newMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = new Movie_1.default(req.body);
        const savedMovie = yield movie.save();
        res.status(200).json({
            message: 'New Move has been added to list',
            data: savedMovie
        });
    }
    catch (error) {
        res.send(404).json({
            message: `Error caused by ${error.message}`
        });
    }
});
const removeMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { movieId } = req.params;
    try {
        yield Movie_1.default.deleteOne({ _id: movieId });
        res.status(200).json({
            message: "Movie succesfully removed from list.."
        });
    }
    catch (error) {
        res.status(404).json({
            message: `Error caused due to ${error.message}`
        });
    }
});
module.exports = { newMovie, removeMovie };
