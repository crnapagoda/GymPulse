import { useState, useEffect } from 'react';
import { useUserContext } from "@/context/AuthContext";
import { useGetUserNotifications, useMarkNotificationAsRead } from '@/lib/react-query/queries';
import NotificationCard from './NotificationCard';

const NotificationsDropdown = ({ 
  isOpen, 
  onClose
}: { 
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { user } = useUserContext();
  const { data: notifications } = useGetUserNotifications(user.id);
  const { mutate: markAsRead } = useMarkNotificationAsRead();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-[150] bg-transparent"
        onClick={onClose}
      />
      <div 
        className="fixed inset-0 bg-dark-1/20 backdrop-blur-sm z-[100]" 
        onClick={onClose} 
      />
      <div 
        className="fixed w-80 bg-dark-2/70 rounded-xl shadow-2xl border border-dark-4/60 overflow-hidden z-[110] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      >
        <div className="p-4 border-b border-dark-4/60 bg-dark-2/70 backdrop-blur-sm flex justify-between items-center">
          <h3 className="text-light-1 font-bold">Notifications</h3>
          <button onClick={onClose} className="hover:bg-dark-4/50 p-1 rounded-full transition-colors">
            <img src="/assets/icons/close.svg" alt="close" className="w-5 h-5 invert-white" />
          </button>
        </div>
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
          {!notifications?.documents || notifications.documents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 px-4">
              <p className="text-light-4 text-center">No notifications yet</p>
              <p className="text-light-4/60 text-sm text-center mt-1">
                When someone interacts with you, you'll see it here
              </p>
            </div>
          ) : (
            notifications.documents.map((notification) => (
              <div
                key={notification.$id}
                onClick={() => {
                  if (!notification.isRead) {
                    markAsRead(notification.$id);
                  }
                  onClose();
                }}
              >
                <NotificationCard notification={notification} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="fixed inset-0 z-[90] pointer-events-none">
        <div className="w-full h-full pointer-events-none" />
      </div>
    </>
  );
};

export default NotificationsDropdown; 