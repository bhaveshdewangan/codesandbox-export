import MetaCard from "./card";
import farmville3 from "../asset/farmville3.png";
import twoDots from "../asset/twodots.png";
const data = [
  {
    id: 1,
    title: "Toon Farm Pack",
    description: "Farmville 3 art work",
    cover: farmville3,
    category: "3d",
    style: {
      marginLeft: "10px",
      width: 230
    }
  },
  {
    id: 2,
    title: "Two Dots Pack",
    description: "Two Dots art work",
    cover: twoDots,
    category: "3d",
    style: {
      marginLeft: "10px",
      width: 230
    }
  }
];
const ThreeD = () => {
  return (
    <div
      style={{
        padding: "20px 20px",
        // background: "rgba(17,24,39,1)",
        display: "flex",
        justifyContent: "flex-start"
        // alignItems: "center"
      }}
    >
      {data.map((item, i) => {
        return <MetaCard metaData={data[i]} />;
      })}
    </div>
  );
};
export default ThreeD;
