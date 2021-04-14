const mongoose = require('mongoose');
const config = require('./config.js');

// const { Schema } = mongoose;


const Income = new mongoose.Schema({}, { "strict": false });
const Expense = new mongoose.Schema({}, { "strict": false });
const Cogs = new mongoose.Schema({}, { "strict": false });
const OtherExp = new mongoose.Schema({}, { "strict": false });
const NetOther = new mongoose.Schema({}, { "strict": false });

// const PnL = new mongoose.Schema({}, { "strict": false });

const PnLSchema = new mongoose.Schema({
    Income : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Income'
      },
    Expense : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
      },
    Cogs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cogs'
      },
    OtherExp : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OtherExp'
      },
    NetOther : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NetOther'
      }
});

module.exports = mongoose.model('PnL', PnLSchema);

