import { staticImages } from "../utils/images";

const navMenuData = [
  {
    id: "nav-menu-1",
    menuLink: "/postad",
    menuText: "Post Add",
  },
  {
    id: "nav-menu-2",
    menuLink: "/buy",
    menuText: "Buy Pets",
  },
  {
    id: "nav-menu-3",
    menuLink: "/adopt",
    menuText: "Adopt Pets",
  },
  {
    id: "nav-menu-4",
    menuLink: "/accessories",
    menuText: "Buy Accessories",
  },
  {
    id: "nav-menu-5",
    menuLink: "/Intro",
    menuText: "About Us",
  },
  {
    id: "nav-menu-6",
    menuLink: "/contact",
    menuText: "Contact Us",
  },
  // {
  //   id: "nav-menu-7",
  //   menuLink: "/feedback",
  //   menuText: "Feedback",
  // },
];

const sideMenuData = [
  {
    id: "side-menu-1",
    menuLink: "/home",
    menuText: "Home",
    iconName: "house",
  },
  {
    id: "side-menu-2",
    menuLink: "/accessories",
    menuText: "Products",
    iconName: "grid-fill",
  },
  {
    id: "side-menu-4",
    menuLink: "/account",
    menuText: "My Account",
    iconName: "person-fill",
  },
  {
    id: "side-menu-5",
    menuLink: "/cart",
    menuText: "Cart",
    iconName: "bag-check-fill",
  },
];

const bannerData = [
  {
    id: "banner-1",
    topText: "Welcome to Janwar!",
    titleText: "Where Tails Wag and Hearts Purr",
    bottomText: "Discover Your Perfect Companion Today!",
    buttonLink: "/buy",
    buttonText: "Shop Now",
    imgSource: staticImages.hero_img1,
  },
  {
    id: "banner-2",
    topText: "From Paws to Claws, We've Got it All",
    titleText: "Explore Now!",
    bottomText: "Fur-ever Love Awaits",
    buttonLink: "/buy",
    buttonText: "Shop Now",
    imgSource: staticImages.hero_img2,
  },
  {
    id: "banner-3",
    topText: "Your One-Stop Shop for Everything Pet-Related!",
    titleText: "Adopt, Shop Accessories, or Buy Adorable Pet!",
    bottomText: "Where Every Pet is Family",
    buttonLink: "/accessories",
    buttonText: "Shop Now",
    imgSource: staticImages.hero_img3,
  },
  {
    id: "banner-4",
    topText: "Tail-Wagging Deals Await",
    titleText: "Shop Now for Your Furry Friend!",
    bottomText: "Explore Our Wide Selection Today!",
    buttonLink: "/adopt",
    buttonText: "Shop Now",
    imgSource: staticImages.hero_img4,
  },
];

const featuredData = [
  {
    id: "featured-1",
    imgSource: staticImages.img1,
    topText: "Upgrade Your Pet's Style",
    largeText: "Shop Now for Trendy Accessories!",
    bottomText: "Explore Our Accessories Collection Now!",
    buttonLink: "/accessories",
    buttonText: "Explore Items",
  },
  {
    id: "featured-2",
    imgSource: staticImages.img2,
    topText: "Unconditional Love Comes in All Shapes and Sizes",
    largeText: "Find Your Furry Soulmate",
    bottomText: "Adopt a Pet and Discover a Lifetime of Happiness!",
    buttonLink: "/buy",
    buttonText: "Explore Items",
  },
];

const newArrivalData = [
  {
    id: "new-arrival-1",
    imgSource: staticImages.product1,
    title: "German Shepherd",
  },
  {
    id: "new-arrival-2",
    imgSource: staticImages.product2,
    title: "Persian Cat",
  },
  {
    id: "new-arrival-3",
    imgSource: staticImages.product3,
    title: "Sun Conure",
  },
  {
    id: "new-arrival-4",
    imgSource: staticImages.product4,
    title: "Pineapple Conure",
  },
  {
    id: "new-arrival-5",
    imgSource: staticImages.product5,
    title: "Grey Parrot",
  },
  {
    id: "new-arrival-6",
    imgSource: staticImages.product6,
    title: "Lorry",
  },
  {
    id: "new-arrival-7",
    imgSource: staticImages.product7,
    title: "Rottwiler",
  },
];

