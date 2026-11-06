const CUSTOM_IMAGES = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0OfNQi2H6SZ0eLvEVSC83LQxDbeZLZ64zZ1F6qu-Kg&s=10",
  "https://m.media-amazon.com/images/I/716301IoO6L.jpg",
  "https://m.media-amazon.com/images/I/71kBAml09tL.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh73nRVj4RjxCg0sMGAgcXIef4CqDPleKn603dRvKG3zPNqXraUrD-HENp&s=10",
  "https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/d4af3c1a-30d2-4218-9b9c-32f58722fee2/Darshana-Puja-Ghee.jpg",
  "https://m.media-amazon.com/images/I/719LCCmCn7L._AC_UF1000,1000_QL80_.jpg",
  "https://i.pinimg.com/1200x/a1/7e/e5/a17ee56e7945ac185577c865c4836135.jpg",
  "https://i.pinimg.com/1200x/64/5f/84/645f84f47ff21432bd2f7e9ab72970dc.jpg",
  "https://i.pinimg.com/736x/f2/9a/30/f29a300bfec4eb55c85951cb340831b8.jpg",
  "https://i.pinimg.com/1200x/c8/db/43/c8db435b5ed2dbae9b2c8ad39639472f.jpg",
  "https://i.pinimg.com/1200x/27/bf/f6/27bff6334ff3a603b0b110d955b121d9.jpg",
  "https://i.pinimg.com/1200x/ce/b7/d6/ceb7d6e0eba3935d85da2d37f1ee8875.jpg",
  "https://i.pinimg.com/1200x/68/be/5a/68be5add45d1c13ec8cf3e6d9c9ad550.jpg",
  "https://i.pinimg.com/736x/bb/6e/12/bb6e121b7569018a6ebc1d76c90e7270.jpg",
  "https://i.pinimg.com/736x/01/b0/34/01b034abeb31cb037c44251808f5acd6.jpg",
  "https://i.pinimg.com/1200x/d5/95/01/d59501dc8022b76b83d618e7a98deb3d.jpg"
];

