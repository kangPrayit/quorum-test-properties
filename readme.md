<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Quorum Blockchain Properties Test</h3>

  <p align="center">
    ...
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This repository is Quorum Blockchain properties test based on these questions:

- (1) create new user account in each of the node
- (2) to check if the public and private key is available for user when the accounts are generated
- (3) if the key pairs are available, then create a public transaction between two users
- (4) if the key pairs are available, then create a private transaction using the target user public key.
- (5) if (4) does not work, then we need to perform the encryption protocol at the application level
- (6) use the NODE public key to create a private transaction to other NODE, and check what is the meaning and the ledger records.

### Built With

This project was built using several frameworks such as:

- [Quorum-Wizard](https://github.com/ConsenSys/quorum-wizard)
- [NodeJs](https://nodejs.org)
- [Truffle Framework](https://www.trufflesuite.com/truffle)
- [Docker](https://www.docker.com/)

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To run the project you must install:

- docker
- nodejs
- truffle

### Installation

1. Clone the repo

```sh
git clone https://github.com/kangPrayit/quorum-test-properties.git
```

2. Run the blockchain Network

```sh
cd 3-nodes-raft-tessera-docker-compose
```

if you run on windows

```sh
start.cmd
```

if you run on unix

```sh
./start.sh
```

4. See the report for steps in testing quorum blockchain https://drive.google.com/file/d/1Ak-rNsCYfasMNOU3BT1tQyZiSPgJMiJ4/view?usp=sharing

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[@kang_prayit](https://twitter.com/kang_prayit)

[https://github.com/kangPrayit/quorum-test-properties](https://github.com/kangPrayit/quorum-test-properties)
