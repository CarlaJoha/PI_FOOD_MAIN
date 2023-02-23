import style from './Detail.module.css';
import CardDetail from '../../components/Card/CardDetail/CardDetail';


const Detail = () => {
   return(
      <div>
         <h1 className={style.h1}>DETAIL</h1>
         <CardDetail/>
      </div>
   )
}

export default Detail;