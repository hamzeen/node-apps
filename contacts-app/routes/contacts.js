var express = require('express');
var router = express.Router();
let passport = require('passport');
var Contact = require('../models/Contact');

router.get('/', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
  Contact.find({}, function(err, contacts) {
    res.json(contacts);
  });
});

router.get('/:id', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
  Contact.findOne({_id:req.params.id}, function(err, contacts) {
    res.json(contacts);
  });
});

router.post('/', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
    Contact.findOneAndUpdate({_id: req.body.id}, {$set:
        {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            category: req.body.category,
            imageData:req.body.imageData
        }
    }, {new: true}, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!")
        }else{
            res.json(doc)
        }
    });
});

router.put('/', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
    let newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      category: req.body.category,
      imageData:req.body.imageData
    });
    newContact.save(function(err,doc) {
      if (err) {
        return res.json({
          success: false,
          message: err.message
        });
      }
      console.log('finding one')
      Contact.findOne({_id:newContact._id}, function(err, contact) {
        res.json(contact);
      });
    });
});

router.delete('/:id', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
    Contact.remove({ _id:req.params.id }, function (err) {
        if(err){
            console.log("Something wrong when removing data!")
        }else{
            res.json({
            success: true,
            message: 'removed'
          })
        }
    });
});

module.exports = router;