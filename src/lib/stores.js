import { writable } from 'svelte/store';

function createInventoryStore() {
    let initialInventory = { cleaning: [], foods: [], household: [] };

    if (typeof window !== 'undefined') {
        const storedInventory = localStorage.getItem('inventory');
        if (storedInventory) {
            try {
                const parsedInventory = JSON.parse(storedInventory);
                initialInventory = {
                    cleaning: parsedInventory.cleaning || [], 
                    foods: parsedInventory.foods || [], 
                    household: parsedInventory.household || [] 
                };
            } catch {
                console.error('Helyi tárolási adatok sérültek. Üres készlet inicializálva.');
                initialInventory = { cleaning: [], foods: [], household: [] };
            }
        }
    }

    const store = writable(initialInventory);

    store.subscribe((value) => {
        console.log('Aktuális készlet:', value);
        if (typeof window !== 'undefined') {
            localStorage.setItem('inventory', JSON.stringify(value));
        }
    });

    store.reset = () => {
        store.set({cleaning: [], foods: [], household: [] });
        if (typeof window !== 'undefined') {
            localStorage.removeItem('inventory');
        }
    };

    return store;

}

export const inventory = createInventoryStore();

export const shoppingList = writable([]);


if (typeof window !== 'undefined') {
    window.inventory = inventory;
    window.shoppingList = shoppingList;
}


 