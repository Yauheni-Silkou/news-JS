import AppController from '../controller/controller';
import AppView from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesContainer = document.querySelector('.sources') as HTMLElement | null;

        if (sourcesContainer) {
            sourcesContainer.addEventListener('click', (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                const sourceItem = target.closest('.source__item') as HTMLElement | null;

                if (sourceItem) {
                    this.controller.getNews(e, (data) => this.view.drawNews(data));
                }
            });
        }

        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
