// function iReturnThings (callback) {
//     return callback;
//   }

function receivesAFunction(receiveFuncAtivity) {
    receiveFuncAtivity();
  }

function returnsANamedFunction() {
    return function namedFunc() {

    };
  }
function returnsAnAnonymousFunction() {
        return function() {};
  }


