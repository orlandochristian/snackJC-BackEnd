//localhost:3345/albums

const express = require('express');
const snacks = express.Router();


const {
    getAllSnacks,
     getSnack,
     createSnack,
     updateSnack,
     deleteSnack,
} =  require('../Queries/snacks');




// index
snacks.get("/", async (req, res) => 
{
    
    
  const allSnacks = await getAllSnacks();
  if (!allSnacks.error) {
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "server error" });
  } 
}
);

//show
//GET /Snack/ :id 
snacks.get("/:snackId", async(req, res) => {

    
  const { snackId } = req.params;
 
    const snack = await getSnack(snackId);
    if (snack.error != "error") {
        res.status(200).json(snack);
    } else {
        res.status(404).json({ error: "server error" });
    }
}
);

  

snacks.post("/", async (req, res) => {
          
            const newSnack = await createSnack(req.body);
            if (!newSnack.error) {
                res.status(200).json(newSnack);
            } else {
                res.status(404).json({ error: "server error!!!!" });
            }
            
         }
        ); 


//update

 snacks.put("/:snackId",
    async (req, res) => { 
      
        const { snackId } = req.params;
    const updatedSnack = await updateSnack(snackId, req.body);
    if (!updatedSnack.error) {
        res.status(200).json(updatedSnack);
    } else {
        res.status(404).json({ error: "server error" });
    }
});



snacks.delete("/:snackId", async (req, res) => {
   
    
    const { snackId } = req.params;


    const deletedSnack = await deleteSnack(snackId);
    if (!deletedSnack.error) {
        res.status(200).json(deletedSnack);
    } else {
        res.status(404).json({ error: "server error" });
    }
}); 

module.exports = snacks;