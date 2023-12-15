import DefaultLayout from "./layouts/DefaultLayout";
import WordBody from "./compoents/Word/WordBody";
import WordProvider from "./contexts/WordContext";


function App() {
  return (
    <>
      <DefaultLayout>
        <WordProvider>
          <WordBody />
        </WordProvider>
      </DefaultLayout>
    </>
  );
}

export default App;
