import Loader from './loader';

const BASE_API_URL = 'https://rss-news-api.onrender.com/';

class AppLoader extends Loader {
    constructor() {
        super(BASE_API_URL, {
            apiKey: '', 
        });
    }
}

export default AppLoader;
