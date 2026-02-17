import { createContext, ReactNode, useContext, useState } from "react";

interface WatchlistContextType {
  watchlist: Set<string>;
  addToWatchlist: (propertyId: string) => void;
  removeFromWatchlist: (propertyId: string) => void;
  isWatchlisted: (propertyId: string) => boolean;
  toggleWatchlist: (propertyId: string) => void;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<Set<string>>(new Set());

  const addToWatchlist = (propertyId: string) => {
    setWatchlist((prev) => new Set([...prev, propertyId]));
  };

  const removeFromWatchlist = (propertyId: string) => {
    setWatchlist((prev) => {
      const newSet = new Set(prev);
      newSet.delete(propertyId);
      return newSet;
    });
  };

  const isWatchlisted = (propertyId: string) => {
    return watchlist.has(propertyId);
  };

  const toggleWatchlist = (propertyId: string) => {
    if (isWatchlisted(propertyId)) {
      removeFromWatchlist(propertyId);
    } else {
      addToWatchlist(propertyId);
    }
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isWatchlisted,
        toggleWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error("useWatchlist must be used within a WatchlistProvider");
  }
  return context;
}
