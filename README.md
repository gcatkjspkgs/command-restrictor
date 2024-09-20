# Command restrictor

[![kjspkg-available](https://github-production-user-asset-6210df.s3.amazonaws.com/79367505/250114674-fb848719-d52e-471b-a6cf-2c0ea6729f1c.svg)](https://kjspkglookup.modernmodpacks.site/#command-restrictor-6)

## Usage

```js
// Place this in any server script
const commandMap = {
    "kubejs": { // This will restrict the /kubejs command to
        "permissionLevel": 2, // Only be usable by players with perm levels higher than 2 (op)
        "stage": "stage_name", // Only runnable if the player has the stage called "stage_name"
        "dimension": "minecraft:overworld" // Only work when ran in the overworld
    }
}
```