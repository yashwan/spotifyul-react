import { loginUrl } from "./spotify";
export default function Navbar() {
  return (
    <div className="nav">
      <img
        className="login"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwSDcPB5BiNYYBFYC9kcG8st464LzORMRsA&usqp=CAU"
        alt=""
      />
      <div className="side">
        <a className="a" href={loginUrl}>
          Login To spotify{" "}
        </a>
      </div>
    </div>
  );
}
