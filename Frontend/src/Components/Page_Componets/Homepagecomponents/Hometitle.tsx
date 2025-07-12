import { Button } from "@/Components/ui/button";

const Hometitle = () => {
  return (
    <div className="flex mr-18 bg-gray-200 justify-between items-center px-6 py-8 ">
      <div className="logo text-indigo-600 font-bold text-4xl">LOGO</div>
      <div className="flex">
        <Button variant={"outline"} className=" mr-3"size={"lg"}>
          Home
        </Button>
        {/* <h1 className="ml-2 mr-2  text-4xl ">/</h1> */}
        <Button variant={"outline"} size={"lg"}>Login</Button>
      </div>
    </div>
  );
};
export default Hometitle;
