import Particle from "@/components/Particle"
import TextTyper from "@/components/TextTyper"

const Home = () => {
  return (
    <section className='home'>
      <Particle/>
      <div className="hero text-white text-center">
        <div className="text-xl select-none mb-16">
          Welcome! 
          <span className="cursor-pointer shine_text"> {"< Danny />"}</span>
        </div>
        <TextTyper text={`Hi, there. \n It's me, Danny Boy. \n Sup`}/>
        <button className="hero_btn mt-16 p-4 text-xl w-40 font-bold rounded">
          Click Me
        </button>
      </div>
    </section>
  )
}

export default Home