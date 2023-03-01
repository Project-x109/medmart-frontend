import Tender from "./tender";
import { offerTender } from "./util/constants";
import { getRandomTender } from "./util/functions";

const { default: MetaData } = require("../Layouts/MetaData")

const Tenders=()=>{



return(<>
  <MetaData title="Tenders | Med Mart" />
  <main className="flex flex-col gap-3 mt-20 py-12 sm:mt-2 ">

  <h1 className="px-12 ml-0 w-full h-12 items-center pt-4 bg-primary-blue text-xl font-medium shadow-xl rounded">Tenders Sorted By Date </h1>
 <div className="flex-row overflow-hidden ">
  {getRandomTender(offerTender, 12).map((item, i) => (
                        <Tender {...item} key={i} />
                    ))}
                    </div>
  </main>
</>)
}
export default Tenders;
