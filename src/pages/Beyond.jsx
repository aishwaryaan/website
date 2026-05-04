export default function Beyond() {
  const cards = [
  {
    title: "Photography",
    text: "Capturing moments and light. (here: Ladakh)",
    img: "/photography.png"
  },
  {
    title: "Travel",
    text: "Exploring new places, cultures, and cuisines. (here: Meghalaya)",
    img: "/travel.jpg"
  },
  {
    title: "Music",
    text: "Listening to and creating music.",
    img: "/music.PNG"
  }
];

  return (
    <div className="content">
      <div className="cards-container">
  {cards.map((c, i) => (
    <div key={i} className="info-card">
      
      {c.img && (
        <img src={c.img} className="card-img" />
      )}

      <h3>{c.title}</h3>
      <p>{c.text}</p>
    </div>
  ))}
</div>
    </div>
  );
}