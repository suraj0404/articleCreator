const articlesDetails = require('../models/model')


const allArticlesList = async (req, res) => {
    let response = {};

    try {

        const allData = await articlesDetails.find();
        response = {
            error: false,
            result: allData,
            message: `Data fetched successfully!`
        }
    }
    catch (err) {
        response = {
            error: true,
            message: `${err}`
        }
    }
    res.send(response);

}

const createArticles = async (req, res) => {
    let response = {}

    try {

        const newdata = new articlesDetails({
            id: req.body.id,
            title: req.body.title,
            des: req.body.des,
            category: req.body.category,
            slug: req.body.slug,
            createdDate: req.body.createdDate,

        });

        const savData = await newdata.save()

        if (savData) {
            response = {
                error: false,
                message: 'Data added successfully!'
            }
        } else {
            response = {
                error: true,
                message: 'Error while Adding !'
            }
        }
    }
    catch (err) {
        response = {
            error: true,
            message: `${err}`
        }

    }
    res.send(response);
}

const updateData = async (req, res) => {
    let response = {}
    try {
        const result = await articlesDetails.updateOne({ id: req.params.id }, { $set: { id: req.body.id, title: req.body.title, des: req.body.des, category: req.body.category, slug: req.body.slug, createdDate: req.body.createdDate } });
        if (result) {
            response = {
                error: false,
                message: 'Data updated successfully!'
            }
        }
        else {
            response = {
                error: true,
                message: 'error while update!'
            }
        }
    } catch (err) {
        const response = {
            error: true,
            message: `${err}`
        }
    }
    res.send(response);
}

const deleteData = async (req, res) => {
    console.log(req.params)
    let response = {}
    try {
        const result = await articlesDetails.deleteOne({ id: req.params.id });
        if (result) {
            response = {
                error: false,
                message: 'Data deleted successfully!'
            }
        }
        else {
            response = {
                error: true,
                message: 'error while delete!'
            }
        }
    } catch (err) {
        response = {
            error: true,
            message: `${err}`
        }

    }
    res.send(response);
}

const serachArticles = async (req, res) => {
    let response = {};
    try {
        const searchData = await articlesDetails.find(req.query);
        response = {
            error: false,
            result: searchData,
            message: `Data fetched successfully!`
        }
    }
    catch (err) {
        response = {
            error: true,
            message: `${err}`
        }
    }
    res.send(response);

}

const sortDateWise = async (req, res) => {
    console.log(req.params.ASCorDSC)
    let response = {};

    try {
        var sortData = []
        const allData = await articlesDetails.find();
        if (req.params.ASCorDSC == "asc") {
            sortData = allData.sort((first, second) => first.createdDate - second.createdDate)
        } else if (req.params.ASCorDSC == "dsc") {
            sortData = allData.sort((first, second) => first.createdDate + second.createdDate)

        }
        response = {
            error: false,
            result: sortData,
            message: `Sorted Data fetched successfully!`
        }
    }
    catch (err) {
        response = {
            error: true,
            message: `${err}`
        }
    }
    res.send(response);

}

module.exports = {
    allArticlesList,
    createArticles,
    updateData,
    deleteData,
    serachArticles,
    sortDateWise
}