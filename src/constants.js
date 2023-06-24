//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard, faPaperPlane, faEye, faClock, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faWallet, faCartShopping, faStore, faH, faClapperboard, faTag } from '@fortawesome/free-solid-svg-icons';
import { faVk, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import dan from './img/dan.JPG';
import danil from './img/danil.JPG';
import daniel from './img/daniel.JPG';



// slider time
export const switchSlideTime = 15000; // ms
export const amountOfSlides = 8; // in a slider on the Main page
export const amountOfServicesInRow = 3; // important for transition-delay in appearance of each element in row
export const amountOfProductsInRow = 3; // important for transition-delay in appearance of each element in row
export const amountOfProductsOnMainPage = 6;
export const amountOfServicesOnMainPage = 3;
export const amountOfSlidesInDraggableSlider = 3; 
//export const amountOfSlidesInProductInDraggableSlider = 7;
export const dragSliderSensibility = .05; // from 0 to 1. Minimum percentage of a current slide to be dragged aside to turn the next slide
export const minHeightOfProductSlider = 400;
export const minHeightOfTestimoniesSlider = 400;
export const amountOfLoadingProductsOnProductsPage = 20;



// 'references' is a mold for references in <Navbar> and <SideMenu>
export const references = [
    {current: {title: 'Shop', ref: '/products'}, 
     content: [
        {title: 'Men\'s clothing', ref: '/products/men\'s clothing'},
        {title: 'Women\'s clothing', ref: '/products/women\'s clothing'},
        {title: 'Electronics', ref: '/products/electronics'},
        {title: 'Jewelery', ref: '/products/jewelery'},
     ]
    },
    {current: {title: 'About', ref: '/about'}, 
     content: null
    },
    {current: {title: 'Services', ref: '/services'}, 
     content: [
       {title: 'Delivery', ref: ''},
       {title: 'Post', ref: ''},
       {title: 'Application', ref: ''},
       {title: 'Feedback', ref: ''},
     ]
    },
    {current: {title: 'Contact', ref: ''}, 
     content: null},
]



export const servicesData = [
  { //id: 1,
    title: 'Credit Card',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quos, ab minus omnis voluptas officiis dolore iure. Rerum natus officia adipisci ratione, error, totam possimus ipsum iste numquam ipsam velit. Ipsum facilis nulla debitis eveniet!',
    fasIcon: faCreditCard,
    ref: '/'
  },
  { //id: 2,
    title: 'Save Money',
    description: 'Lorem ipsum, dolor sit amet  adipisicing elit. Modi quos, ab voluptas officiis dolore iure. Rerum natus officia adipisci ratione, error, totam possimus ipsum iste numquam ipsam velit. Ipsum facilis nulla debitis eveniet!',
    fasIcon: faWallet,
    ref: '/'
  },
  { //id: 3,
    title: 'Free Delivery',
    description: 'Lorem ipsum, dolor sit amet. Modi quos, ab minus omnis voluptas officiis dolore iure. Rerum natus officia adipisci ratione, error, totam possimus ipsum iste numquam ipsam velit.',
    fasIcon: faPaperPlane,
    ref: '/'
  },
  { //id: 4,
    title: 'Lifetime Warranty',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove',
    fasIcon: faCalendar,
    ref: '/'
  },
  { //id: 5,
    title: 'Branded Model',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ',
    fasIcon: faClapperboard,
    ref: '/'
  },  
  { //id: 6,
    title: 'Affordable',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Rerum natus officia adipisci ratione, error, totam possimus ipsum iste numquam ipsam velit.',
    fasIcon: faTag,
    ref: '/'
  },
]

export const countersData = [
  {
    fasIcon: faEye,
    count: 20070,
    label: 'Creativity fuel'
  },
  {
    fasIcon: faCartShopping,
    count: 450,
    label: 'Happy clients'
  },
  {
    fasIcon: faStore,
    count: 700,
    label: 'All products'
  },
  {
    fasIcon: faClock,
    count: 5605,
    label: 'Hours spent'
  },
  
]

export const socials = [
  { 
    name: 'VK',
    fasIcon: faVk,
    reference: 'https://vk.com/danielkov',
  },
  {
    name: 'Instagram',
    fasIcon: faInstagram,
    reference: 'https://www.instagram.com/daniel.room/',
  },
  {
    name: 'YouTube',
    fasIcon: faYoutube,
    reference: 'https://www.youtube.com/@user-li1zp6uf3p/about',
  },
  {
    name: 'HH',
    fasIcon: faH,
    reference: 'https://hh.ru/resume/23eb3fabff0bcfcab90039ed1f626345346e4d?customDomain=1',
  },
]



export const footerReferences = [
  {current: 
    {
      title: 'About',
      ref: '/about'
    }
  },
  {current: 
    {
      title: 'Help',
      ref: '/help'
    }
  },
  {current: 
    {
      title: 'Contact',
      ref: '/contact'
    }
  },
  {current: 
    {
      title: 'FAQs',
      ref: '/faq'
    }
  },
  {current: 
    {
      title: 'Meetups',
      ref: '/meetup'
    }
  },
  {current: 
    {
      title: 'Shop',
      ref: '/shop'
    }
  },
  {current: 
    {
      title: 'Privacy',
      ref: '/privacy'
    }
  },
  {current: 
    {
      title: 'Testimonials',
      ref: '/testimonials'
    }
  },
  {current: 
    {
      title: 'Handbook',
      ref: '/handbook'
    }
  },
  {current: 
    {
      title: 'Held Desk',
      ref: '/helddesk'
    }
  },
  {current: 
    {
      title: 'Returns & Exchanges',
      ref: '/return'
    }
  },
  {current: 
    {
      title: 'Demaged & Defected items',
      ref: '/defect'
    }
  },
  {current: 
    {
      title: 'Cancelling or Changing an Order',
      ref: '/order'
    }
  },
  {current: 
    {
      title: 'My Account',
      ref: '/account'
    }
  },
]


export const aboutTexts = [
  {
    title: 'Company History',
    text: 'TED’s mission statement is simple, which makes it stand out on this list. While you might find it ironic that a media organization that hosts hours of content would stick to a two word mission statement, it actually fits with their branding.\nTED exists to share ideas online for free, and talks are usually limited to only 18 minutes. This kind of rapid-fire idea sharing is what makes TED such a lasting presence in American and global culture.'
  },
  {
    title: 'Mission & Vission',
    text: 'Tesla focuses on enhancing the use of sustainable energy throughout the globe, so it’s no surprise that their mission statement reflects this. Plus, we love their use of “accelerate” right in the mission statement: it’s a great play on words that reflects their industry.\nThis mission statement narrows the focus down to Tesla’s core purpose: to provide clean energy electric vehicles to the public, while still acknowledging the ongoing transition between fossil fuels and sustainable energy. This self-awareness that their market is still relatively young sets Tesla apart as having one of the best mission statements.'
  }
]


export const team = [
  {
    name: 'Daniel Kovalenko',
    url: dan,
    post: 'Chief Executive Officer',
    review: 'Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.',
    socials: [
      { 
        name: 'VK',
        fasIcon: faVk,
        reference: 'https://vk.com/danielkov',
      },
      {
        name: 'Instagram',
        fasIcon: faInstagram,
        reference: 'https://www.instagram.com/daniel.room/',
      },
      {
        name: 'YouTube',
        fasIcon: faYoutube,
        reference: 'https://www.youtube.com/@user-li1zp6uf3p/about',
      },
      {
        name: 'HH',
        fasIcon: faH,
        reference: 'https://hh.ru/resume/23eb3fabff0bcfcab90039ed1f626345346e4d?customDomain=1',
      }
    ]
  },
  {
    name: 'Daniel Kovalenko',
    url: danil,
    post: 'Co-Owner',
    review: 'Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.',
    socials: [
      { 
        name: 'VK',
        fasIcon: faVk,
        reference: 'https://vk.com/danielkov',
      },
      {
        name: 'Instagram',
        fasIcon: faInstagram,
        reference: 'https://www.instagram.com/daniel.room/',
      },
      {
        name: 'YouTube',
        fasIcon: faYoutube,
        reference: 'https://www.youtube.com/@user-li1zp6uf3p/about',
      },
      {
        name: 'HH',
        fasIcon: faH,
        reference: 'https://hh.ru/resume/23eb3fabff0bcfcab90039ed1f626345346e4d?customDomain=1',
      }
    ]
  },
  {
    name: 'Daniel Kovalenko',
    url: daniel,
    post: 'Co-Owner',
    review: 'Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.',
    socials: [
      { 
        name: 'VK',
        fasIcon: faVk,
        reference: 'https://vk.com/danielkov',
      },
      {
        name: 'Instagram',
        fasIcon: faInstagram,
        reference: 'https://www.instagram.com/daniel.room/',
      },
      {
        name: 'YouTube',
        fasIcon: faYoutube,
        reference: 'https://www.youtube.com/@user-li1zp6uf3p/about',
      },
      {
        name: 'HH',
        fasIcon: faH,
        reference: 'https://hh.ru/resume/23eb3fabff0bcfcab90039ed1f626345346e4d?customDomain=1',
      }
    ]
  },
]


// standart variants for Motion Framer library that set basic appearance of elements
// when they first get in the user's screen view: fade-in amd move from bottom to top on 50 px
export const defaultAppearVariants = {
  visible: (i = 0) => ({opacity: 1, y: 0, transition: {duration: .5, delay: .3 * i}}),
  hidden: {opacity: 0, y: 50},
}

export const defaultTransition = {
  type: "tween",
  bounce: 0,
}
