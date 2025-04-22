import { getGuestbook } from "@/utils/api";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const guestbook = await getGuestbook(id);
  console.log(guestbook.data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="m-6 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h3 className="mb-3 font-bold text-2xl">{guestbook.data.author}</h3>
        <div className="mb-3">{guestbook.data.content}</div>
        <button className="bg-red-600 text-white p-4">삭제</button>
      </div>
    </div>
  );
};
export default Page;
