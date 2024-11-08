import Heading from "../components/Heading";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative p-2 h-[90vh] flex flex-col justify-center items-center ">
        <Heading className=" text-5xl">
          <span className="text-red-400"> Math</span>&nbsp;is not
          <span className="text-red-400"> Mathing?</span>
        </Heading>
        <img
          className="w-3/4 sm:w-1/2"
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2s1bDNlZWM0cHd4OGtqYXZueG5zb2F6OGJiNjltZnJyZDZrdWNobSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lHfxDepSGlzom6f65K/giphy.gif"
        />
        <Heading className="text-green-400 mt-2 text-5xl">
          We got you covered!!
        </Heading>
      </main>
    </>
  );
}
