import { useState, useEffect } from "react";

export const UserNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    { name: "Jessica P.", amount: "$750", location: "California" },
    { name: "Maria G.", amount: "$720", location: "Arizona" },
  ];

  const [currentNotification, setCurrentNotification] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, notifications.length]);

  if (!isVisible) return null;

  const notification = notifications[currentNotification];

  return (
    <div className="fixed left-4 bottom-4 z-50 animate-in slide-in-from-left duration-500">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-xs">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              <span className="font-semibold">{notification.name}</span> claimed{" "}
              <span className="text-green-600 font-semibold">{notification.amount}</span>
            </p>
            <p className="text-xs text-gray-500">{notification.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};