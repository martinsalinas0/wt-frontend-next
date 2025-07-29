import Link from "next/link";

export const UserPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-4 mt-10">
        <h1 className="font-bold text-6xl mb-6">User Page</h1>

        <div>
          <h1 className="text-2xl">John doe</h1>
          <p>CONTRACTOR(role)</p>
          <p>Email</p>
          <p>phone number</p>
          <p>address</p>
          <p>rating: 5 stars</p>
        </div>
        <span className="font-bold uppercase 4xl text-blue-500">
          <ul>
            <li>
              <Link href="/user/settings">user settings</Link>
            </li>
            <li>
              <Link href="/user/preferences">user prefernces</Link>
            </li>
            <li>
              <Link href="/user/other">misc</Link>
            </li>
          </ul>
        </span>
      </div>{" "}
      <div>
        <span className="flex m-3 p-3">
          <p className="m-1"> Jobs Completed: 23</p>{" "}
          <p className="m-1">
            <Link href="/user/jobs">
              <em>View</em>
            </Link>
          </p>
        </span>
        <span className="flex m-3 p-3">
          <p className="m-1"> Reviews Recieved: 2</p>{" "}
          <p className="m-1">
            <Link href="/user/reviews">
              <em>View</em>
            </Link>
          </p>
        </span>
      </div>
    </div>
  );
};

export default UserPage;
