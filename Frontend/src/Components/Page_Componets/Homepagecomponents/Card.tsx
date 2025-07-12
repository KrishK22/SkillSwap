import { Button } from "@/Components/ui/button.tsx";
const Card = () => {
  return (
    <div className="bg-blue-950 flex justify-between p-6 w-full rounded-2xl">
        <div className="w-40 h-40 rounded-full bg-gray-300 ml-10">
            <img src="" alt="" />
        </div>
        <div className="text-xl flex flex-col gap-6 text-white mt-2 ">
            <h1>Name : John Doe</h1>
            <h1>Skills Offered : Web Development</h1>
            <h1>Skills Required : Graphic Design</h1>
        </div>
        <div className="flex flex-col gap-8 mt-3 mr-28">
            <h1 className="text-xl text-white">Rating : 4.5</h1>
            <Button variant={"ghost"} size={"lg"} className="text-md text-white text-semibold">Request</Button>

        </div>

    </div>
  );
};
export default Card;
