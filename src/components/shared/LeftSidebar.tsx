import { useState, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { INavLink } from "@/types";
import { sidebarLinks } from "@/constants";
import { Loader } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useSignOutAccount, useGetUserNotifications } from "@/lib/react-query/queries";
import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import NotificationsDropdown from "./NotificationsDropdown";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, setUser, setIsAuthenticated } = useUserContext();

  const { mutate: signOut } = useSignOutAccount();
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationButtonRef = useRef<HTMLDivElement>(null);
  const { data: notifications } = useGetUserNotifications(user.id);

  const unreadCount = notifications?.documents.filter(n => !n.isRead).length || 0;

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/gympulselogo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>

        {!user.email ? (
          <div className="h-14">
            <Loader />
          </div>
        ) : (
          <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="body-bold">{user.name}</p>
              <p className="small-regular text-light-3">@{user.username}</p>
            </div>
          </Link>
        )}

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}>
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}

          <li className="leftsidebar-link group hidden md:block">
            <div 
              ref={notificationButtonRef}
              className="flex gap-4 items-center p-4 cursor-pointer" 
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <img
                src="/assets/icons/notification.svg"
                alt="notifications"
                className={`group-hover:invert-white ${
                  showNotifications && "invert-white"
                }`}
              />
              <span>Notifications</span>
              {unreadCount > 0 && (
                <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center ml-auto">
                  <span className="text-white text-xs">{unreadCount}</span>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={handleSignOut}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>

      <NotificationsDropdown 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)}
      />
    </nav>
  );
};

export default LeftSidebar;