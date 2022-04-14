import { serve } from "./servicesData";
import Service from "./Service";

const Serving = () => {
  const weServe = serve.map((serves) => (
    <Service key={serves.id} {...serves} />
  ));
  return <div className="flex flex-wrap">{weServe}</div>;
};
export default Serving;
