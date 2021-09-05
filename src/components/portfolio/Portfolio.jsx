import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  webappPortfolio,
  blogsPortfolio,
  DigitalMarketingPortfolio,
  SocialMediaManagementPortfolio,
  OtherProjectsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Web application");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Web application",
      title: "Web application",
    },
    {
      id: "Blogs",
      title: "Blogs",
    },
    {
      id: "Digital Marketing",
      title: "Digital Marketing",
    },
    {
      id: "Social Media Management",
      title: "Social Media Management",
    },
    {
      id: "Other Projects",
      title: "Other Projects",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Web application":
        setData(webappPortfolio);
        break;
      case "Blogs":
        setData(blogsPortfolio);
        break;
      case "Digital Marketing":
        setData(DigitalMarketingPortfolio);
        break;
      case "Social Media Management":
        setData(SocialMediaManagementPortfolio);
        break;
      case "Other Projects":
        setData(OtherProjectsPortfolio);
        break;
      default:
        setData(webappPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
