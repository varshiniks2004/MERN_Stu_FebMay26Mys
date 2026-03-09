const mergeSettings = function(savedSettingsJSON, defaultSettings) {

    const savedSettings = JSON.parse(savedSettingsJSON);

    const merged = {};

    for (let key in defaultSettings) {
        merged[key] = defaultSettings[key];
    }
    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }
    return {
        mergedObject: merged,
        mergedJSON: JSON.stringify(merged)
    };
};
const defaultSettings = {
    theme: "light",
    notifications: true,
    fontSize: 14
};

const savedSettingsJSON = '{"theme":"dark","fontSize":8}';

const result = mergeSettings(savedSettingsJSON, defaultSettings);

console.log(result.mergedObject);
console.log(result.mergedJSON);