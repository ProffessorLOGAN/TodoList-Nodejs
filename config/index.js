import dotenv from 'dotenv';

dotenv.config();

export const {
    DB_URL=`mongodb+srv://proffessor:logan@cluster0.adfkkil.mongodb.net/todolist`,
    PORT=3001

} = process.env;