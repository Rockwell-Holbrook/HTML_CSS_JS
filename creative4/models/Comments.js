var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  characterName: String,
});
mongoose.model('SearchHistory', CommentSchema);