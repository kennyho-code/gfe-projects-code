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
    <main className="flex flex-col items-center justify-center w-screen  ">
      <div className="max-w-[704px] max-h-[580px]">
        <h1 className="font-bold text-2xl mb-6">Our Collections</h1>

        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4">
          <div className="row-span-2 bg-purple-50">
            <img
              src={images[0].image_url}
              className="max-w-[594px] h-[580px] w-full object-cover rounded-lg"
            />
          </div>
          <div className="md:row-span-1 ">
            <img
              src={images[1].image_url}
              className="max-w-[594px] h-[337px] md:h-[280px] w-full object-cover rounded-lg"
            />
          </div>
          <div className="md:row-span-1">
            <img
              src={images[2].image_url}
              className="max-w-[594px] h-[337px] md:h-[280px] w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
