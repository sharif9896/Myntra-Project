import Containerbag from "../component/Containerbag";
import Summarybag from "../component/Summarybag";

const Bags = ()=>{
    return(
        <>
              <main>
      <div class="bag-page">
        <div class="bag-items-container">
            <Containerbag></Containerbag>
        </div>
        <div class="bag-summary">
        <Summarybag></Summarybag>
        </div>
      </div>
    </main>
        </>
    );
}
export default Bags;