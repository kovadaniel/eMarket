import axios from "axios";

class PostService{
    /*
    static async getProducts(){
        const response = await axios.get('https://fakestoreapi.com/products');
        return response;
    }
    */
    static async getProducts(limit = 9){
        //const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        const response = await axios.get('https://fakestoreapi.com/products', {
            params: {
                limit: limit,
            }
        })
        return response;        
    }

    static async getCategoryProducts(category, limit = 9){
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`, {
            params: {
                limit: limit,
            }
        })
        return response;
    }
    /*
    static async getUsers(){
        const response = await axios.get('https://fakestoreapi.com/users');
        const users = response.data;

        // manual adding url-image and review. In real project this information should be giver by server
        return users.map(user => {
            user.url = `https://robohash.org/${user.username}.png`;
            user.review = "“Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”"
            return user;
        });
    }
    */

    static async getUsers(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = [...response.data];

        // manual adding url-image and review. In real project this information should be giver by server
        return users.map(user => {
            user.url = `https://robohash.org/${user.username}.png`;
            //user.review = "“Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            user.review = (user.company.catchPhrase + ' ').repeat(13);
            return user;
        });
    }

    static async getProduct(id){
        const response = await axios.get('https://fakestoreapi.com/products/' + id);
        
        const product = response.data;
        product.images = [
            product.image, 
            'https://valiza-ua.com/system/0147/3897/2.jpg', 
            'https://img.brandshop.ru/cache/products/r/ryukzak-fjallraven-numbers-foldsack-no-1-ochre-301_1104x1104.jpg',
            'https://s.r-gifts.ru/items_gallery/fjallraven/133460b.jpg',
            'https://img.fotosklad.ru/upload/iblock/9ed/9ed85baad18616760917ba6f29952746_thumb_4d76a05b13f4590.jpg'
        ];

        product.fullDescription = {
            title: product.title,
            price: product.price,
            text: (product.description + ' ').repeat(3) + '\n' + (product.description + ' ').repeat(3),
            motto: {
                title: 'Keep it simple',
                body: 'Ullam dolorum iure dolore dicta fuga ipsa velit veritatis iure dolore dicta fuga ipsa velit'
            },
            sale: {
                title: 'More is less',
                body: 'Ullam dolorum iure dolore dicta fuga ipsa velit veritatis iure dolore dicta fuga ipsa velit'
            }
        };

        product.specification = [
            'Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas eius',
            'Adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi',
            'Veritatis tenetur odio delectus quibusdam officiis est.',
            'Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis est.',
            'Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas eius',
            'Adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi',
            'Veritatis tenetur odio delectus quibusdam officiis est.',
            'Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis est.',

        ];

        product.rating = {
            ...product.rating, 
            comments: [
                {
                    name: 'Vasya Pupkin',
                    rate: 5,
                    text: 'Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis est.'
                },
                {
                    name: 'Semen Imen',
                    rate: 4,
                    text: 'Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis est.'
                },

            ]
        }

        return product;
    }
}

export default PostService;