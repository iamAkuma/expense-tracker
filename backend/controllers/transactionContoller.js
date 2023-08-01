const Transaction = require('../models/TransactionModel')

// Get all transactions
// GET /api/v1/transactions
// Public
exports.getTransactions = async (req, res, next) => {
    try {
        const options = { maxTimeMS: 20000 }; // Increase timeout to 20000 milliseconds (20 seconds)
        const transactions = await Transaction.find({}, null, options);


        if (transactions.length === 0) {
            // If no transactions are found, return an empty array
            return res.status(200).json({
                success: true,
                count: 0,
                data: [],
            });
        }

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

    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body)

        return res.send(201).json({
            success: true,
            data: transaction
        })
    } catch (error) {
        console.error(error);

    }

}

// Delete transactions
// DELETE /api/v1/transactions/:id
// Public
exports.deleteTransactions = async (req, res, next) => {
    res.send('DELETE transactions')
}