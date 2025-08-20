import styles from './main.module.css'
import Promotion from './promotion';
import Specialists from './specialists';
import Services from './services';

function Main(){
    return(
    <main>
        <Specialists />
        <Promotion />
        <Services />
    </main>
    );
}

export default Main