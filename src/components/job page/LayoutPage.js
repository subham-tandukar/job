import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LayoutPage(props) {
  return (
    <>
      <div className="jobListPage">
        <Navbar />

        <div>{props.children}</div>
        <Footer />
      </div>
    </>
  );
}
