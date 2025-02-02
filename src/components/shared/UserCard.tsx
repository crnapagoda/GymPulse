import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useFollowUser, useUnfollowUser, useCheckIsFollowing } from "@/lib/react-query/queries";
import { Loader } from "@/components/shared";

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {
  const { user: currentUser } = useUserContext();
  const { data: followingStatus, isLoading: checkingFollow } = useCheckIsFollowing(
    currentUser.id,
    user.$id
  );

  const { mutate: followUser, isPending: isFollowing } = useFollowUser();
  const { mutate: unfollowUser, isPending: isUnfollowing } = useUnfollowUser();

  const handleFollowUser = () => {
    if (followingStatus) {
      unfollowUser(followingStatus.$id);
    } else {
      followUser({ followerId: currentUser.id, followingId: user.$id });
    }
  };

  return (
    <Link to={`/profile/${user.$id}`} className="user-card">
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="creator"
        className="rounded-full w-14 h-14"
      />

      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 text-center line-clamp-1">
          {user.name}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1">
          @{user.username}
        </p>
      </div>

      {currentUser.id !== user.$id && (
        <Button
          type="button"
          size="sm"
          className="shad-button_primary px-5"
          disabled={isFollowing || isUnfollowing || checkingFollow}
          onClick={(e) => {
            e.preventDefault();
            handleFollowUser();
          }}>
          {isFollowing || isUnfollowing || checkingFollow ? (
            <Loader />
          ) : followingStatus ? (
            "Unfollow"
          ) : (
            "Follow"
          )}
        </Button>
      )}
    </Link>
  );
};

export default UserCard;