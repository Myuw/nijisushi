import menu from "../../data/menu.json";
import pages from "../../data/pages.json";
import MenuItem from "../components/MenuItem.jsx";

export default function Menu() {
  const getCategories = () => {
    return menu.reduce(
      (acc, item) => {
        if (item.category.length > 1) {
          acc["Midi & Soir"].push(item);
        } else {
          acc["Midi"].push(item);
        }

        return acc;
      },
      { "Midi & Soir": [], "Midi": [] }
    );
  };

  return (
    <main className="menu-page">
      <h1 className="section-title">{pages.menu.description}</h1>

      {Object.entries(getCategories()).map((category, id) => {
        return (
          <section key={id}>
            <h1>{category[0]}</h1>
            {category[1].map((p, id) => (
              <MenuItem key={id} data={p}></MenuItem>
            ))}
          </section>
        );
      })}
    </main>
  );
}
