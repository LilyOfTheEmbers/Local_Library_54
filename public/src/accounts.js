function findAccountById(accounts, id) {
    return accounts.find((accid) => accid.id === id)
    }
  
  function sortAccountsByLastName(accounts) {
    return accounts.sort((aAcc, bAcc) => (aAcc.name.last > bAcc.name.last ? 1 : -1))
  }
  
  function getTotalNumberOfBorrows(account, books) {
    return books.reduce((acc, book) => {
      for (let borrow of book.borrows) {
        if (borrow.id === account.id) {acc++}
      }
      return acc;
    }, 0);
  }
  
  function getBooksPossessedByAccount(account, books, authors) {
     let bookAccount = books
          .filter((book) => {
              for (let borrow of book.borrows) {
                  if (!borrow.returned && account.id === borrow.id) {
                      return borrow;
                  }
              }
          })
          .map((book) => {
              book.author = authors.find((author) => book.authorId === author.id);
              return book;
          });
      return bookAccount;
  }
  
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };
  