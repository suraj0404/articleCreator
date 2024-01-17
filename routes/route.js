const router = require('express').Router();
const { allArticlesList, createArticles, updateData, deleteData, serachArticles, sortDateWise } = require('../controllers/controller');

router.get('/viewList', allArticlesList);

router.post('/create', createArticles);

router.put('/update/:id', updateData)

router.delete('/delete/:id', deleteData)

router.get('/search', serachArticles)

router.get('/sortDate/:ASCorDSC', sortDateWise)


module.exports = router;