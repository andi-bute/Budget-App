//var services = (function() {
//    return {
//        addTransaction: function (name, category, amount, type, date) {
//            if (type == "income") {
//                transactionsStore.addTransaction({
//                    name: name,
//                    categoryId: category,
//                    sum: amount,
//                    type: type,
//                    date: date
//                });
//                var totalNewBudget = budgetsStore.getTotalBudget() + parseInt(amount);
//                budgetsStore.setTotalBudget(totalNewBudget);
//            } else {
//                transactionsStore.addTransaction({
//                    name: name,
//                    categoryId: category,
//                    sum: amount,
//                    type: type,
//                    date: date
//                });
//                totalNewBudget = budgetsStore.getTotalBudget() - parseInt(amount);
//                budgetsStore.setTotalBudget(totalNewBudget);
//            }
//        },
//        editTransaction: function (id, name, amount, category, type, date) {
//            var totalBudget = budgetsStore.getTotalBudget();
//            var transactionSum = transactionsStore.getTransaction(id).sum;
//
//            totalBudget = parseInt(totalBudget - transactionSum + amount);
//            budgetsStore.setTotalBudget(totalBudget);
//            transactionsStore.updateTransaction(id, {
//                name: name,
//                category: category,
//                sum: amount,
//                type: type,
//                date: date
//            });
//        },
//        deleteTransaction: function (id) {
//            var totalBudget = budgetsStore.getTotalBudget();
//            var transactionSum = transactionsStore.getTransaction(id).sum;
//
//            totalBudget = parseInt(totalBudget + transactionSum);
//            budgetsStore.setTotalBudget(totalBudget);
//            transactionsStore.deleteTransaction(id);
//        }
//
//    }
//})();
var getAllTransactions = function () {
    return repo.getAllTransactions();
};

var addTransaction = function (name, category, amount, type, date) {
    repo.addTransaction(name, category, amount, type, date);
    repo.updateBudget(type, amount);
};

var editTransaction = function (id, name, category, amount, type, date) {
    repo.getTransaction(id).then(function (data) {
        var newSum = parseInt(amount) - parseInt(data.sum);

        repo.updateTransaction(id, name, category, amount, type, date);
        repo.updateBudget(type, newSum);
    });
};

var getAllRecurrings = function () {
    return repo.getAllRecurings();
};

var addRecurring = function (item) {
    repo.addRecurring(item);
};

var updateRecurring = function (id, item) {
    repo.updateRecurring(id, item);
};

var getAllCategories = function () {
    return repo.getAllCategories();
};

var addCategory = function (item) {
    return repo.addCategory(item);
};

var updateCategory = function (id, item) {
    return repo.updateCategory(id, item);
};

var deleteCategory = function (id) {
    return repo.deleteCategory(id);
};