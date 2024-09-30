"use client";
import { UserComment, userComments } from "./data";

export default function Home() {
  return (
    <div className="p-4 bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="p-4 bg-white rounded-md w-full min-h-screen flex justify-center ">
        <div className="max-w-[1216px] flex flex-col gap-8 lg:justify-center">
          <header className="flex flex-col gap-4 text-center">
            <h1 className="text-blue-600 font-semibold">Testimonials</h1>
            <div className="text-3xl font-semibold ">
              Countless users, countless smiles
            </div>
            <div className="text-gray-600">
              Explore our community&apos;s journey and discover why satisfaction
              defines us.
            </div>
          </header>
          <div className="columns-1 md:columns-2 lg:columns-3">
            {userComments.map((userComment) => (
              <UserCommentCard
                key={userComment.name}
                userComment={userComment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UserCommentCard({ userComment }: { userComment: UserComment }) {
  return (
    <div className="overflow-hidden p-4 border-2 shadow-md rounded-md mb-4">
      <div className="">
        <img
          className="h-[48px] w-[48px] rounded-full object-cover"
          src={`/img/${userComment.profileThumbnail}.jpg`}
        />
        <div>
          <div className="text-lg text-black font-semibold">
            {userComment.name}
          </div>
          <div>{userComment.username}</div>
        </div>
      </div>
      <div>{userComment.comment}</div>
    </div>
  );
}
