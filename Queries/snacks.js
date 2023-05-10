const db =  require("../Db/dbConfig.js");






const getAllSnacks = async () => {
    try {
      const allSnacks = await db.any("SELECT * FROM snacks");
      return allSnacks;
    } catch (error) {
      return {error};
    }
  };
  
  const getSnack = async (snackId) => {
    try {
      const snack = await db.one("SELECT * FROM snacks WHERE snack_id = $1", [snackId]);
      
      return snack;
    } catch (error) {
      return {error}; 
    }
  }


  const createSnack = async (snack) => {
    let healthy = false
    if (((snack.fiber > 5) || (snack.protein >5)) && (snack.sugar < 5)) {
      healthy = true
    }
    try {
      const newSnack = await db.one(`INSERT INTO snacks (name,image,fiber,protein,sugar,is_healthy) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`, [snack.name,snack.image,snack.fiber,snack.protein,snack.sugar,healthy]);
      return newSnack; 
    } catch (error) {
      return {error};
     
    }  
    }
  
    const updateSnack = async (snackId, snack) => {  
      const {name, image, fiber, protein, sugar} = snack
      let healthy = false
      if (((fiber > 5) || (protein >5)) && (sugar < 5)) 
        { healthy = true }
      try {
        const updatedSnack = await db.one(`UPDATE snacks SET name=$1, image=$2, fiber=$3, protein=$4, sugar=$5, is_healthy=$6 WHERE snack_id=$7 RETURNING *`, [name,image,fiber,protein,sugar,healthy,snackId]);
        return updatedSnack;
      } catch (error) {
        return {error}
      }
    }
  
    const deleteSnack = async (snackId) => {
      try {
        const deletedSnack = await db.one(`DELETE FROM snacks WHERE snack_id = $1 RETURNING *`, [snackId]);
        return deletedSnack;
      } catch (error) {
        return {error}; 
      }
    }






  module.exports = {
    getAllSnacks, 
    getSnack,
    createSnack,
    updateSnack,
    deleteSnack,
    };