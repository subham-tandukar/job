import { useContext } from "react";
import { Helmet } from "react-helmet";
import JobContext from "../context/jobContext";

export default function URLpreview({ description, title, img }) {
  const { url } = useContext(JobContext);
  console.log("description", description);
  console.log("title", title);
  console.log("img", img);
  console.log("url", url);

  return (
    <div>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={img} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
      </Helmet>
    </div>
  );
}
