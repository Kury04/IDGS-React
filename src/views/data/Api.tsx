import axios from "axios";
const Api = axios.create({
    baseURL: 'https://api-react-native-ys7b.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    }
});
export {Api};