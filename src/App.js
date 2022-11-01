import picture from "./Paul Oyediran.jpg";
import share from "./share.svg";
import share2 from "./share2.svg";
import slack from "./slack.svg";
import github from "./github.svg";
import zuri from "./zuri.svg";
import i4g from "./i4g.svg";


import "./App.css";

function App() {
  return (
    <>
      <div className="container">
      <div className="profile_container">
        <img className="profile_pic" src={picture} alt="profile" />
        <img id="share" src={share} alt="profile" />
        <img id="share2" src={share2} alt="profile" />
        {/* <span id='slack'>paulodeb</span> */}
        <span>Paul Oyediran</span>
      </div>
      <div className="btn_container">
        <a
          id="twitter"
          href="https://twitter.com/Paul02721445?t=02PVSrHWZkPpBNSarp5I7w&s=09"
        >
          Twitter Link
        </a>
        {/* <a id='slack' href='https://twitter.com/Paul02721445?t=02PVSrHWZkPpBNSarp5I7w&s=09'>paulode Link</a> */}

        <a id="btn_zuri" href="https://training.zuri.team/">
          Zuri Team
        </a>

        <a id="books" href="https://books.zuri.team">
          Zuri Books
        </a>

        <a
          id="book_python"
          href="https://books.zuri.team/python-for-beginners?ref_id=paulodeb"
        >
          Python Books
        </a>

        <a id="pitch" href="https://background.zuri.team">
          Background Check for Coders
        </a>

        <a id="book_design" href="https://books.zuri.team/design-rules">
          Design Books
        </a>
      </div>
      <div className="svg-container">
        <img id="slack" src={slack} alt=" " />
        <img id="zuri" src={github} alt=" " />
      </div>
      <footer className="footer">
        <img id="slack" src={zuri} alt=" " />
        <p id="hng">HNG Internship 9 Frontend Task</p>
        <img id="slack" src={i4g} alt=" " />
      </footer>
      </div>
    </>
  );
}

export default App;
