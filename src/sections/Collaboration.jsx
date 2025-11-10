import Marquee from "@/components/Marquee.jsx";
import { collaborations } from "../data/index.js";

const Collaboration = () => {
  return (
    <div>
      <Marquee list={collaborations} />
    </div>
  )
}

export default Collaboration