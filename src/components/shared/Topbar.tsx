import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useSignOutAccount, useGetUserNotifications } from "@/lib/react-query/queries";
import NotificationsDropdown from "./NotificationsDropdown";

const Topbar = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const [showNotifications, setShowNotifications] = useState(false);
  const { data: notifications } = useGetUserNotifications(user.id);

  const unreadCount = notifications?.documents.filter(n => !n.isRead).length || 0;

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/gympulselogo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4 md:hidden lg:flex">
          <div className="relative">
            <Button
              variant="ghost"
              className="shad-button_ghost"
              onClick={() => setShowNotifications(!showNotifications)}>
              <img src="/assets/icons/notification.svg" alt="notifications" />
              {unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">{unreadCount}</span>
                </div>
              )}
            </Button>
            <NotificationsDropdown 
              isOpen={showNotifications} 
              onClose={() => setShowNotifications(false)} 
            />
          </div>

          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}>
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;