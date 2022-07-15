# Research Helper

Using Intellexer's Language-Processing API (https://www.intellexer.com/), we were able to create a website with React that allows users to quickly extract necessary information from articles. We choose to use Intellexer over other tools such as nltk on python simply because it was easy to embed information using JSON. 

## Running the Project

If you wish to experiment for yourself, you will need an API key and place it in a .env file. Fortunately, Intellexer does offer a 30-day free trial (you will not be charged after 30 days. Instead, your key will be suspended). 

The only required dependencies are styled-components (https://www.npmjs.com/package/styled-components) and mui (https://www.npmjs.com/package/@mui/material)

## Using Research Helper 

We have implemented three core functionalities: 

1. Generating a summary of an entire article given an URL 
2. Generating a summary given a block of text 
3. Generating named entities (proper nouns, to the grammarists) 

If you want to quickly read through any article (news, movie plots, essays, etc.) completely, we recommend you dropping in a URL. 

If you want a summary on a specific section of text, we recommend copy-and-pasting. 

Finally, if you want a rundown of characters, named personnel, or central persons, use the Named Entitiy function. 

## Credits 

To Sean Booker (https://github.com/SeanBookerJr) for collaborating on this project with me 

As well as the many online forums we scoured for information when we got stuck - of course. 
