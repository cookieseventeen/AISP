import { includeHTML, preventIEError } from './lib';
import '@neux/ui-jquery/neux-ui-jquery';


function initializePage() {
}

function main() {
  // init
  preventIEError();
  includeHTML(function () {
    initializePage();
  });

  // for api
}

main();


