const validation = (input) => {

      let errors = {};
      if (!input.name) {
        errors.name = '! Title  is required';
      } else if (!input.summary) {
        errors.summary = '! summary  is required';
      } else if (!input.healthScore) {
        errors.healthScore = '! healthScore  is required';
      } else if (!input.diet.length) {
        errors.diet = 'You must select at least one type of diet';
      }
    
      return errors;
};

export default validation;