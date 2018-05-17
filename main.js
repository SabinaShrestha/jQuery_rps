
  // $('#paper').on('click', function(){
  //   user_hand = 'PAPER'
  //   $('#user_choice').text('Your hand ' + user_hand)
  // })
  //
  // $('#scissors').on('click', function(){
  //   user_hand = 'SCISSORS'
  //   $('#user_choice').text('Your hand ' + user_hand)
  // })
  // $('#play').on('click', function(){
  //   total ++
  //   rand = choices[Math.floor(Math.random() * choices.length)].toUpperCase()
  //   $('#computer_choice').text('Computer hand ' + rand)
  //   // eval(user_hand)
  //   if (user_hand === rand){
  //     $('#winner').text("It's a Tie ")
  //     tie++
  //   }else if((rand == 'ROCK')&&(user_hand == 'PAPER')||
  //       (rand == 'SCISSORS')&&(user_hand == 'ROCK')||
  //       (rand == 'PAPER')&&(user_hand == 'SCISSORS')){
  //       $('#winner').text('You Win.')
  //       wins++
  //     }else if((rand == 'PAPER')&&(user_hand == 'ROCK')||
  //       (rand == 'SCISSORS')&&(user_hand == 'PAPER')||
  //       (rand == 'ROCK')&&(user_hand == 'SCISSORS')){
  //       $('#winner').text('You Lose.')
  //       lose++
  //   }else{
  //       $('#winner').text('Oh Oh! Something went wrong.')
  //   }
  //   percentage()
  // })



  $(document).ready(function(){
    var choices = ['ROCK','PAPER', 'SCISSORS']
    var rand
    var user_hand
    var wins = 0
    var lose = 0
    var tie = 0
    var total = 0
    var result

  $('.user').on('click', function(){
    user_hand = $(this).text()
    $('#user_choice').text('Your hand ' + user_hand)
  })

  function percentage(){
    winpercentage = (wins/total * 100).toFixed(2)
    if (winpercentage !== "NaN")
      $('#win_percentage').text('Win : ' + winpercentage + '%')
    else
      winpercentage = 0
      $('#win_percentage').text('Win : ' + winpercentage + '%')

    losepercentage = (lose/total * 100).toFixed(2)
    if (losepercentage !== "NaN")
      $('#lose_percentage').text('Lose : ' + losepercentage + '%')
    else
      losepercentage = 0
      $('#lose_percentage').text('Lose : ' + losepercentage + '%')

    tiepercentage = (tie/total * 100).toFixed(2)
    if (tiepercentage !== "NaN")
      $('#tie_percentage').text('Tie : ' + tiepercentage + '%')
    else
      tiepercentage = 0
      $('#tie_percentage').text('Tie : ' + tiepercentage + '%')

  }

  function img_display(){
    debugger
    switch (result){
      case "WIN":
        $('#display_win').html('<img class="img2" alt="win" src="images/win.gif"></img>')
        break
      case "LOSE":
        $('#display_win').html('<img class="img1" alt="lose" src="images/lose.gif"></img>')
        break
      case "TIE":
        $('#display_win').html('<img class="img1" alt="tie" src="images/tie1.gif"></img>')
        break
      default:
    }
  }


  $('#play').on('click', game)

  function game(){
    total ++
      rand = choices[Math.floor(Math.random() * choices.length)].toUpperCase()
      $('#computer_choice').text('Computer hand ' + rand)
      // eval(user_hand)
      if (user_hand === rand){
        $('#winner').text("It's a Tie ")
        tie++
        result = "TIE"
      }else if((rand == 'ROCK')&&(user_hand == 'PAPER')||
          (rand == 'SCISSORS')&&(user_hand == 'ROCK')||
          (rand == 'PAPER')&&(user_hand == 'SCISSORS')){
          $('#winner').text('You Win.')
          wins++
          result = "WIN"
          // debugger
        }else if((rand == 'PAPER')&&(user_hand == 'ROCK')||
          (rand == 'SCISSORS')&&(user_hand == 'PAPER')||
          (rand == 'ROCK')&&(user_hand == 'SCISSORS')){
          $('#winner').text('You Lose.')
          lose++
          result = "LOSE"
      }else{
          $('#winner').text('Oh Oh! Something went wrong.')
          result = "0"
      }
      percentage()
      img_display(result)
      }





  $('#refresh').on('click', function(){
    wins = 0
    lose = 0
    tie = 0
    total = 0
    winpercentage = "0"
    losepercentage = "0"
    tiepercentage = "0"
    $('#user_choice').text('Choose your hand')
    $('#computer_choice').text('Computer hand')
    $('#winner').text('Wins')
    percentage()
    $('#display_win').html("")

  })


})
