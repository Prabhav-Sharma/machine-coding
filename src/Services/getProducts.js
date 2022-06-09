const products = [
  {
    id: 1,
    companyName: "Jump Cuts",
    name: "Print Men Round T-shirt",
    price: 269,
    img: "https://rukminim1.flixcart.com/image/580/696/ksgehzk0/t-shirt/z/g/z/m-h57646-reebok-original-imag6yufhz2s2xat.jpeg?q=50",
    MRP: 1519,
    discount: 82,
  },
  {
    id: 2,
    companyName: "Eyebogler",
    name: "Stripped Men Polo",
    price: 349,
    img: "https://rukminim1.flixcart.com/image/880/1056/kpr8k280/t-shirt/y/l/p/m-gk9296-reebok-original-imag3x6gdgxusv9e.jpeg?q=50",
    MRP: 1299,
    discount: 73,
  },
  {
    id: 3,
    companyName: "ADRENEX",
    name: "Color Block Men",
    price: 379,
    img: "https://rukminim1.flixcart.com/image/580/696/krjjde80/t-shirt/l/w/8/m-adss21po013a-adrenex-original-imag5b9dkfttzbvy.jpeg?q=50",
    MRP: 1499,
    discount: 74,
  },
  {
    id: 4,
    companyName: "BLIVE",
    name: "Printed Men Round Tshirt",
    price: 199,
    img: "https://rukminim1.flixcart.com/image/580/696/kw5ag7k0/t-shirt/z/o/x/m-praw21cn014a-provogue-original-imag8vu4qfsraqdr.jpeg?q=50",
    MRP: 2000,
    discount: 90,
  },
  {
    id: 5,
    companyName: "Reya",
    name: "Solid Men Mandarin T-shirt",
    price: 261,
    img: "https://rukminim1.flixcart.com/image/580/696/kzd147k0/t-shirt/z/o/q/s-tsrt-116-reya-original-imagbe275uykyfpp.jpeg?q=50",
    MRP: 1499,
    discount: 82,
  },
  {
    id: 6,
    companyName: "PROVOGUE",
    name: "Stripped Men Round T-shirt",
    price: 299,
    img: "https://rukminim1.flixcart.com/image/580/696/kx3l0nk0/t-shirt/9/a/j/m-praw21cn019c-provogue-original-imag9mr7cgzcghed.jpeg?q=50",
    MRP: 1099,
    discount: 72,
  },
];

const fetchProducts = () => {
  return JSON.stringify(products);
};

export default fetchProducts;
