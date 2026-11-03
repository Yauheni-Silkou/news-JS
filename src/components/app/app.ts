import AppController from '../controller/controller';
import AppView from '../view/appView';

class App {
    private controller: AppController;
    private view: Record<string, any>;

    constructor() {
        this.controller = new AppController();
        this.view = new (AppView as any)();
    }

    public start(): void {
        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.addEventListener('click', (e: Event) => 
                this.controller.getNews(e, (data) => this.view.drawNews(data))
            );
        }
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
