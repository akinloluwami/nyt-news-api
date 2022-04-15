import HeroNews from "../../components/HeroNews";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;
  function getNews() {
    axios.get(apiUrl).then((res) => {
      const data = res.data.response.docs;
      setNews(data);
      setLoading(false);
    });
  }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="p-20">
      <Navbar />
      <HeroNews />
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center">
          {news.map((item, index) => {
            return (
              <div className="pt-8 m-10 flex items-center flex-col" key={index}>
                <a href={item.web_url} target="_blank">
                  <img
                    src={`https://www.nytimes.com/${item.multimedia[22].url}`}
                    alt=""
                    width="250"
                    className="rounded-lg"
                  />
                  <div className="flex">
                    <p className="">{item.section_name}</p>
                  </div>
                  <h3 className="">{item.headline.main}</h3>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
