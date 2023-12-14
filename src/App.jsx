import DefaultLayout from "./layouts/DefaultLayout";
import WordBody from "./compoents/Word/WordBody";
import WordProvider from "./contexts/WordContext";
import WordHeader from "./compoents/Word/WordHeader";

function App() {
  return (
    <>
      <DefaultLayout>
        <WordProvider>
          <WordHeader />
          <WordBody />
        </WordProvider>
      </DefaultLayout>
    </>
  );
}

export default App;
