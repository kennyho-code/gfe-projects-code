export default function Home() {
  return (
    <div className="bg-gray-100 h-full p-8">
      <div className="bg-white h-screen rounded-lg">
        <div className="flex flex-col  pl-4 pr-4">
          <Header />
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex justify-between pt-8 pb-8">
      <h1 className="font-bold text-2xl">Latest Arrivals</h1>
      <button className="border-2 rounded-lg px-4 py-2">View All</button>
    </header>
  );
}

type Product = {
  product_id: string;
  name: string;
  description: string;
  category: Object;
  collection: Object;
  created_at: string;
  colors: string[];
  images: [];
  inventory: [];
  priceRange: { lowest: number; highest: number };
  rating: number;
  reviews: number;
  sizies: [];
  sold: number;
};

async function getImages() {
  const response = await fetch(
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=latest",
  );

  return (await response.json()) as {
    data: Product[];
  };
}

async function ProductsGrid() {
  const products = (await getImages()).data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      {products.map((product) => {
        return <Product key={product.product_id} product={product} />;
      })}
    </div>
  );
}

function Product({ product }: { product: Product }) {
  const firstImage = product.images[0]?.image_url;
  const firstColor = product.colors[0];
  const firstColorStr =
    firstColor[0].toUpperCase() + firstColor.slice(1).toLowerCase();
  return (
    <div className="flex flex-col gap-4">
      <ProductImage imageUrl={firstImage} />
      <div>{firstColorStr}</div>
      <h2 className="font-semiboldtext-lg">{product.name}</h2>
      <PriceRange priceRange={product.priceRange} />
      <ColorsSelection colors={product.colors} />
    </div>
  );
}

function PriceRange({ priceRange }: { priceRange: Product["priceRange"] }) {
  return (
    <div className="flex gap-2">
      <span>${priceRange.lowest}</span>
      <span className="line-through">${priceRange.highest}</span>
    </div>
  );
}

function ColorsSelection({ colors }: { colors: Product["colors"] }) {
  return (
    <div className="flex gap-1">
      {colors.map((color) => {
        return (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className="border-black border-[1px] rounded-full h-[16px] w-[16px]"
          />
        );
      })}
    </div>
  );
}

function ProductImage({ imageUrl }: { imageUrl: string }) {
  return (
    <img
      className="w-full h-[225px] md:h-[300px] object-cover rounded-lg"
      loading="lazy"
      src={imageUrl}
      alt="some picture"
    />
  );
}
