const validation = (input) => {
    
      let errors = {};
      if (!input.name) {
        errors.name = '! Title  is required';
      } else if (!input.summary) {
        errors.summary = '! summary  is required';
      } else if (!input.healthScore) {
        errors.healthScore = '! healthScore  is required';
      } else if (!input.diets) {
        errors.diets = 'You must select at least one type of diet';
      } else if (!input.name || !input.summary || !input.healthScore || !input.diets ){
        errors.form = 'You must fill out all fields';
      }
      
      return errors;
};

export default validation;