import { Button } from "@/Components/ui/button.tsx";

const Hometitle = () => {
  return (
    <div className="flex   justify-between items-center px-6 py-8 ">
      <div className="logo text-black font-bold text-4xl"></div>
      <div className="flex">
        <img src="/assets/logo.svg" alt="" />
        <Button
          variant={"ghost"}
          className=" text-black text-xl mr-3"
          size={"sm"}
        >
          Swap Requests
        </Button>
      </div>
    </div>
  );
};
export default Hometitle;
