import { useEffect } from "react";

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Victor Gabriel | ${title}` : "Victor Gabriel";

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
