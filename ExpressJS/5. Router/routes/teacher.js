import express from "express";
const router = express.Router();

router.get("/all", (req,res)=> {
    res.send("All Teachers🚺");
});

router.post("/create", (req,res)=> {
    res.send("Signing...");
});

router.put("/update", (req,res)=> {
    res.send("Update!!");
});

router.delete("/delete", (req,res)=> {
    res.send("Remove Teachers🚺");
});

export default router;