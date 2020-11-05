import { includeHTML, preventIEError, debounce } from './lib';
import '@neux/ui-jquery/neux-ui-jquery';


function settingWord() {

  $('.focus-card__title').nxJqTextTrimmer({});
  $('.focus-card__description').nxJqTextTrimmer({});
  $('.report-grid__title').nxJqTextTrimmer({});
  $('.report-grid__description').nxJqTextTrimmer({});
  $('.report-grid__title').nxJqTextTrimmer({});

}

function resetting() {
  $(window).on('resize load', debounce(function () {
    $('.focus-card__title,.report-grid__title,.report-grid__title').each(function () {
      let ThisHeight = $(this).outerHeight(),
        oneRowSize = 0;
      if ($(this).find('.oneRowSize').length === 0) {
        $(this).append('<span class="oneRowSize">&nbsp;</span>');
        oneRowSize = $(this).find('.oneRowSize').outerHeight();

        if (ThisHeight > oneRowSize) {
          let descriptionMinLine = $(this).attr('description-min-line');
          $(this).siblings('[text-trimmer-max-line]').attr('text-trimmer-max-line', descriptionMinLine).nxJqTextTrimmer('refresh');
        } else {
          let descriptionMaxLine = $(this).attr('description-max-line');
          $(this).siblings('[text-trimmer-max-line]').attr('text-trimmer-max-line', descriptionMaxLine).nxJqTextTrimmer('refresh');
        }
      }
      $('.oneRowSize').remove();
    });
  }, 500));
}

function initCarousel() {
  $('.daily-news__carousel').nxJqCarousel();
}

function settingSameHeight() {
  let masterHeight = 0;
  $('.group-height').each(function () {
    $(this).css({ 'height': 'auto' });
    let thisHeight = $(this).outerHeight();
    if (thisHeight > masterHeight) {
      masterHeight = thisHeight;
    }
  });
  $('.group-height').css({ 'height': masterHeight });
}
function initSettingHeight() {
  $(window).on('resize load', debounce(function () {
    settingSameHeight();
  }, 200));

}
function initializePage() {
  settingWord();
  resetting();
  initCarousel();
  initSettingHeight();
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


