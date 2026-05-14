import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { useState } from "react";

export default function Beyond() {

  const [selected, setSelected] = useState(null);

  const cards = [
    {
    title: "NASA",
    desc: "1 week STEM and Leadership space camp at NASA's US Space and Rocket Center (USSRC) , Hunstville, Alabama, USA. Selected as one of 20 students from India for this prestigious program sponsored by Honeywell Leadership Challenege Academy (HLCA) in 2018. Photos attached.",
    img: "/beyond nasa.png",
    pdf: "HLCA_2018_Aishwarya.pdf"
  },

  {
    title: "Photography",
    desc: "Capturing moments and light. (here: Ladakh)",
    img: "/photography.png"
  },
  {
    title: "Travel",
    desc: "Exploring new places, cultures, and cuisines. (here: Meghalaya)",
    img: "/travel.jpg"
  },
  {
    title: "Music",
    desc: "Listening to and creating music.",
    img: "/music.PNG"
  },
  {
    title: "Art",
    desc: "Painting, for expression, from creativity.",
    img: "/beyond paint.png"
  },
  {
    title: "Culinary Arts",
    desc: "Exploring flavors and techniques in the kitchen.",
    img: "/beyond cook.png"
  },
  {
    title: "Trekking",
    desc: "Challenging myself in the mountains.",
    img: "/beyond trek.png"
  },
  {
    title: "Camping",
    desc: "Exploring and living in nature.",
    img: "/beyond camp.JPG"
  },
  {
    title: "Performing Arts",
    desc: "Storytelling and making music parodies for standup comedy.",
    img: "/beyond perform.JPEG"
  }
];

return (
    <div className="content">

      {/* CARDS */}
      <section id="passion" className="section">
        <h2>Hobbies, Values & Culture</h2>

        <div className="projects-grid">
          {cards.map((p, i) => (
            <ProjectCard key={i} project={p} onClick={setSelected} />
          ))}
        </div>
      </section>

      {/* MODAL (shared) */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
