export default function Beyond() {
  const cards = [
  {
    title: "Photography",
    text: "Capturing moments and light.",
    img: "/photo.jpg"
  },
  {
    title: "Travel",
    text: "Exploring new places.",
    img: "/travel.jpg"
  },
  {
    title: "Fitness",
    text: "Staying active and healthy.",
    img: "/fitness.jpg"
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