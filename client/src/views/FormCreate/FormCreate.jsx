// import validation from './validation.js';
import style from "./Form.module.css";
import React from "react";
import { getAllDiets, postRecipe } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "./validation";
import { Link, useNavigate } from "react-router-dom";
// import { Form, FormGroup } from "react-bootstrap";

const FormCreate = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const allDiets = useSelector((state) => state.allDiets);
  // const allRecipes = useSelector((state) => state.allRecipes)

  //LOCAL STATE del Form
  const [input, setInput] = useState({
    name: "",
    healthScore: 0,
    summary: "",
    instructions: [],
    image: "",
    diets: [],
  });
  // console.log(input)

  //Errors State
  const [errors, setErrors] = useState({
    name: "",
    healthScore: 0,
    summary: "",
    instructions: "",
    image: "",
    diets: [],
  });

  const handleChange = (event) => {
    //escucha los cambios del los inputs
    setInput({ ...input, [event.target.name]: event.target.value });
    setErrors(
      validation({
        ...input,
        [event.target.name]: event.target.value, //modifico el state errors
      })
    );
  };

  const handleCheckBox = (event) => {
    if (event.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, event.target.value],
      });
    } else {
      setInput({
        ...input,
        diets: [...input.diets],
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(input);
    setInput({
      name: "",
      summary: "",
      healthScore: 0,
      instructions: [],
      image: "",
      diets: [],
    });
    dispatch(
      postRecipe(
        input.name,
        input.healthScore,
        input.summary,
        [input.instructions],
        input.image,
        input.diets,
      )
    );

    navigateTo("/recipes");
  };

  useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  return (
    <div className={style.containerForm}>
      <form
        className={style.form}
        onSubmit={(event) => handleSubmit(event)}
        name="form"
      >
        <p className={style.p}>CREATE YOUR RECIPE</p>

        <label className={style.label}>Title recipe:</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={input.name}
          autoComplete="on"
          placeholder="Recipe Title"
          className={style.inputTitle}
        />
        {errors.name && <p className={style.errors}>{errors.name}</p>}

        <label className={style.label}>Summary:</label>
        <textarea
          onChange={handleChange}
          name="summary"
          value={input.summary}
          placeholder="Summary Recipe"
          className={style.textSummary}
          autoComplete="off"
        ></textarea>
        {errors.summary && <p className={style.errors}>{errors.summary}</p>}

        <label className={style.label}>Step by Step:</label>
        <textarea
          onChange={handleChange}
          name="instructions"
          value={input.instructions}
          className={style.textAreaInstructions}
          placeholder="Step-by-step explanation to make the recipe."
          autoComplete="off"
        ></textarea>

        <label className={style.label} htmlFor="image">
          Image:
        </label>
         <input
          onChange={handleChange}
          type="url"
          accept="image/*"
          name="image"
          value={input.image}
          placeholder="https://i.ibb.co/xJRF34R/landing.jpg"
          className={style.inputImage}
          autoComplete="off"
        /> 
        {errors.image && (
          <p className={style.errors}>{errors.image}</p>
        )}
        {/* <FormGroup>
          <Form.Label>Image Upload</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="file"
            accept="image/*"
            name="image"
            value={input.image}
            placeholder="image png or jpeg"
            autoComplete="off"
          />
        </FormGroup> */}

        <label className={style.labelHealthscore}>
          Health Score:
          <input
            className={style.inputHealthscore}
            onChange={handleChange}
            type="range"
            name="healthScore"
            value={input.healthScore}
            min="1"
            max="100"
            step={1}
            autoComplete="off"
          />{" "}
          <output htmFor="healthScore">{input.healthScore}</output>
        </label>
        {errors.healthScore && (
          <p className={style.errors}>{errors.healthScore}</p>
        )}

        <label className={style.label}>Diet Select: </label>
        <div className={style.containerCheckbox}>
          {allDiets.map((diet) => (
            <label key={diet.id} className={style.inputCheckbox}>
              <input
                onChange={(e) => handleCheckBox(e)}
                key={diet.id}
                name="diet"
                type="checkbox"
                value={diet.name}
              />
              {diet.name}
            </label>
          ))}
          {errors.diets && <p className={style.errors}>{errors.diets}</p>}
        </div>

        {/* <label className={style.label} htmlFor="addDiet">Add Diet:</label>
         <input 
            type="text" 
            name="addDiets"
            placeholder="added a diet"
            className={style.AddDiet}
            autoComplete="off"
         /> */}
        <span className={style.containerButtons}>
          <button className={style.buttonCreate}>CREATE RECIPE</button>
          {errors.form && <p className={style.errors}>{errors.form}</p>}
          <Link to="/recipes">
            <button className={style.buttonHome}>HOME</button>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default FormCreate;
