# chinese-history-explorer
open source Chinese history wiki

This repository is the source for the [chinese history wiki](http://chinese-history.herokuapp.com/). If you are an expert on some topic in Chinese history feel free to add to the source data of this repository.

The server is written in my own dialect of JavaScript called [Weirdo](https://github.com/incrediblesound/weirdo) and must be transpiled to be run locally.

To contribute to the project simply add data where you see fit. The idea is that each page should give the reader a basic yet clear and precise overview of the topic. If you feel like the topic is too complex to fit on one page, create subtopics within it to house that complexity. The schema of the data looks like this:

```xml
<topic>
  <children>
    <topic/>
    <topic/>
    <topic/>
  </children>
</topic>
```
Where a topic has the following JSON structure:
```javascript
{
  tag: 'no_space_string',       // used to keep track of history
  title: 'Topic Name'           // displayed as page header
  description: 'Lorem Ipsum...' // displayed as topic body text
  children: [                   // array of subtopics
    {..},                       // selectable from parent
    {..}
  ]
}
```
