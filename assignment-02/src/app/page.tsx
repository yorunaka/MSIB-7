import cake from "../img/cake.jpg";

export default function Home() {
  return (
    <section className="max-w-full mx-auto w-1/2 rounded-xl flex justify-center items-center mt-60"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      filter: "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))",
    }}>
      <div className="h-full w-full p-10 m-2">
        <img className="bg-cover rounded-lg w-[300px] h-[450px]" src={cake.src} alt="birthdayCake"/>
      </div>
      <div className="text-balance pr-10">
        <h1 className="text-4xl font-bold">Happy Birthday!</h1>
        <br />
        <p className="text-2xl">Dear Friend,</p>
        <br />
        <p>On this special day, I wanted to take a moment to celebrate you and all the wonderful qualities that make you so amazing. Your kindness, humor, and genuine heart bring so much joy to everyone around you.</p>
        <br />
        <p>Wishing you a birthday as bright and beautiful as you are. Here's to many more wonderful years ahead!</p>
        <br />
        <p>With lots of love and warm wishes,</p>
        <br />
        <p>Your Friend.</p>
      </div>
    </section>
  );
}
