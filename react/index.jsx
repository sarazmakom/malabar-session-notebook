function Animal({ name, emoji, description }) {
  return (
    <>
      {" "}
      <h2>
        {name} {emoji}
      </h2>
      <p>{description}</p>
    </>
  );
}

export default function App() {
  return (
    <main>
      <h1>shelter</h1>
      <p>text</p>
      <Animal name="Lucky" emoji="@" description={<b>Cute dog</b>} />
      <Animal name="Mittens" emoji="@" description="" />
      <Animal name="Baldo" emoji="@" description="" />
      <Animal name="Chick Norris" emoji="@" description="" />
    </main>
  );
}

// function Button({ content }) {
//   return (
//     <button type="button" className="button">
//       {content}
//     </button>
//   );
// }

function Button({ children }) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}
