export function capitalizeFirstLetter(string){
    return string.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function imgLoaded(imgElement) {
    return imgElement.complete && imgElement.naturalHeight !== 0;
  }

  /**
   * creates a range of slides to be present in real DOM-tree (some to the left, some to the right)
   * @param {*} amount = 5
   * @returns [-2, -1, 0, 1, 2]
   */
export function makeRange(amount = 5){
    const output = [];
    for(let i = -amount; i <= amount; i++){
        output.push(i);
    }
    return output;
}

export function truncateText(text, size){
    if(size >= text.length) return text;
    return text.slice(0, size) + '...';
}

/**
 * In order to store userCart we use localStorage that can store only strings
 * The format for storing data about client's cart is this:
 *  '<product-id>-<amount> <product-id>-<amount>' 
 * e.g. '34-2 55-1' means 2 products with id==34 and one product with id==55 in the cart
 */

/**
 * This function rearranges a string with products' ids to an ordered array of objects
 * @param {*} string of <productId>-<amountInCart> separated by whitespaces '12-1 15-2 345-1 15-1 9-3'
 * @returns {[{id: <number>, amount: <number>}]} 
 */
export function parseStorage(storage = ''){
    const productsData = storage.split(' ').slice(1); 
    // use .slice(1) to remove initial value of localStorage.cart = ''
    // without it we get additional ghost-product with {id: '', amount: undefined}
    return productsData.map(p => {
        const arr = p.split('-');
        return {id: parseInt(arr[0]), amount: parseInt(arr[1])}
    });
}

/**
 * this function adds one item of a given product to storage
 */
export function addToStorage(id, storage){
    const mold = new RegExp('\\b' + id + '-' + '(\\d+)', 'g');
    const result = mold.exec(storage);

    if(result){
        return storage.replace(mold, id + '-' + (parseInt(result[1]) + 1))
    } else{ // if an item with a given id in not in our cart
        return storage + ` ${id}-1` // add it to the cart
    }
}
/**
 * this function adds one item of a given product from localStorage
 */
export function subtractFromStorage(id, storage){
    console.log('subtracting...');
    const mold = new RegExp('\\b' + id + '-' + '(\\d+)', 'g');
    const result = mold.exec(storage);

    if(result){ // if we have item with a given id in our cart
        if(result[1] > 1){ // if amount of these items is more than 1
            return storage.replace(mold, id + '-' + (parseInt(result[1]) - 1)) 
        }
    }
    return storage;

}
/**
 * this function completely removes a given product from localStorage
 */
export function removeFromStorage(id, storage){
    const mold = new RegExp('[\\b||\\s]' + id + '-' + '(\\d+)', 'g');
    const result = mold.exec(storage);
    if(result){ // if we have item with a given id in our cart
        return storage.replace(mold, '') 
    }
    return storage;
}

/**
 * this function counts amount of products in the cart from localStorage
 */
export function amountInCart(storage){
    if(storage === '') return 0;
    const nmbrs= storage.split(' ').slice(1);
    const numbers = nmbrs.map(productInfo => productInfo.split('-')[1]);
    const total = numbers.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0)
    return total;
}

/**
 * this function returns amount of a given product-id in the cart from localStorage
 */
export function productsInCart(id, storage){
    if(storage === '') return 0;
    const nmbrs = storage.split(' ').slice(1);
    for(const productInfo of nmbrs){
        const info = productInfo.split('-');
        if(parseInt(info[0]) === parseInt(id)){
            return info[1];
        } 
    }
    return 0;
}