window.aasthaDB = {
  products: [
    {
      id: 'kit-1',
      name: 'Lakshmi Puja Grand Kit',
      category: 'Kits',
      goal: 'Festivals',
      price: 1499,
      oldPrice: 1999,
      badge: 'BESTSELLER',
      rating: 4.9,
      reviews: 184,
      image: 'https://suyogini.in/cdn/shop/files/Gemini_Generated_Image_e0rkw9e0rkw9e0rk.png?v=1763901205&width=1200',
      description: 'Includes 5 brass diyas, kumkum, lotus seeds, camphor, and pure cow ghee.'
    },
    {
      id: 'kit-2',
      name: 'Satyanarayan Katha Kit',
      category: 'Kits',
      goal: 'Festivals',
      price: 999,
      oldPrice: 1299,
      badge: 'ESSENTIAL',
      rating: 4.8,
      reviews: 142,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLENfE87RyV_ed6ykviT3_t8GVPWMGHszYA-fIzZaJcaNnwampcCWZzAE&s=10',
      description: 'Complete ceremonial items including calibrated gangajal, red cloth, and sandalwood paste.'
    },
    {
      id: 'kit-3',
      name: 'Griha Pravesh Shanti Kit',
      category: 'Kits',
      goal: 'Festivals',
      price: 2199,
      oldPrice: 2699,
      badge: 'NEW HOME',
      rating: 5.0,
      reviews: 96,
      image: 'https://www.satvikly.com/app/uploads/2026/06/Griha-Pravesh-puja-kit-1.png',
      description: 'Brass kalash, mango leaves toran, havan samagri, and auspicious turmeric threads.'
    },
    {
      id: 'aastha-1',
      name: 'Brass Panchmukhi Diya (Heavy Gauge)',
      category: 'Diyas',
      goal: 'Daily Aarti',
      price: 449,
      oldPrice: 599,
      badge: '🔥 BESTSELLER',
      rating: 4.9,
      reviews: 142,
      image: CUSTOM_IMAGES[0],
      description: 'Five-faced heavy solid brass diya for daily aarti and grand festival temple rituals.'
    },
    {
      id: 'aastha-2',
      name: 'Terracotta Clay Diya Set (24 pcs)',
      category: 'Diyas',
      goal: 'Festivals',
      price: 299,
      oldPrice: 399,
      badge: '🌿 ECO-FRIENDLY',
      rating: 4.6,
      reviews: 89,
      image: CUSTOM_IMAGES[1],
      description: 'Hand-thrown unglazed clay diyas sourced directly from artisan potters in Cuddalore.'
    },
    {
      id: 'aastha-3',
      name: 'Mysore Sandalwood Incense Sticks (60 pcs)',
      category: 'Incense',
      goal: 'Purification',
      price: 189,
      oldPrice: 249,
      badge: 'PURE',
      rating: 4.9,
      reviews: 210,
      image: CUSTOM_IMAGES[2],
      description: 'Charcoal-free natural sandalwood incense sticks with zero bamboo smoke headaches.'
    },
    {
      id: 'aastha-4',
      name: 'Loban & Guggal Resin Dhoop Cups',
      category: 'Incense',
      goal: 'Purification',
      price: 249,
      oldPrice: 0,
      badge: 'TRADITIONAL',
      rating: 4.7,
      reviews: 64,
      image: CUSTOM_IMAGES[3],
      description: 'Traditional resin dhoop cups for instant space purification and negative energy removal.'
    },
    {
      id: 'aastha-5',
      name: 'Pure A2 Cow Ghee for Pooja (500ml)',
      category: 'Essentials',
      goal: 'Daily Aarti',
      price: 399,
      oldPrice: 499,
      badge: 'A2 GHEE',
      rating: 4.8,
      reviews: 175,
      image: CUSTOM_IMAGES[4],
      description: 'Bilona churned A2 cow ghee, specially filtered for soot-free diya aarti and prasad.'
    },
    {
      id: 'aastha-6',
      name: 'Solid Brass Pooja Thali Set (7 Pieces)',
      category: 'Thali',
      goal: 'Festivals',
      price: 1299,
      oldPrice: 1599,
      badge: '✨ MASTERPIECE',
      rating: 5.0,
      reviews: 98,
      image: CUSTOM_IMAGES[5],
      description: 'Complete 7-piece brass thali set including bell, panchpatra, kumkum container and camphor holder.'
    },
    {
      id: 'aastha-7',
      name: 'Reusable Fabric Marigold Garland (4ft)',
      category: 'Decor',
      goal: 'Decor',
      price: 199,
      oldPrice: 279,
      badge: 'WASHABLE',
      rating: 4.5,
      reviews: 112,
      image: CUSTOM_IMAGES[6],
      description: 'Handcrafted fabric marigold garland, washable and reusable for every auspicious celebration.'
    },
    {
      id: 'aastha-8',
      name: 'Five-Mukhi Certified Rudraksha Mala',
      category: 'Malas',
      goal: 'Meditation',
      price: 599,
      oldPrice: 749,
      badge: 'BLESSED',
      rating: 4.9,
      reviews: 83,
      image: CUSTOM_IMAGES[7],
      description: 'Certified authentic Nepal beads strung in traditional silk thread with knotting.'
    },
    {
      id: 'aastha-9',
      name: 'Pure Brass Ghanti (Temple Bell)',
      category: 'Brassware',
      goal: 'Daily Aarti',
      price: 349,
      oldPrice: 450,
      badge: 'MELODIOUS',
      rating: 4.8,
      reviews: 56,
      image: CUSTOM_IMAGES[8],
      description: 'High-resonance heavy brass bell producing a divine, long-lasting acoustic vibration.'
    },
    {
      id: 'aastha-10',
      name: 'Camphor Tablets (Pure Bhimseni, 100g)',
      category: 'Essentials',
      goal: 'Purification',
      price: 299,
      oldPrice: 350,
      badge: '100% PURE',
      rating: 4.9,
      reviews: 130,
      image: CUSTOM_IMAGES[9],
      description: 'Organic Bhimseni camphor that evaporates completely leaving zero residue or toxic fumes.'
    },
    {
      id: 'aastha-11',
      name: 'Pure Silver Laxmi-Ganesh Coin (10g)',
      category: 'Brassware',
      goal: 'Festivals',
      price: 1199,
      oldPrice: 1499,
      badge: '999 SILVER',
      rating: 5.0,
      reviews: 44,
      image: CUSTOM_IMAGES[10],
      description: '999 pure silver coin featuring embossed Goddess Lakshmi and Lord Ganesha for Diwali pooja.'
    },
    {
      id: 'aastha-12',
      name: 'Hand-carved Teak Wood Pooja Chowki',
      category: 'Decor',
      goal: 'Decor',
      price: 1899,
      oldPrice: 2299,
      badge: 'HANDCRAFTED',
      rating: 4.7,
      reviews: 38,
      image: CUSTOM_IMAGES[11],
      description: 'Sturdy seasoned teak wood chowki with traditional brass inlay work for placing idols.'
    },
    {
      id: 'aastha-13',
      name: 'Kumkum & Turmeric Brass Container Set',
      category: 'Essentials',
      goal: 'Daily Aarti',
      price: 249,
      oldPrice: 320,
      badge: 'ESSENTIAL',
      rating: 4.6,
      reviews: 72,
      image: CUSTOM_IMAGES[12],
      description: 'Twin screw-cap brass containers specially polished to prevent corrosion.'
    },
    {
      id: 'aastha-14',
      name: 'Cotton Wicks (Long Batti, 500 pcs)',
      category: 'Essentials',
      goal: 'Daily Aarti',
      price: 120,
      oldPrice: 160,
      badge: 'VALUE PACK',
      rating: 4.8,
      reviews: 310,
      image: CUSTOM_IMAGES[13],
      description: 'Long hand-rolled pure cotton wicks designed for stable burning in oil diyas.'
    },
    {
      id: 'aastha-15',
      name: 'Kuber Akhand Brass Diya with Glass Cover',
      category: 'Diyas',
      goal: 'Daily Aarti',
      price: 699,
      oldPrice: 899,
      badge: 'WINDPROOF',
      rating: 4.9,
      reviews: 115,
      image: CUSTOM_IMAGES[14],
      description: 'Safe glass-covered oil lamp that stays lit overnight without risk from drafts.'
    },
    {
      id: 'aastha-16',
      name: 'Brass Gangajal Kalash (Pot with Spout)',
      category: 'Brassware',
      goal: 'Festivals',
      price: 849,
      oldPrice: 1099,
      badge: 'SACRED',
      rating: 4.9,
      reviews: 51,
      image: CUSTOM_IMAGES[15],
      description: 'Traditional heavy brass kalash designed for storing holy water during abhishek.'
    }
  ],
  getCart() {
    try {
      return JSON.parse(localStorage.getItem('aastha_cart')) || [];
    } catch (e) {
      return [];
    }
  },
  saveCart(cart) {
    localStorage.setItem('aastha_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  },
  addToCart(productId) {
    let cart = this.getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: productId, qty: 1 });
    }
    this.saveCart(cart);
  },
  clearCart() {
    localStorage.removeItem('aastha_cart');
    window.dispatchEvent(new Event('cartUpdated'));
  }
};