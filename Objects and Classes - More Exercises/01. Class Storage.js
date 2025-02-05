class Storage{
        storage;
        totalCost;
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }
    	addProduct(product){
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.price * product.quantity;
        }
    	getProducts(){
            let jsonArray = [];
            for(let x of this.storage){
                jsonArray.push(JSON.stringify(x));
            }

            return jsonArray.join('\n');
        }
    }