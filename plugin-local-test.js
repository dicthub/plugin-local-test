/**
 * A Plugin scaffold demonstrates plugin creation
 */
class LocalTestPlugin {

    id() {
        return "plugin-local-test";
    }

    meta() {
        return {
            "name": "Local Test Plugin",
            "description": "Plugin for local testing",
            "source": "Local Test",
            "sourceUrl": "https://dicthub.org",
            "author": "DictHub",
            "authorUrl": "https://github.com/dicthub/plugin-local-test",
            "options": {
                "KeyEnabled": {
                    "type": "checkbox",
                    "default": "false",
                    "description": "Test Enabled CheckBox"
                }
            }
        }
    }

    canTranslate(query) {
        return true;
    }

    translate(query) {
        var result = '<div class="t-result"><div class="alert alert-info">Echo Query</div><code>' + JSON.stringify(query) + '</code></div>' 
            + '<div class="translation-source"><small>Powered by <a href="https://github.com/dicthub/plugin-local-test" target="_blank">Local Test</a></small></div>';
        return new Promise(function (resolve, reject) {
            resolve(result);
        });
    }

    /**
     * Optional function to update options for plugin.
     * @param {Object} options 
     */
    updateOptions(options) {
        console.log(options);
    }
}

var instance = {
    // This is required to create instance. 
    // Name rule: ("create_" + id()).replace('-', '_')
    "create_plugin_local_test": function () {
        return new LocalTestPlugin();
    }
}
instance