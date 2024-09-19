import cake from "../img/cake.jpg";

export default function Home() {
  return (
    <section className="max-w-full mx-auto w-1/2 rounded-xl flex justify-center items-center mt-60 hover:scale-105 transition-transform duration-300 ease-in-out filter blur-2xl delay-75 cursor-default hover:shadow-lg hover:border hover:border-slate-300"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      filter: "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))",
    }}>
        <div className="h-[450px] w-[950px] p-10">
          <img className="bg-cover rounded-lg h-full w-full" src={cake.src} alt="birthdayCake"/>
        </div>
        <div className="text-balance mr-10 text-slate-300">
          <h1 className="text-4xl font-bold">Happy Birthday!</h1>
          <br />
          <p className="text-2xl font-semibold">Dear Friend,</p>
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
