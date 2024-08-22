import Image from "next/image";

async function getImages(): Promise<GfeImage[]> {
  const response = await fetch(
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections"
  );
  const json = await response.json();
  return json.data;
}

type GfeImage = {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
};

export default async function Home() {
  const images = await getImages();
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="max-h-[648px] md:max-w-[704px] md:max-h-[580px] px-4">
        <h1 className="font-bold text-2xl mb-6">Our Collections</h1>
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4">
          <figure className="row-span-2 bg-purple-50 relative">
            <img
              src={images[0].image_url}
              className="max-w-[594px] md:h-[580px] w-full object-cover rounded-lg"
            />
            <figcaption className="absolute bottom-2 left-4">
              <h2 className="font-extralight text-white">{images[0].name}</h2>
              <p className="font-medium text-white">{images[0].description}</p>
            </figcaption>
          </figure>

          <figure className="md:row-span-1 relative">
            <img
              src={images[1].image_url}
              className="max-w-[594px] h-[337px] md:h-[280px] w-full object-cover rounded-lg"
            />
            <figcaption className="absolute bottom-2 left-4">
              <h2 className="font-extralight text-white">{images[1].name}</h2>
              <p className="font-medium text-white">{images[1].description}</p>
            </figcaption>
          </figure>
          <figure className="md:row-span-1 relative">
            <img
              src={images[2].image_url}
              className="max-w-[594px] h-[337px] md:h-[280px] w-full object-cover rounded-lg"
            />
            <figcaption className="absolute bottom-2 left-4">
              <h2 className="font-extralight text-white">{images[2].name}</h2>
              <p className="font-medium text-white">{images[2].description}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
}
