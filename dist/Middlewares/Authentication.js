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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const SECRET_KEY = process.env.PRIVATE_KEY;
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    try {
        if (!token)
            return res.status(401).json({
                message: "You are not authorized to access this route",
            });
        const user = yield jsonwebtoken_1.default.verify(token, SECRET_KEY);
        if (user)
            next();
    }
    catch (error) {
        return res.status(403).json(`Error occured due to ${error.message}`);
    }
});
