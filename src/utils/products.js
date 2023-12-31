import Product1 from '../assets/images/product1.jpg'
import Product2 from '../assets/images/product2.jpg'
import Product3 from '../assets/images/product3.jpg'
import Product4 from '../assets/images/product4.jpg'
import Product5 from '../assets/images/product5.jpg'

export const recommended_items = [
    {
        slug: 'green-salad-with-mashed-potatots',
        code: Math.floor(Math.random() * 400),
        name: 'Green salad with mashed potatots',
        price: '13.65',
        image: Product1,
        discount: '',
        discountPrice: '',
    },
    {
        slug: 'fresh-vegetable-salad',
        code: Math.floor(Math.random() * 400),
        name: 'Fresh vegetable salad',
        price: '10.90',
        image: Product2,
        discount: '',
        discountPrice: '',
    },
    {
        slug: 'grilled-beef-steak-with-mushroom-sauce',
        code: Math.floor(Math.random() * 400),
        name: 'Grilled beef steak with mushroom sauce',
        price: '09.40',
        image: Product3,
        discount: '',
        discountPrice: '',
    },
    {
        slug: 'mixed-salad-with-strawberries-and-watermelon',
        code: Math.floor(Math.random() * 400),
        name: 'Mixed salad with strawberries and watermelon',
        price: '11.65',
        image: Product4,
        discount: '',
        discountPrice: '',
    },
]
export const most_popular = [
    {
        slug: 'fresh-vegetable-salad',
        code: Math.floor(Math.random() * 400),
        name: 'Fresh vegetable salad',
        price: '10.90',
        image: Product2,
        discount: '',
        discountPrice: '',
    },
    {
        slug: 'grilled-beef-steak-with-mushroom-sauce',
        code: Math.floor(Math.random() * 400),
        name: 'Grilled beef steak with mushroom sauce',
        price: '09.40',
        image: Product3,
        discount: '',
        discountPrice: '',
    },
    {
        slug: 'mixed-salad-with-strawberries-and-watermelon',
        code: Math.floor(Math.random() * 400),
        name: 'Mixed salad with strawberries and watermelon',
        price: '11.65',
        image: Product4,
        discount: '',
        discountPrice: '',
    },
    {
        slug: 'green-salad-with-mashed-potatots',
        code: Math.floor(Math.random() * 400),
        name: 'Green salad with mashed potatots',
        price: '13.65',
        image: Product5,
        discount: '',
        discountPrice: '',
    },
]
export const discount = [
    {
        slug: 'mixed-salad-with-strawberries-and-watermelon',
        code: Math.floor(Math.random() * 400),
        name: 'Mixed salad with strawberries and watermelon',
        discount: 14,
        discountPrice: '09.30',
        price: 11.65,
        image: Product4,
    },
    {
        slug: 'fresh-vegetable-salad',
        code: Math.floor(Math.random() * 400),
        name: 'Fresh vegetable salad',
        discount: 10,
        discountPrice: '08.02',
        price: 10.90,
        image: Product2,
    },
    {
        slug: 'green-salad-with-mashed-potatots',
        code: Math.floor(Math.random() * 400),
        name: 'Green salad with mashed potatots',
        discount: '08',
        discountPrice: '10.11',
        price: 13.65,
        image: Product5,
    },
    {
        slug: 'grilled-beef-steak-with-mushroom-sauce',
        code: Math.floor(Math.random() * 400),
        name: 'Grilled beef steak with mushroom sauce',
        discount: '05',
        discountPrice: '07.69',
        price: 10.65,
        image: Product1,
    },
]
