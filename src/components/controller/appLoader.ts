import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const apiLink: string = process.env.API_URL || 'https://onrender.com';
        const apiKey: string = process.env.API_KEY || '';

        super(apiLink, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;
