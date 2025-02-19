import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
  } from "@tanstack/react-query";
  

  import {
    createUserAccount,
    signInAccount,
    getCurrentUser,
    signOutAccount,
    getUsers,
    createPost,
    getPostById,
    updatePost,
    getUserPosts,
    deletePost,
    likePost,
    getUserById,
    updateUser,
    getRecentPosts,
    getInfinitePosts,
    searchPosts,
    savePost,
    deleteSavedPost,
    followUser,
    unfollowUser,
    getUserFollowers,
    getUserFollowing,
    checkIsFollowing,
    getUserNotifications,
    markNotificationAsRead,
    createNotification,
    deleteUserAccount,
  } from "@/lib/appwrite/api";
  import { INewPost, INewUser, IUpdatePost, IUpdateUser } from "@/types";
import { QUERY_KEYS } from "./queryKeys";
  
  // ============================================================
  // AUTH QUERIES
  // ============================================================
  
  export const useCreateUserAccount = () => {
    return useMutation({
      mutationFn: (user: INewUser) => createUserAccount(user),
    });
  };
  
  export const useSignInAccount = () => {
    return useMutation({
      mutationFn: (user: { email: string; password: string }) =>
        signInAccount(user),
    });
  };
  
  export const useSignOutAccount = () => {
    return useMutation({
      mutationFn: signOutAccount,
    });
  };
  
  // ============================================================
  // POST QUERIES
  // ============================================================
  
  export const useGetPosts = () => {
    return useInfiniteQuery({
      queryKey: [QUERY_KEYS.GET_INFINITE_POSTS],
      queryFn: getInfinitePosts as any,
      getNextPageParam: (lastPage: any) => {
        // Ako nema podataka, nema više stranica.
        if (lastPage && lastPage.documents.length === 0) {
          return null;
        }
  
        // Koristi $id poslednjeg dokumenta kao kursor.
        const lastId = lastPage.documents[lastPage.documents.length - 1].$id;
        return lastId;
      },
      initialPageParam: null, // Dodaj ovu liniju
    });
  };
  
  export const useSearchPosts = (searchTerm: string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.SEARCH_POSTS, searchTerm],
      queryFn: () => searchPosts(searchTerm),
      enabled: !!searchTerm,
    });
  };
  
  export const useGetRecentPosts = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
      queryFn: getRecentPosts,
    });
  };
  
  export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (post: INewPost) => createPost(post),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        });
      },
    });
  };
  
  export const useGetPostById = (postId?: string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_POST_BY_ID, postId],
      queryFn: () => getPostById(postId),
      enabled: !!postId,
    });
  };
  
  export const useGetUserPosts = (userId?: string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_USER_POSTS, userId],
      queryFn: () => getUserPosts(userId),
      enabled: !!userId,
    });
  };
  
  export const useUpdatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (post: IUpdatePost) => updatePost(post),
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_POST_BY_ID, data?.$id],
        });
      },
    });
  };
  
  export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({ postId, imageId }: { postId?: string; imageId: string }) =>
        deletePost(postId, imageId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        });
      },
    });
  };
  
  export const useLikePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({
        postId,
        likesArray,
      }: {
        postId: string;
        likesArray: string[];
      }) => likePost(postId, likesArray),
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_POST_BY_ID, data?.$id],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_POSTS],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_CURRENT_USER],
        });
      },
    });
  };
  
  export const useSavePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({ userId, postId }: { userId: string; postId: string }) =>
        savePost(userId, postId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_POSTS],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_CURRENT_USER],
        });
      },
    });
  };
  
  export const useDeleteSavedPost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (savedRecordId: string) => deleteSavedPost(savedRecordId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_POSTS],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_CURRENT_USER],
        });
      },
    });
  };
  
  // ============================================================
  // USER QUERIES
  // ============================================================
  
  export const useGetCurrentUser = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_CURRENT_USER],
      queryFn: getCurrentUser,
    });
  };
  
  export const useGetUsers = (limit?: number) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_USERS],
      queryFn: () => getUsers(limit),
    });
  };
  
  export const useGetUserById = (userId: string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_USER_BY_ID, userId],
      queryFn: () => getUserById(userId),
      enabled: !!userId,
    });
  };
  
  export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (user: IUpdateUser) => updateUser(user),
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_CURRENT_USER],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_USER_BY_ID, data?.$id],
        });
      },
    });
  };

  export const useDeleteUserAccount = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (userId: string) => deleteUserAccount(userId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_USERS],
        });
      },
    });
  };
  
  // ============================================================
  // FOLLOW QUERIES
  // ============================================================
  
  export const useFollowUser = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: ({ followerId, followingId }: { followerId: string, followingId: string }) => 
        followUser(followerId, followingId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_USER_FOLLOWERS],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_USER_FOLLOWING],
        });
      },
    });
  };
  
  export const useUnfollowUser = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: (followId: string) => unfollowUser(followId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_USER_FOLLOWERS],
        });
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_USER_FOLLOWING],
        });
      },
    });
  };
  
  export const useGetUserFollowers = (userId: string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_USER_FOLLOWERS, userId],
      queryFn: () => getUserFollowers(userId),
      enabled: !!userId,
    });
  };
  
  export const useGetUserFollowing = (userId: string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_USER_FOLLOWING, userId],
      queryFn: () => getUserFollowing(userId),
      enabled: !!userId,
    });
  };
  
  export const useCheckIsFollowing = (followerId: string, followingId: string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.CHECK_IS_FOLLOWING, followerId, followingId],
      queryFn: () => checkIsFollowing(followerId, followingId),
      enabled: !!followerId && !!followingId,
    });
  };
  
  // ============================================================
  // NOTIFICATION QUERIES
  // ============================================================
  
  export const useGetUserNotifications = (userId: string) => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_USER_NOTIFICATIONS, userId],
      queryFn: () => getUserNotifications(userId),
      enabled: !!userId,
    });
  };
  
  export const useMarkNotificationAsRead = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: (notificationId: string) => markNotificationAsRead(notificationId),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_USER_NOTIFICATIONS],
        });
      },
    });
  };

  export const useCreateNotification = () => {
    return useMutation({
      mutationFn: (variables: {
        userId: string;
        actorId: string;
        type: 'follow' | 'like';
        postId?: string;
      }) => createNotification(
        variables.userId,
        variables.actorId,
        variables.type,
        variables.postId
      )
    });
  };