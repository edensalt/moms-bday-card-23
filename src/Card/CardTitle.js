import Cake from "../SVGs/Cake";

const CardTitle = () => {

  return (
    <div className="text-5xl font-bold py-10 flex justify-center items-center gap-10">
        <div className="flex md:flex-row flex-col justify-center gap-10">
            <Cake />
            <Cake />
            <Cake />
        </div>
      <h1>
        Happy birthday Mom!!!
      </h1>
      <div className="flex md:flex-row flex-col justify-center gap-10">
            <Cake />
            <Cake />
            <Cake />
        </div>
    </div>
  );
};

export default CardTitle;
