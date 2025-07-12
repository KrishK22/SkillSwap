import Hometitle from "@/Components/Page_Componets/Homepagecomponents/Hometitle.tsx";
import Searchbar from "@/Components/Page_Componets/Homepagecomponents/Searchbar.tsx";
import Card from "@/Components/Page_Componets/Homepagecomponents/Card";
const Homepage = () => {
  return (
    <div className="bg-gray-300 w-full text-gray-900 min-h-screen">
      <Hometitle />
      <div className="flex items-center justify-center mt-10 mb-16">
        <Searchbar />
      </div>
      <div className=" flex flex-col w-full  px-48 ">
        <Card />
        
      </div>
    </div>
  );
};
export default Homepage;
