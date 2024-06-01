import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Rice",
    description:"a natural or chemical substance that is put on land or soil to make plants grow better",
    imgSrc:"/assets/Basmati2.jpeg",
  },
  {
    _id: uuid(),
    categoryName: "Millets",
    description:
      "a chemical substance that is used for killing bugs especially insects, that eat food crops",
      imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648390940/pesticides1_pveijq.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Bajra",
    description:
      "Agricultural tools are instruments that are used in the fields to aid in the agricultural process.",
      imgSrc:"/assets/milet.jpeg",
  },
  {
    _id: uuid(),
    categoryName: "Dal",
    description:
      "Vegetables & Fruits Seeds",
      imgSrc:"/assets/Moong.png",
  },
  {
    _id: uuid(),
    categoryName: "Cereals",
    description: "Safety Wearables such as shoes, gloves etc",
     imgSrc:"/assets/chana.png",
  },
  {
    _id: uuid(),
    categoryName: "Legumes",
    description:"Sensors, testers, torch & gadgets for farming",
     imgSrc:"/assets/soyabin.jpeg",
  },
];
