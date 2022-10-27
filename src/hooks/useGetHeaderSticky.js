import { useEffect } from "react";

export const useGetHeaderSticky = (ref) => {
  useEffect(() => {
    const handleScroll = () => {
      console.log(ref);
      let sticky = ref.current.offsetTop;
      console.log({ sticky });
      if (window.pageYOffset >= sticky) {
        ref.current.classList.add("sticky");
      } else {
        ref.current.classList.remove("sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);
  }, [ref]);

  return;
};
