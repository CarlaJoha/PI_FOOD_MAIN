import CardDetail from "../../components/Card/CardDetail/CardDetail";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getRecipesDetail, clearDetail
} from "../../redux/actions";
import { useParams, Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [ loading, setLoading ] = useState(false);

  const detail = useSelector((state) => state.recipeDetail);
  // console.log("Este es el State de Detail", detail);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
    dispatch(getRecipesDetail(id));
    dispatch(clearDetail())
  }, [dispatch, id]);
 
  return (
    <div className={style.containerDetail}>
      {
        loading ?
        <PulseLoader
        className={style.clipLoader}
        color={"#b90000"}
        loading={loading}
        size={30}
        speedMultiplier={1}
      /> :
      <>
      <Link to="/recipes"><button className={style.buttonHome}>HOME</button></Link>
      <CardDetail
        id={detail.id}
        image={detail.image}
        name={detail.name}
        healthScore={detail.healthScore}
        diets={detail.diets}
        summary={detail.summary}
        instructions={detail.instructions}
        />
      </>
      }
    </div>
  );
};

export default Detail;
