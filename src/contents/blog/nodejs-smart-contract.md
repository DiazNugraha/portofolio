# Node JS Smart Contract

1. Create a smart contract project inside node js
   - initiation:

   ```bash
   mkdir hello-project
   cd hello-project
   git init
   npm init -y
   npm i —save-dev hardhat
   npx hardhat
   ```

   - select empty project

   ```bash
   npx hardhat compile #compiling smart contract
   ```

2. Install dependecies for testing

   ```bash
   npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
   npm i —save-dev ts-node typescript #change to typescript project
   npm i --save-dev chai @types/node @types/mocha @types/chai #for typescript dependecy
   move to typescript
   rename hardhat.config.js → hardhat.config.ts
   ```

3. Deploying smart contract
   - add file inside script #deploy-hello.ts
   - run the node:

   ```bash
   npx hardhat node
   ```

   - deploy :

   ```bash
   npx hardhat run scripts/deploy-hello.ts —network localhost
   ```

4. Connect metamask account
   - add metamask to browser (add on extension)
   - copy the private key of any account that appear on hardhat node log
   - import account → paste the key
   - change to [localhost](http://localhost) net

5. Deploy Contract and connect Metamask
   - create web application using webpack
   - add config → webpack.config.js
   - install dependecies:
   ```bash
   npm install -D webpack webpack-cli ts-loader html-webpack-plugin dotenv
   add tsconfig.json
   ```
