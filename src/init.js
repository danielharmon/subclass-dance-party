
$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    $('.dancer').on('mouseenter', function(ev) {
      $(ev.target).addClass('slide-2');
    });

  });
  $('.lineUpButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {

      window.dancers[i].lineUp();
    }
  });
  $('.clearFloor').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.remove();
    }
    window.dancers = [];
  });
  $('.reset').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      var oldDancer = window.dancers[i];
      var newTop = $('body').height() * Math.random();
      var newLeft = $('body').width() * Math.random();
      oldDancer.setPosition(newTop, newLeft);
      oldDancer.$node.removeClass('slide-2');
      oldDancer.$node.removeClass('boxDancer');
    }
  });

  $('.danceTogether').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      var topPosition = Number(window.dancers[i].$node.css('top').slice(0, -2));
      var leftPosition = Number(window.dancers[i].$node.css('left').slice(0, -2));

      //window.dancers[i].$node.addClass('boxDancer');
      window.dancers[i + 1].setPosition(topPosition, leftPosition);
      window.dancers[i + 1].$node.addClass('boxDancer');
      window.dancers[i + 2].setPosition(topPosition, leftPosition + 150);
      window.dancers[i + 2].$node.addClass('boxDancer');
      window.dancers[i + 3].setPosition(topPosition, leftPosition + 300);
      window.dancers[i + 3].$node.addClass('boxDancer');
      i += 3;
    }
  });


});
