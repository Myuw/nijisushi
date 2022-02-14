export default function MenuItem({ data }) {
  return (
    <section key={data.title} className="menu-item">
      <div className="menu-item-header">
        <h2 className="menu-item-title">{data.title}</h2>
      </div>
      <p className="menu-item-description">{data.description}</p>

      <img src={data.photo.imageUrl}/>

      <style jsx>{`
        img {
          width: 40%;
        }
      `}</style>
    </section>
  );
}
