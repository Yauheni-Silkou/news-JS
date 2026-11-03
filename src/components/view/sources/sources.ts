import { NewsSource } from '../../../types';
import './sources.css';

class Sources {
    public draw(data: any): void {
        let sources: NewsSource[] = [];
        if (Array.isArray(data)) {
            sources = data;
        } else if (data?.sources) {
            sources = data.sources;
        } else if (data?.data?.sources) {
            sources = data.data.sources;
        }

        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        if (!sourceItemTemp) return;

        sources.forEach((item: NewsSource) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const itemName = sourceClone.querySelector('.source__item-name');
            if (itemName) itemName.textContent = item.name;

            const itemContainer = sourceClone.querySelector('.source__item');
            if (itemContainer) itemContainer.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.innerHTML = ''; // Clear stale buttons if any
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
