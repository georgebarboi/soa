import {api_items} from "./items-Api";

class ItemService {
    async retrieveItems() {
        return fetch(api_items.readAll(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    async getItemById(itemId) {
        console.debug("ItemService.getItem():");
        console.debug("Item: " + itemId);
        return fetch(api_items.readId(itemId), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    async createItem(newitem) {
        console.debug("ItemService.createItem():");
        console.debug(newitem);
        return fetch(api_items.create(), {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newitem)
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    async deleteItem(itemId) {
        console.debug("ItemService.deleteItem():");
        console.debug("item: " + itemId);
        return fetch(api_items.delete(itemId), {
            method: "DELETE",
            mode: "cors"
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    async updateItem(item, itemId) {
        console.debug("ItemService.updateItem():");
        console.debug(item);
        return fetch(api_items.update(itemId), {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    handleResponseError(response) {
        throw new Error("HTTP error, status = " + response.status);
    }
    handleError(error) {
        console.debug(error.message);
    }
}
export default ItemService;