const savingZoneData = [
  {
    id: "saving-z-1",
    imgSource: staticImages.bigzone1,
    title: "Dog Collar",
    description: "Comfortable and available in all size",
    discount: 50,
    isLimited: false,
  },
  {
    id: "saving-z-2",
    imgSource: staticImages.bigzone2,
    title: "Grooming Brush",
    description: "For Cats and Dogs",
    discount: 40,
    isLimited: true,
  },
  {
    id: "saving-z-3",
    imgSource: staticImages.bigzone3,
    title: "Parrot Harness",
    description: "Available for all size of parrots",
    discount: 50,
    isLimited: false,
  },
  {
    id: "saving-z-4",
    imgSource: staticImages.bigzone4,
    title: "Dog Food",
    description: "Best Choice for your Dog",
    discount: 20,
    isLimited: false,
  },
  {
    id: "saving-z-5",
    imgSource: staticImages.bigzone5,
    title: "Cat Food",
    description: "Best Choice for your Cat",
    discount: 60,
    isLimited: false,
  },
];
const PetsForSale = [
  {
    id: "PetSell-1",
    imgSource: staticImages.product7,
    title: "Rottwiler",
    description: "Dogs Of All Breeds can be Found Here",
  },
  {
    id: "PetSell-2",
    imgSource: staticImages.product6,
    title: "Lorry",
    description: "The Most Colourful of Birds",
  },
  {
    id: "PetSell-3",
    imgSource: staticImages.product5,
    title: "Grey Parrot",
    description: "All Types of Parrots from the African Grey to Macaw",
  },
  {
    id: "PetSell-4",
    imgSource: staticImages.product2,
    title: "Persian Cat",
    description: "If Your Not a Dog Person, We Definitly Got Cats!!",
  },
  {
    id: "PetSell-5",
    imgSource: staticImages.product3,
    title: "Sun Conure",
    description: "Your Tiny Best Friend is Right Here!",
  },
];
const PetsForSale2 = [
  {
    id: "PetSell-1",
    imgSource: staticImages.product1,
    title: "German Shepherd",
    description: "Dog Lovers Will Love it Here",
  },
  {
    id: "PetSell-2",
    imgSource: staticImages.hero_img1,
    title: "Scarlet Macaw",
    description: "Unlock a world of vibrant colors and endless chatter",
  },
  {
    id: "PetSell-3",
    imgSource: staticImages.hero_img2,
    title: "Amazon Parrot",
    description: "Embrace the charm and intelligence of the Amazon Parrot",
  },
  {
    id: "PetSell-4",
    imgSource: staticImages.hero_img3,
    title: "Persian Cat",
    description: "Meow Meow The Loneliness Away With a Lovely Cat",
  },
  {
    id: "PetSell-5",
    imgSource: staticImages.hero_img4,
    title: "Macaw",
    description: " Bringing Lively Conversations and Colorful Companionship to your Home",
  },
];

