const express = require('express');
const router = express.Router({ mergeParams: true});

/* GET posts index /posts/:id/reviews */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts/:id/reviews');
});

/* POST reviews create /posts/:id/reviews */
router.post('/', (req, res, next) => {
  res.send('CREATE /posts/:id/reviews');
});

/* GET reviews edit /posts/:id/reviews/:id/edit */
router.get('/:review_id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

/* PUT reviews update /posts/:id/reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id');
});

/* DELETE reviews destroy /posts/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
  res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;


// GET index        /posts
// GET new          /posts/new
// POST create      /posts
// GET show         /posts/:id
// GET edit         /posts/:id/edit
// PUT update       /posts/:id
// DELETE destroy   /posts/:id
