// const express = require('express');

// function createRouter(db) {
//   const router = express.Router();
//   const id = '';

//   router.post('/event', (req, res, next) => {
//     db.query(
//       'INSERT INTO equinec7_listings (id, title, description, type, primcont, image, website, phone, email, state, verified, city, zip) VALUES (?,?,?,?)',
//       [id, req.body.title, req.body.description, req.body.type, req.body,primcont, req.body.image, req.body.website, req.body.phone, req.body.email, req.body.state, req.body.verified, req.body.city, req.body.zip],
//       (error) => {
//         if (error) {
//           console.error(error);
//           res.status(500).json({status: 'error'});
//         } else {
//           res.status(200).json({status: 'ok'});
//         }
//       }
//     );

//     router.get('/event', function (req, res, next) {
//         db.query(
//           'SELECT id, title, description, type, primcont, image, website, phone, email, state, verified, city, zip FROM events WHERE verified=? true ?',
//         //   [owner, 10*(req.params.page || 0)],
//           (error, results) => {
//             if (error) {
//               console.log(error);
//               res.status(500).json({status: 'error'});
//             } else {
//               res.status(200).json(results);
//             }
//           }
//         );
//       });

//       router.put('/event/:id', function (req, res, next) {
//         db.query(
//           'UPDATE equinec7_listings SET title=?, description=?, type=?, primcont=?, image=?, website=?, phone=?, email=?, state=?, verified=?, city=?, zip=? WHERE id=?',
//           [req.params.id, req.body.title, req.body.description, req.body.type, req.body,primcont, req.body.image, req.body.website, req.body.phone, req.body.email, req.body.state, req.body.verified, req.body.city, req.body.zip],
//           (error) => {
//             if (error) {
//               res.status(500).json({status: 'error'});
//             } else {
//               res.status(200).json({status: 'ok'});
//             }
//           }
//         );
//       });

//       router.delete('/event/:id', function (req, res, next) {
//         db.query(
//           'DELETE FROM equinec7_listings WHERE id=?',
//           [req.params.id],
//           (error) => {
//             if (error) {
//               res.status(500).json({status: 'error'});
//             } else {
//               res.status(200).json({status: 'ok'});
//             }
//           }
//         );
//       });
// });

//   return router;
// }

// module.exports = createRouter;
