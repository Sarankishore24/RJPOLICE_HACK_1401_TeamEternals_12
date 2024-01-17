const { getBalance } = require('./Sample.js');

async function main() {
  try {
    const balance = await getBalance('output.txt');
    console.log(`Received balance: ${balance} ETH`);
  } catch (error) {
    console.error('Error in main:', error.message);
  }
}

main();
