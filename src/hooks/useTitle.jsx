import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Filmology`;
    });
    return null;
}

export default useTitle;