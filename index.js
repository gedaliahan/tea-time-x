class TeaCryptoProject {
    constructor(name, symbol, initialSupply, founder) {
      this.name = name;
      this.symbol = symbol;
      this.totalSupply = initialSupply;
      this.founder = founder;
      this.currentPrice = 0; // Assuming the initial price is 0, update as needed
      this.holders = []; // An array to store wallet addresses of holders
    }
  
    // Method to update the current price of the Tea token
    updatePrice(newPrice) {
      this.currentPrice = newPrice;
    }
  
    // Method to mint additional tokens
    mintTokens(amount) {
      this.totalSupply += amount;
    }
  
    // Method to transfer tokens between holders
    transferTokens(sender, recipient, amount) {
      if (this.holders.includes(sender) && this.totalSupply >= amount) {
        this.totalSupply -= amount;
        // Simulating a transfer by updating the holder list (in a real scenario, this would involve more complex logic)
        this.holders.push(recipient);
        console.log(`${amount} ${this.symbol} tokens transferred from ${sender} to ${recipient}`);
      } else {
        console.log('Token transfer failed. Check sender balance or recipient address.');
      }
    }
  
    // Method to display information about the Tea crypto project
    displayInfo() {
      console.log(`
        Project Name: ${this.name}
        Symbol: ${this.symbol}
        Total Supply: ${this.totalSupply}
        Founder: ${this.founder}
        Current Price: ${this.currentPrice}
        Number of Holders: ${this.holders.length}
      `);
    }
  }
  
  // Example usage
  const teaProject = new TeaCryptoProject('Tea Token', 'TEA', 1000000, 'CryptoEnthusiast');
  teaProject.updatePrice(1.5); // Update the price to $1.5 per TEA token
  teaProject.mintTokens(500000); // Mint 500,000 additional TEA tokens
  teaProject.transferTokens('SenderAddress', 'RecipientAddress', 1000); // Simulate a token transfer
  teaProject.displayInfo(); // Display information about the Tea crypto project
  