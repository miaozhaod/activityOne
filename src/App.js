import { useState } from "react";
import {
  Footer,
  Header,
  Table,
  Filter,
  Toggle,
  CollectNewGoodForm,
} from "./components";
import mockData from "./constants/mockData";
import "./styles/App.css";

function App() {
  const [isActiveId, setIsActiveId] = useState(false);
  const [isActiveType, setIsActiveType] = useState(false);
  const [isActiveTopping, setIsActiveTopping] = useState(false);
  const [sortedData, setSortedData] = useState(mockData);
  const [filterInput, setFilterInput] = useState();
  const [filteredData, setFilteredData] = useState();
  // eslint-disable-next-line
  const [newData, setNewData] = useState();
  const [myData, setMyData] = useState(mockData);

  // filter table data based on user input
  const handleInput = event => {
    setFilterInput(event.target.value);
    let myFilteredData = mockData.filter(item => {
      return (
        item.type.toLowerCase().includes(filterInput) ||
        item.name.toLowerCase().includes(filterInput) ||
        item.topping.toLowerCase().includes(filterInput)
      );
    });
    setFilteredData(myFilteredData);
    setMyData(myFilteredData);
  };

  // sort table data based on type
  const onClickType = () => {
    setIsActiveType(!isActiveType);
    setSortedData(
      isActiveType
        ? []
            .concat(mockData)
            .sort((a, b) =>
              a.type.toUpperCase() > b.type.toUpperCase() ? 1 : -1
            )
        : []
            .concat(mockData)
            .sort((a, b) =>
              a.type.toUpperCase() > b.type.toUpperCase() ? -1 : 1
            )
    );
    setMyData(sortedData);
  };

  // sort table data based on topping
  const onClickTopping = () => {
    setIsActiveTopping(!isActiveTopping);
    setSortedData(
      isActiveTopping
        ? []
            .concat(mockData)
            .sort((a, b) =>
              a.type.toUpperCase() > b.type.toUpperCase() ? 1 : -1
            )
        : []
            .concat(mockData)
            .sort((a, b) =>
              a.type.toUpperCase() > b.type.toUpperCase() ? -1 : 1
            )
    );
    setMyData(sortedData);
  };

  // sort table data based on ID
  const onClickId = () => {
    setIsActiveId(!isActiveId);
    setSortedData(
      isActiveId
        ? []
            .concat(filteredData ? filteredData : mockData)
            .sort((a, b) => (a.id > b.id ? 1 : -1))
        : []
            .concat(filteredData ? filteredData : mockData)
            .sort((a, b) => (a.id > b.id ? -1 : 1))
    );
    setMyData(sortedData);
  };

  // handle collect new baked goods form
  const handleSubmit = event => {
    event.preventDefault();
    const newId = Number(event.target.elements.id.value);
    const newType = event.target.elements.type.value.toLowerCase();
    const newName = event.target.elements.name.value;
    const newNameCapitalised = newName[0].toUpperCase() + newName.substring(1);
    const newTopping = event.target.elements.topping.value;
    const newToppingCaptalised =
      newTopping[0].toUpperCase() + newTopping.substring(1);

    setNewData(
      mockData.push({
        id: newId,
        type: newType,
        name: newNameCapitalised,
        topping: newToppingCaptalised,
      })
    );
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Header>My Baked Goods</Header>
        <div className="handlers">
          <div className="filter-container">
            <Filter handleInput={handleInput} />
          </div>
          <div className="toggle-container">
            <Toggle active={isActiveId} onClick={onClickId} sortItem="ID" />
            <Toggle
              active={isActiveType}
              onClick={onClickType}
              sortItem="Type"
            />
            <Toggle
              active={isActiveTopping}
              onClick={onClickTopping}
              sortItem="Batter"
            />
          </div>
        </div>
        <Table myData={myData} />
        <CollectNewGoodForm onSubmit={handleSubmit} />
        <Footer>Miao made for Megaport</Footer>
      </div>
    </div>
  );
}

export default App;
