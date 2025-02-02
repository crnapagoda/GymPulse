import { Models } from "appwrite";
import { Link } from "react-router-dom";

type FollowModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  users: Models.Document[];
};

const FollowModal = ({ isOpen, onClose, title, users }: FollowModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark-1/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-dark-2/70 w-full max-w-md rounded-xl shadow-2xl border border-dark-4/60 overflow-hidden">
        <div className="flex items-center justify-between border-b border-dark-4/60 p-4 bg-dark-2/70 backdrop-blur-sm">
          <h3 className="text-light-1 font-bold">{title}</h3>
          <button onClick={onClose} className="hover:bg-dark-4/50 p-1 rounded-full transition-colors">
            <img src="/assets/icons/close.svg" alt="close" className="w-5 h-5 invert-white" />
          </button>
        </div>
        
        <div className="max-h-[420px] overflow-y-auto custom-scrollbar">
          {users.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 px-4">
              <p className="text-light-4 text-center">No users yet</p>
              <p className="text-light-4/60 text-sm text-center mt-1">
                When people follow you, they'll appear here
              </p>
            </div>
          ) : (
            users.map((user) => (
              <Link 
                key={user.$id} 
                to={`/profile/${user.$id}`}
                onClick={onClose}
                className="flex items-center gap-3 p-4 hover:bg-dark-4/50 transition-colors border-b border-dark-4/60 last:border-none min-h-[76px]"
              >
                <img
                  src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-light-1 font-medium line-clamp-1">{user.name}</p>
                  <p className="text-light-3 text-sm truncate">@{user.username}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FollowModal; 