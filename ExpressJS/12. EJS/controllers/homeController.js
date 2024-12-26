const homeController = (req,res)=> {
    const data = {
        name: "Skai",
        userid: 128
    };
    res.render("index", data);
};

export { homeController };