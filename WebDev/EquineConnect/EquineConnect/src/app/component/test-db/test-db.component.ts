// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-test-db',
//   templateUrl: './test-db.component.html',
//   styleUrls: ['./test-db.component.css']
// })
// export class TestDBComponent implements OnInit {

//   constructor(
//     private router:Router
//   ) { }

//   ngOnInit(): void {
    
//     const express = require('express');

//     function createRouter(db:any) {
//       const router = express.Router();
//       const id = '';
    
//       // router.post('/event', (req: { body: { title: any; description: any; type: any; image: any; website: any; phone: any; email: any; state: any; verified: any; city: any; zip: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; }): void; new(): any; }; }; }, next: any) => {
//       //   db.query(
//       //     'INSERT INTO equinec7_listings (id, title, description, type, image, website, phone, email, state, verified, city, zip) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
//       //     [id, req.body.title, req.body.description, req.body.type, req.body.image, req.body.website, req.body.phone, req.body.email, req.body.state, req.body.verified, req.body.city, req.body.zip],
//       //     (error: any) => {
//       //       if (error) {
//       //         console.error(error);
//       //         res.status(500).json({status: 'error'});
//       //       } else {
//       //         res.status(200).json({status: 'ok'});
//       //       }
//       //     }
//       //   );
    
//         router.get('/event', function (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; }): void; new(): any; }; }; }, next: any) {
//             db.query(
//               'SELECT id, title, description, type, primcont, image, website, phone, email, state, verified, city, zip FROM events WHERE verified=? true ?',
//             //   [owner, 10*(req.params.page || 0)],
//               (error:any, results:any) => {
//                 if (error) {
//                   console.log(error);
//                   res.status(500).json({status: 'error'});
//                 } else {
//                   res.status(200).json(results);
//                   console.log(results);
//                 }
//               }
//             );
//           });
    
//           // router.put('/event/:id', function (req: { params: { id: any; }; body: { title: any; description: any; type: any; image: any; website: any; phone: any; email: any; state: any; verified: any; city: any; zip: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; }): void; new(): any; }; }; }, next: any) {
//           //   db.query(
//           //     'UPDATE equinec7_listings SET title=?, description=?, type=?, primcont=?, image=?, website=?, phone=?, email=?, state=?, verified=?, city=?, zip=? WHERE id=?',
//           //     [req.params.id, req.body.title, req.body.description, req.body.type, req.body.image, req.body.website, req.body.phone, req.body.email, req.body.state, req.body.verified, req.body.city, req.body.zip],
//           //     (error:any) => {
//           //       if (error) {
//           //         res.status(500).json({status: 'error'});
//           //       } else {
//           //         res.status(200).json({status: 'ok'});
//           //       }
//           //     }
//           //   );
//           // });
    
//           // router.delete('/event/:id', function (req: { params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; }): void; new(): any; }; }; }, next: any) {
//           //   db.query(
//           //     'DELETE FROM equinec7_listings WHERE id=?',
//           //     [req.params.id],
//           //     (error:any) => {
//           //       if (error) {
//           //         res.status(500).json({status: 'error'});
//           //       } else {
//           //         res.status(200).json({status: 'ok'});
//           //       }
//           //     }
//           //   );
//           // });
//     // });
    
//       return router;
//     }
    
//     module.exports = createRouter;


//   }

  

// }
