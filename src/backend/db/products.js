/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "I5c1bFwd",
    title: "Basmati Rice",
    imgUrl: "/assets/BasmatiRice.jpeg",
    price: 332,
    price_old: 349,
    discount: 5,
    rating: 4.5,
    isBestSeller: true,
    isOutOfStock: false,
    categoryName: "Rice",
    productDetails: {
      Brand: "Farmer-1",
      Weight: "5000 Grams",
      Form: "Powder",
      Volume: "5 Kg",
    },
    description: `1. 100% organic
             Known for its fragrant aroma and long, slender grains.
            Originating from the Indian subcontinent, Basmati rice is commonly used in pilafs, biryanis, and other rice dishes where its aroma enhances the flavor.
           A variety of long-grain rice, primarily grown in Thailand and other parts of Southeast Asia.`,
  },
  {
    _id: "VhibWhCO",
    title: "White Rice",
    imgUrl: "/assets/Basmati2.jpeg",
    price: 950,
    price_old: 1999,
    discount: 52,
    rating: 3.3,
    isBestSeller: true,
    isOutOfStock: false,
    categoryName: "Rice",
    productDetails: {
      Brand: "Farmer-1",
      Weight: "5000 Grams",
      Form: "Granules",
      Volume: "5 Litres",
    },
    description: ` Whole grain rice with only the outermost hull removed, retaining its bran layer and germ.Brown rice is nuttier and chewier than White Rice and offers more nutritional value, including fiber, vitamins, and minerals. It's a healthier alternative in various rice-based dishes.`,
  },
  {
    _id: "w1zV3ayR",
    title:
      "Soyabean (Garbanzo Beans)",
    imgUrl: "/assets/soyabin.jpeg",
    price: 950,
    price_old: 1999,
    discount: 52,
    rating: 4.8,
    isBestSeller: false,
    isOutOfStock: false,
    categoryName: "Millets",
    productDetails: {
      Brand: "FIELDSTAR",
      Material: "Others",
      Color: "Green",
    },
    description: `Soyabeans are round, beige-colored legumes with a nutty flavor and a slightly grainy texture.They are a good source of protein, fiber, and minerals, and are popular in Mediterranean, Middle Eastern, and Indian cuisines. Soyabeans can be cooked and used in dishes like hummus, falafel, curries, and salads.`,
  },
  {
    _id: "sP6NCOgs",
    title:
      "Chia Seeds",
    imgUrl: "/assets/seed.png",
    price: 589,
    price_old: 1010,
    discount: 63,
    rating: 3.8,
    isBestSeller: false,
    isOutOfStock: false,
    categoryName: "Bajra",
    productDetails: {
      Brand: "FreshDcart",
      Material: "Others",
      DeviceType: "Electronic",
    },
    description: ` Chia Seeds are small, shiny legumes with a dense, creamy texture and a mild, earthy flavor.
    They are a rich source of protein, fiber, and antioxidants, commonly used in Latin American and Caribbean cuisines. Black beans are versatile and can be used in soups, stews, salads, and as a filling for burritos and tacos.`,
  },
  {
    _id: "wxOaYSr5",
    title: "Bajra",
    imgUrl:
      "/assets/milet.jpeg",
    price: 1270,
    price_old: 2000,
    discount: 37,
    rating: 3.5,
    isBestSeller: false,
    isOutOfStock: false,
    categoryName: "Dal",
    productDetails: {
      brand: "WOLFGARTEN",
      material: "Steel",
      Weight: "520 grams",
    },
    description: `Bajra are dried, peeled peas that have been split in half.
    They come in yellow and green varieties and are rich in protein, fiber, and vitamins. Split peas are commonly used in soups, stews, and dals, and they cook quickly compared to whole peas. Yellow split peas are popular in Indian cuisine, while green split peas are more commonly used in Western dishes.`,
  },
  {
    _id: "ZVZzMdoL",
    title:
      "Moong Dal",
    imgUrl: "/assets/moong.png",
    price: 1499,
    price_old: 2000,
    discount: 25,
    rating: 2.5,
    isBestSeller: false,
    isOutOfStock: false,
    categoryName: "Bajra",
    productDetails: {
      brand: "FULLFILLBUY",
      material: "PVC material",
      Weight: "520 grams",
      dimension: "30 x 10 x 25 cm",
    },
    description: `This wheat is known for its high protein content and is commonly used for making bread and other baked goods. It has a robust flavor and a reddish hue to its bran.
    `,
  },
  {
    _id: "2nQRAjxP",
    title:
      "Rambhog Rice",
    imgUrl: "/assets/Basmati2.jpeg",
    price: 1799,
    price_old: 2695,
    discount: 33,
    rating: 4.0,
    isBestSeller: false,
    isOutOfStock: false,
    categoryName: "Bajra",
    productDetails: {
      brand: "Pick Ur Needs®",
      voltage: "120 Volts",
      LuminousFlux: "7000 Lumen",
      Battery: "Lithium_ion",
    },
    description: ` With a lower protein content compared to hard red varieties, soft red winter wheat is commonly used for pastries, cakes, and biscuits. It has a softer texture and a milder flavor.
    Also known as macaroni wheat, durum wheat has a high protein content and is primarily used for making pasta. It has a golden color and a tough texture, which helps it maintain its shape during cooking.`,
  },
  {
    _id: "VOJG0b5b",
    title:
      "Long Grain Rice",
    imgUrl: "/assets/BasmatiRice.jpeg",
    price: 110,
    price_old: 115,
    discount: 4,
    rating: 2.1,
    isBestSeller: false,
    isOutOfStock: true,
    categoryName: "Rice",
    productDetails: {
      color: "transparent",
      Weight: "100 grams",
      Material: "Polycarbonate",
      BrandName: "3M",
    },
    description: `This category encompasses several varieties of rice with long, slender grains, such as Carolina long grain and American long grain. Long grain rice tends to remain separate and fluffy when cooked, making it suitable for pilafs and salads.`,
  },
  {
    _id: "dF0FQvJL",
    title:
      "Arhar Dal",
    imgUrl: "/assets/arhar.png",
    price: 194,
    price_old: 230,
    discount: 16,
    rating: 4.2,
    isBestSeller: false,
    isOutOfStock: true,
    categoryName: "Bajra",
    productDetails: {
      brand: "Bayer CropScience Limited",
      weight: "120 g",
      Dimensions: "45 x 5 x 149 Millimeters",
    },
    description: ` With a lower protein content compared to hard red varieties, soft red winter wheat is commonly used for pastries, cakes, and biscuits. It has a softer texture and a milder flavor.
    `,
  },
  {
    _id: "l07mWMm3",
    title:
      "Millet",
    imgUrl: "/assets/milet.jpeg",
    price: 499,
    price_old: 650,
    discount: 23,
    rating: 2.2,
    isBestSeller: false,
    isOutOfStock: false,
    categoryName: "Millets",
    productDetails: {
      brand: "Katra Fertilizers",
      Item_Form: "Powder",
      Liquid_Volume: "0.05 Litres",
    },
    description: `Millet is a small-seeded cereal grain that is gluten-free and rich in nutrients. It is commonly used in African and Asian cuisines for porridge, flatbreads, and as a side dish.
    `,
  },
  {
    _id: "hKRD5d0S",
    title:
      "Moong dal",
    imgUrl: "/assets/Moong.png",
    price: 199,
    price_old: 299,
    discount: 33,
    rating: 3.2,
    isBestSeller: false,
    isOutOfStock: false,
    categoryName: "Dal",
    productDetails: {
      brand: "Green World",
      Colour: "Green",
      Item_Weight: "500 Grams",
      Special_Feature: "Drought Tolerant",
    },
    description: `Moong dal, also known as mung bean or green gram, is a type of pulse widely cultivated in Asian countries, particularly India. It is a small, green legume that is harvested and commonly used in various culinary dishes. Moong dal is highly nutritious, rich in protein, fiber, vitamins, and minerals. It is versatile and can be cooked in various ways, such as soups, stews, curries, and salads. It has a mild, earthy flavor and a soft texture when cooked, making it a popular ingredient in vegetarian and vegan diets.`,
  },
  {
    _id: "s3QBAf2P",
    title: "Black chana",
    imgUrl: "/assets/chana.png",
    price: 1199,
    price_old: 2100,
    discount: 43,
    rating: 4.2,
    isBestSeller: false,
    isOutOfStock: false,
    categoryName: "Dal",
    productDetails: {
      brand: "ONLY FOR ORGANIC",
      Weight: "420 g",
      dimensions: "28.5 x 19.4 x 8.3 cm; 420 Grams",
    },
    description: `Black chana, also known as black chickpeas or kala chana, is a type of legume popular in South Asian cuisine. These small, dark brown chickpeas are a good source of protein, fiber, vitamins, and minerals. They have a nutty flavor and firm texture, and they're commonly used in curries, salads, and snacks. Black chana is often soaked overnight before cooking to reduce cooking time and improve digestibility. It's a versatile ingredient enjoyed for its taste, texture, and nutritional benefits.
    `,
  },
];
