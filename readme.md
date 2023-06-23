# Tell me

Tell me is a very simple way to get to know more about your user behavior. Know every click in buttons, links or any HTML elements. Register the events and send to storage.

## Installation

```bash
npm install @fabioespindola/tellme
```

## Usage

```bash
import attachClick from '@fabioespindola/tellme/attachClick'

const selectors = [ '.myClass1', '.myClass2', '#myId1', '#myId2', ... ]
const url = 'api endpoint'
const headers = {
    header1: value1,
    header2: value2
}

attachClick(selectors, url, headers)

```