const products = [
  {
    id: 1,
    imgSource: staticImages.product1,
    title: "German Shepherd",
    brand: "Dogs",
    price: 123.0,
  },
  {
    id: 2,
    imgSource: staticImages.product2,
    title: "Persian Cat",
    brand: "Cats",
    price: 123.0,
  },
  {
    id: 3,
    imgSource: staticImages.product3,
    title: "Sun Conure",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 4,
    imgSource: staticImages.product4,
    title: "Pineapple Conure",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 5,
    imgSource: staticImages.product5,
    title: "Grey Parrot",
    brand: "birds",
    price: 123.0,
  },
  {
    id: 6,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 7,
    imgSource: staticImages.product7,
    title: "Rottwiler",
    brand: "Dogs",
    price: 123.0,
  },
  {
    id: 8,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 9,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 10,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 11,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 12,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 13,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 14,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 15,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 16,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 17,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 18,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
  {
    id: 19,
    imgSource: staticImages.product6,
    title: "Lorry",
    brand: "Birds",
    price: 123.0,
  },
];

const mensCatalog = [...products.slice(4, 11), products[1]];

const womensCatalog = [products.slice(11, 15)];

const limelightCatalog = products.slice(15, 19);

const brandsData = [
  {
    id: "brand-1",
    imgSource: staticImages.brand1,
  },
  {
    id: "brand-2",
    imgSource: staticImages.brand2,
  },
  {
    id: "brand-3",
    imgSource: staticImages.brand3,
  },
  {
    id: "brand-4",
    imgSource: staticImages.brand4,
  },
  {
    id: "brand-5",
    imgSource: staticImages.brand5,
  },
];

const feedbackData = [
  {
    id: "feedback-1",
    imgSource: staticImages.test1,
    name: "Floyd Miles",
    designation: "Buying a Dog",
    rating: 5,
    feedbackText:
     "I recently purchased a German Shepherd from Janwar, and I couldn't be happier! The entire process was smooth, from browsing through the available breeds to bringing home my new furry friend. Thank you for helping me find my perfect companion!" 
  },
  {
    id: "feedback-2",
    imgSource: staticImages.test2,
    name: "Ronald Richards",
    designation: "Buying Accessories",
    rating: 4,
    feedbackText:
      "I love shopping for pet accessories on Janwar! The selection is fantastic, and I always find stylish and durable products for my furry friend. Plus, the checkout process is quick and hassle-free. Highly recommend!",
  },
  {
    id: "feedback-3",
    imgSource: staticImages.test3,
    name: "Savannah Nguyen",
    designation: "Adopting a Pet",
    rating: 4,
    feedbackText:
      "Adopting my Persian Cat from Janwar was such a rewarding experience. The team was incredibly helpful throughout the adoption process, providing valuable guidance and support. My cat has brought so much joy into my life, and I'm grateful to Janwar for helping us find each other. ",
  },
  {
    id: "feedback-4",
    imgSource: staticImages.test4,
    name: "Arthur Ramsay",
    designation: "Selling a Pet",
    rating: 4,
    feedbackText:
      "I recently listed my Sun Conure for adoption on Janwar, and I was impressed by how easy and effective the process was. The platform provided excellent visibility for my listing, and I quickly found a loving home for my pet. Thank you for helping me connect with responsible pet owners!",
  },
];

const footerData = [
  {
    id: "f_need_help",
    title: "Need Help",
    links: [
      { text: "Contact Us", url: "/contact" },
      { text: "Track Order", url: "/track_order" },
      { text: "Returns & Refunds", url: "/returns_refunds" },
      { text: "FAQ's", url: "/faqs" },
      { text: "Career", url: "/career" },
    ],
  },
  {
    id: "f_company",
    title: "Company",
    links: [
      { text: "About Us", url: "/contact" },
      { text: "Janwar Blog", url: "/blog" },
      { text: "Achatsian", url: "/achatsian" },
      { text: "Collaboration", url: "/collaboration" },
      { text: "Media", url: "/media" },
    ],
  },
  {
    id: "f_more_info",
    title: "More info",
    links: [
      { text: "Terms and conditions", url: "/tac" },
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Shipping Policy", url: "/shipping" },
      { text: "Sitemap", url: "/sitemap" },
    ],
  },
  {
    id: "f_location",
    title: "Location",
    lists: [
      { text: "Tsupport@euphoria.in" },
      { text: "Highland Strett, A04 Street 4014" },
      { text: "New York City, USA" },
      { text: "Phone: +000 999 8888" },
    ],
  },
];

const cartItems = [
  {
    id: "C001",
    title: "Blue Flower Print Crop Top",
    color: "Yellow",
    size: "M",
    price: 29.0,
    quantity: 2,
    shipping: 0.0,
    imgSource: staticImages.cart1,
  },
  {
    id: "C002",
    title: "Blue Flower Print Crop Top",
    color: "Blue",
    size: "XL",
    price: 199.0,
    quantity: 5,
    shipping: 0.0,
    imgSource: staticImages.cart2,
  },
  {
    id: "C003",
    title: "Blue Flower Print Crop Top",
    color: "Yellow",
    size: "M",
    price: 123.0,
    quantity: 1,
    shipping: 5.0,
    imgSource: staticImages.cart3,
  },
];

const ProductFilterList = [
  {
    id: "prod_filter_1",
    title: "Dogs",
  },
  {
    id: "prod_filter_2",
    title: "Cats",
  },
  {
    id: "prod_filter_3",
    title: "Birds",
  },
  {
    id: "prod_filter_4",
    title: "Fishes",
  },
  {
    id: "prod_filter_5",
    title: "Reptiles",
  },
  {
    id: "prod_filter_6",
    title: "Exotic Pets",
  },
  {
    id: "prod_filter_7",
    title: "Small mammals",
  },
  {
    id: "prod_filter_8",
    title: "Farm animals",
  },
];

const StyleFilterList = [
  {
    id: "style_filter_1",
    title: "Classic",
  },
  {
    id: "style_filter_2",
    title: "Casual",
  },
  {
    id: "style_filter_3",
    title: "Business",
  },
  {
    id: "style_filter_4",
    title: "Sport",
  },
  {
    id: "style_filter_5",
    title: "Elegant",
  },
  {
    id: "style_filter_6",
    title: "Formal (evening)",
  },
];

const pricingData = [
  {
    id: "pricing_1",
    name: "Pick Any 4- Womens Plain T-shirt Combo",
    price: 19,
  },
  {
    id: "pricing_2",
    name: "Pick Any 4- Plain Womens Boxer Combo",
    price: 18,
  },
  {
    id: "pricing_3",
    name: "Multicolor Checkered Long Casual Shirts for Women",
    price: 16.7,
  },
  {
    id: "pricing_4",
    name: "Pick Any 4 - Women Plain Full Sleeve T-shirt Combo",
    price: 12,
  },
  {
    id: "pricing_5",
    name: "Pick Any 2: Plain Boxy Casual Shirts for Women Combo",
    price: 9.8,
  },
  {
    id: "pricing_6",
    name: "Jade Black Narrow Cut Flexible Women Jeggings",
    price: 15,
  },
  {
    id: "pricing_7",
    name: "Mustard-yellow Solid Straight-Fit Women Pant",
    price: 6.7,
  },
  {
    id: "pricing_8",
    name: "Pista Green Solid Boxy Casual Shirts for Women",
    price: 9,
  },
];

const servicesData = [
  {
    id: "service_1",
    icon: staticImages.card_icon,
    text: "Secure Payment",
  },
  {
    id: "service_3",
    icon: staticImages.shipping_icon,
    text: "Free Shipping",
  },
];

const product_one = {
  id: "product_01",
  title: "German Shepherd",
  previewImages: [
    {
      id: "preview1",
      imgSource: staticImages.preview1,
    },
    {
      id: "preview2",
      imgSource: staticImages.preview2,
    },
    {
      id: "preview3",
      imgSource: staticImages.preview3,
    },
    {
      id: "preview4",
      imgSource: staticImages.preview1,
    },
    {
      id: "preview5",
      imgSource: staticImages.preview2,
    },
  ],
  rating: 3.5,
  colors: ["#3C4242", "#EDD146", "#EB84B0", "#9C1F35"],
  price: 123.0,
};

const productDescriptionTabHeads = [
  {
    id: "tab-description",
    tabHead: "tabDescription",
    tabText: "Description",
    badgeValue: null,
    badgeColor: "",
  },

  {
    id: "tab-QNA",
    tabHead: "tabQNA",
    tabText: "Question & Answer",
    badgeValue: 4,
    badgeColor: "outerspace",
  },
];

const orderData = [
  {
    id: "order_1",
    order_no: "#5558760098",
    order_date: "2 June 2023 2:40 PM",
    status: "Delivered",
    delivery_date: "8 June 2023",
    payment_method: "Cash on Delivery",
    items: [
      {
        id: "product_01",
        name: "German Shepard",
        color: "White",
        quantity: 1,
        price: 23,
        imgSource: staticImages.cart1,
      },
      {
        id: "product_02",
        name: "Sunconure",
        color: "Golden",
        quantity: 5,
        price: 21,
        imgSource: staticImages.cart2,
      },
      {
        id: "product_03",
        name: "Persian cat",
        color: "White",
        quantity: 10,
        price: 90,
        imgSource: staticImages.cart3,
      },
    ],
  },
  {
    id: "order_2",
    order_no: "#8958360118",
    order_date: "2 June 2023 2:40 PM",
    status: "inprogress",
    delivery_date: "12 August 2023",
    payment_method: "Online Payment",
    items: [
      {
        id: "product_04",
        name: "Sunconure",
        color: "Golden",
        quantity: 5,
        price: 21,
        imgSource: staticImages.cart2,
      },
      {
        id: "product_05",
        name: "German Shepard",
        color: "Brown",
        quantity: 1,
        price: 23,
        imgSource: staticImages.cart1,
      },
      {
        id: "product_08",
        name: "Persian Cat",
        color: "White",
        quantity: 10,
        price: 90,
        imgSource: staticImages.cart3,
      },
    ],
  },
];

const wishlistData = [
  {
    id: "wishlist_1",
    name: "Sunconure",
    color: "yellow",
    quantity: 1,
    price: 29,
    imgSource: staticImages.wishitem1,
  },
  {
    id: "wishlist_2",
    name: "Pineapple Conure",
    color: "yellow",
    quantity: 4,
    price: 40,
    imgSource: staticImages.wishitem2,
  },
  {
    id: "wishlist_3",
    name: "Rottwiler",
    color: "black",
    quantity: 1,
    price: 123,
    imgSource: staticImages.wishitem3,
  },
  {
    id: "wishlist_4",
    name: "Persian Cat",
    color: "brown",
    quantity: 6,
    price: 42,
    imgSource: staticImages.wishitem4,
  },
];

const recentViewedData = products.slice(0, 4);

const cardsData = [
  {
    id: "card_1",
    imgSource: staticImages.paypal,
  },
  {
    id: "card_2",
    imgSource: staticImages.paypass,
  },
  {
    id: "card_3",
    imgSource: staticImages.googlePay,
  },
  {
    id: "card_4",
    imgSource: staticImages.visa,
  },
];

const socialLinksData = [
  {
    id: "social_link_1",
    site_name: "facebook",
    site_icon: "bi bi-facebook",
    site_url: "www.facbook.com",
  },
  {
    id: "social_link_2",
    site_name: "instagram",
    site_icon: "bi bi-instagram",
    site_url: "www.instagram.com",
  },
  {
    id: "social_link_3",
    site_name: "twitter",
    site_icon: "bi bi-twitter",
    site_url: "www.twitter.com",
  },
  {
    id: "social_link_4",
    site_name: "linkedin",
    site_icon: "bi bi-linkedin",
    site_url: "www.linkedin.com",
  },
];

export {
  products,
  cartItems,
  sideMenuData,
  navMenuData,
  bannerData,
  featuredData,
  savingZoneData,
  mensCatalog,
  womensCatalog,
  limelightCatalog,
  brandsData,
  newArrivalData,
  feedbackData,
  footerData,
  ProductFilterList,
  StyleFilterList,
  pricingData,
  servicesData,
  product_one,
  productDescriptionTabHeads,
  orderData,
  wishlistData,
  recentViewedData,
  cardsData,
  socialLinksData,
  PetsForSale,
  PetsForSale2,
};
