# Tell me

Tell me is a very simple way to get to know more about your user behavior. Know every click in buttons, links or any HTML elements. Register the events and send to storage.

## Installation

```bash
npm install @fabioespindola/tellme
```

## Usage

```bash
import attachClick from '@fabioespindola/tellme'

const selectors = [ '.myClass1', '.myClass2', '#myId1', '#myId2', ... ]
const url = 'api endpoint'
const headers = {
    header1: value1,
    header2: value2
}

attachClick(selectors, url, headers)

```

You should add a aria-label to identify the element

```
<button id='#myId1' aria-label='My button'>My button</button>
```

Then you should receive in your backend something like this

```
{ 
    event: "click", 
    type: "button", 
    label: "My button",
    url: "element page url", 
    datetime: "2023-06-23 09:00:49" 
}
```