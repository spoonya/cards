import React from "react";
import { getAppeals } from "./api";
import { CardList } from "./components";
import { Appeal } from "./types";

function App() {
  const [data, setData] = React.useState<Appeal[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getAppeals();

      if (data) {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return <CardList items={data} />;
}

export default App;
