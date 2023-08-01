const Transaction = require( '../models/TransactionModel')

// Get all transactions
// GET /api/v1/transactions
// Public
exports.getTransactions = async (req, res, next) => {
    try {
      const transactions = await Transaction.find();
  
      return res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  };

// Add transactions
// POST /api/v1/transactions
// Public
exports.addTransactions = async (req, res, next) => {
    res.send('POST transactions')
}

// Delete transactions
// DELETE /api/v1/transactions/:id
// Public
exports.deleteTransactions = async (req, res, next) => {
    res.send('DELETE transactions')
}