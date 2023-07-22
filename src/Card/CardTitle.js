import Cake from "../SVGs/Cake";

const CardTitle = () => {
  return (
    <div>
      <div className="text-5xl font-bold pt-10 pb-2 flex justify-center items-center gap-10">
        <div className="flex md:flex-row flex-col justify-center gap-10">
          <Cake />
          <Cake />
          <Cake />
        </div>
        <h1
          className="font-semibold
            bg-gradient-to-r bg-clip-text  text-transparent
            from-purple-400 via-pink-400 to-purple-400
            animate-text text-6xl
            "
        >
          Happy birthday Mom!!!
        </h1>
        <div className="flex md:flex-row flex-col justify-center gap-10">
          <Cake />
          <Cake />
          <Cake />
        </div>
      </div>
      <div className="py-10 px-20 flex flex-col gap-2">
          <p className="text-[20px]">
            What an incredible year it has been! Here are a few snapshots of the
            adventures we had, though there are countless more that I enjoyed with
            you, too, like going to see jazz at church on Monday,
            visiting the LBJ library, and going to the CMA Mix!
          </p>
          <p className="text-[20px]">
            I wish I were in Cleveland
            to celebrate your birthday in person today, but in less than a week, we'll have a
            belated celebration in person. I can't wait for it! I hope you have the best
            birthday ever!
          </p>
          <p className="text-sm italic">
            P.S. However over these pictures for a little surprise, too!
          </p>
      </div>
    </div>
  );
};

export default CardTitle;
