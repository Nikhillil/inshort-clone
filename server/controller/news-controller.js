const News = require("../model/news-schema.js");

const getNews = async (req,res) => {
     try {
        const newsdata = await News.find({ });
         res.status(200).json(newsdata);
     } catch (error) {
        res.status(400).json({message: error.message});
     }
    
}

module.exports = getNews;