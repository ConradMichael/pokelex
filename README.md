## Introduction:

Welcome to PokeLEX, a comprehensive and easy-to-use SDK designed to interact with the Pokémon API.

## Installation:

Using NPM:
```
npm install pokelex
```

Or using YARN:

```
yarn add pokelex
```

## Getting started:

```
import { PokeLEX } from "pokelex";

const lex = new PokeLEX();
```


Overriding the Configuration:

```
import { PokeLEX, Config } from "pokelex";

const config: Config = {
    url: 'https://my-new-poke-api.com'
}

const lex = new PokeLEX(config);
```

## Fetching data:

### Fetch data by an index (Can be the ID or NAME):

```
import { PokeLEX } from "pokelex";

const lex = new PokeLEX();

lex.Berry.get('cheri').then((berry) => {
    console.log(berry);
}).catch((error) => {
    console.error('Error fetching berry: ', error);
});
```

### Chaining Example 1:

```
import { PokeLEX } from "pokelex";

const lex = new PokeLEX();

lex.Berry.get('cheri').then((berry) => {
    berry.firmness.get().then(firmnessDetails => {
        console.log('Firmness Details:', firmnessDetails);
    });
}).catch((error) => {
    console.error('Error fetching details: ', error);
});
```

### Chaining Example 2 (async/await):

```
async function fetchBerryAndFirmnessDetails() {
    try {
        const berry = await pokelex.Berry.get(1);
        const firmnessDetails = await berry.firmness.get();

        console.log('Firmness Details:', firmnessDetails);
    } catch (error) {
        console.error('Error: ', error);
    }
}
```

### List Example 1:

Will return the first 20 results available.

```
import { PokeLEX } from "pokelex";

const lex = new PokeLEX();

lex.Berry.list().then((berries) => {
    console.log(berries);
});
```

### List Example 2 - With Request Config:

Will request 50 berries, ofsetting the start point by 20.

```
import { IRequestOptions, PokeLEX } from "pokelex";

const lex = new PokeLEX();

const reqOptions: IRequestOptions = {
    limit: 50,
    offset: 20,
}

lex.Berry.list(reqOptions).then((berries) => {
    console.log(berries);
});
```
