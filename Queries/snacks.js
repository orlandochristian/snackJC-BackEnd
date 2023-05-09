const db =  require("../Db/dbConfig.js");



// createSnack,
// updateSnack,
// deleteSnack,


const getAllSnacks = async () => {
    try {
      const allSnacks = await db.any("SELECT * FROM snacks");
      return allSnacks;
    } catch (err) {
      return err;
    }
  };
  
  const getSnack = async (snackId) => {
    try {
      const snack = await db.one("SELECT * FROM albums WHERE album_id = $1", [snackId]);
      
      return snack;
    } catch (error) {
      return {error}; //object error : key value of error
    }
  }


  const createSnack = async (snack) => {
    try {
      const newSnack = await db.one(`INSERT INTO albums () VALUES () RETURNING *`, [snack columbs here]);
      return newSnack; 
    } catch (err) {
      return {error};
     
    }  
    }
  
    const updateSnack = async (snackId, snack) => {  
      try {
        const updatedSnack = await db.one(`UPDATE snacks SET  RETURNING *`, [snacks columbs here]);
        return updatedSnack;
      } catch (err) {
        return {error};
      }
    }
  
    const deleteSnack = async (snackId) => {
      try {
        const deletedSnack = await db.one(`DELETE FROM snacks WHERE snack_id = $1 RETURNING *`, [snackId]);
        return deletedSnack;
      } catch (err) {
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