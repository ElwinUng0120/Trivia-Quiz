const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema({

  username: {
    type: String,
    required: [true, 'Please enter a username.'],
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    minlength: [8, 'Enter a password no less than 8 characters in length.'],
    required: true,
    trim: true
  },
  highscore_TA: {
    type: Number,
    default: 0
  },
  highscore_LVL: {
    type: Number,
    default: 0
  },
  pic_url: {
    type: String,
    default: ''
  }
});

const userData = mongoose.model("userData", userSchema);

module.exports = userData;
