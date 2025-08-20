import styles from './main.module.css'
import Promotion from './promotion';
import Specialists from './specialists';
import Services from './services';
import Promotion2 from './promotion2';

function Main(){
    return(
    <main>
        <Specialists />
        <Promotion />
        <Services />
        <Promotion2 />
    </main>
    );
}

export default Main