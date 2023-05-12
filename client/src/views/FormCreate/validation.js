const validation = (input) => {
    
      let errors = {};
      if (!input.name) {
        errors.name = '! Title  is required';
      } else if (!input.summary) {
        errors.summary = '! summary  is required';
      } else if (!input.healthScore) {
        errors.healthScore = '! healthScore  is required';
      } else if (!input.healthScore) {
        errors.healthScore = '! healthScore  is required';
      } else if (!input.image) {
        errors.image = '! Image  is required';
      } else if (!input.name || !input.summary || !input.healthScore || !input.diets || !input.image) {
        errors.form = 'You must fill out all fields';
      }
      
      return errors;
};

export default validation;