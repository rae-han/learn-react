import { useEffect } from "react"

const useDebounce = ({ cb, ms, args }) => {
  useEffect(() => {
    const id = setTimeout(cb, ms);
    return () => clearTimeout(id);
  }, args);
}

export default useDebounce;