import routeConfig from "routes/routeConfig";

import AppBarLink from "./styles/AppBarLink";

const Profile = () => (
  <div className="flex">
    <ul className="flex justify-items-center pl-0">
      <ProfileLink className="pr-0 hidden" to={routeConfig.login.getPath()}>
        Log in
      </ProfileLink>
    </ul>
  </div>
);

const ProfileLink = ({
  children,
  className,
  ...props
}: {
  children: string;
  className: string;
  to: string;
}) => (
  <li className={`${className} m-0 px-6 self-center cursor-pointer`}>
    <AppBarLink {...props}>{children}</AppBarLink>
  </li>
);

export default Profile;
