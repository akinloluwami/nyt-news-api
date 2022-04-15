import { useState, useEffect } from "react";
import axios from "axios";

function HeroNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;
  function getNews() {
    axios.get(apiUrl).then((res) => {
      const data = res.data.response.docs;
      const random = Math.floor(Math.random() * data.length);
      setNews(data[random]);
      setLoading(false);
    });
  }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="pt-8 ">
          <a href={news.web_url} target="_blank" rel="noopener noreferrer">
            <span className="text-3xl text-[#292b42] font-bold">
              {news.section_name}
            </span>
            <div className="absolute top-50 h-24 w-10">
              <div className="border-b-4 border-[#ec9677]"></div>
            </div>
            <div className="pt-12">
              <div className="flex space-x-4">
                <span className="text-xs font-semibold text-[#292b42]">
                  Lorem ipsum dolor sit amet.
                </span>
                <span className="text-xs"> - </span>
                <span className="text-xs font-semibold text-[#292b42]">
                  6 hours ago
                </span>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex flex-row justify-between">
                <div className="basis-1/4">
                  <span className="text-2xl tracking-widest text-ellipsis font-semibold text-[#292b42]">
                    {news.headline.main}
                  </span>
                </div>
                <div className="basis-1/2">
                  <img
                    src={`https://www.nytimes.com/${news.multimedia[0].url}`}
                    alt=""
                    width="400"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      )}
    </>
  );
}

export default HeroNews;
