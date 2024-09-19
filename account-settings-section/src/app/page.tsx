import ProfileForm from "./ProfileForm";

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};

async function getUserData() {
  const userData = await fetch("http://localhost:3000/api/user");
  const json = await userData.json();
  return json.data as User;
}

export default async function Home() {
  const userData = await getUserData();
  return (
    <div className="flex justify-center lg:items-center h-screen">
      <main className="flex flex-col gap-8 p-4 w-full max-w-[1216px]">
        <header>
          <h1 className="text-2xl font-semibold">Manage Your Account</h1>
          <div className="text-gray-500">
            Update your account details below for a tailored experience on our
            platform.
          </div>
        </header>
        <div className="flex gap-4">
          <div className="h-[104px] w-[104px] bg-black rounded-full" />
          <div className="flex flex-col gap-2 justify-center">
            <div>
              <button className="border-2 rounded-lg  px-4 py-2">
                Change Avatar
              </button>
            </div>
            <div className="text-sm">At least 800x800 px. JPG or PNG only.</div>
          </div>
        </div>
        <ProfileForm defaultData={userData} />
      </main>
    </div>
  );
}
