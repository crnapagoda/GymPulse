import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { timeAgo } from "@/lib/utils";

type NotificationCardProps = {
  notification: Models.Document;
};

const NotificationCard = ({ notification }: NotificationCardProps) => {
  return (
    <Link to={notification.linkTo} className="flex items-center gap-4 p-4 hover:bg-dark-4/50 transition-colors border-b border-dark-4/60">
      <img
        src={notification.actorImageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="user"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <p className="text-light-1 text-sm">
          <span className="font-semibold">{notification.actorName}</span>{' '}
          {notification.type === 'follow' ? 'started following you' : 'liked your post'}
        </p>
        <p className="text-light-3 text-xs">{timeAgo(notification.$createdAt)}</p>
      </div>
      {!notification.isRead && (
        <div className="w-2 h-2 rounded-full bg-primary-500" />
      )}
    </Link>
  );
};

export default NotificationCard; 