function iReturnThings (thing) {
    return thing;
}

iReturnThings({ firstName: 'Brendan', lastName: 'Eich' })

function iInvokeThings (thing) {
    return thing();
  }
  
  iInvokeThings(function () { return 4 + 5; });