import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SinglePage = ({ ...rest }) => {
  const params = useParams();
  const categoryItems = rest[params.category];
  const data = categoryItems.find((element) => element.name === params.name);
  const [text, setText] = useState(null);
  const navigate = useNavigate();
  // Addition
  const [sheila, setSheila] = useState("");
  const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

  useEffect(() => {
    axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${data.name}`)
      .then((res) => {
        setText(res.data);
      })
      .catch((error) => {
        console.error("error", error);
        setText({ extract: "An error occurred." });
      });
  }, [data]);

  useEffect(() => {
    if (data) {
      const fetchImage = async () => {
        try {
          const response = await axios.get(
            `https://pixabay.com/api/?key=${apiKey}&q=${data.name}`
          );
          const imageUrl = response.data.hits[0]?.webformatURL || "";
          setSheila(imageUrl);
        } catch (error) {
          console.error("Error fetching image from Pixabay API", error);
        }
      };

      fetchImage();
    }
  }, [data, apiKey]);

  return (
    <div className="single-page">
      <h2 className="page-title">{data.name.toUpperCase()}</h2>
      <div className="page-content-container">
        <img
          className="page-image"
          // src={`https://source.unsplash.com/400x400/?${data.name}`}
          // Addition
          src={sheila}
          alt={data.name}
          style={{ width: "250px", height: "250px", borderRadius: "10px" }}
        />
        <p className="page-content">
          {text ? text.extract : "Loading content..."}
        </p>
      </div>
      <button className="go-back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default SinglePage;
