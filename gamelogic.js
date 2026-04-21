function getWinner(player, computer) {
  if (player === computer) return 'TIE';

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'WIN';
  }

  return 'LOSE';
}

module.exports = { getWinner };
