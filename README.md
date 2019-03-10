# plugin-local-test
A plugin scaffold for local testing

## How to use
1. Start a HTTP daemon serving the contents. e.g.
```
$ python3 -m http.server 7777
```
2. Add `index.json` in PluginRepositories<br>
See [Config](https://dicthub.org/docs//getting-started/config/) examples for detail.
3. Enable `Local Test Plugin` in options page