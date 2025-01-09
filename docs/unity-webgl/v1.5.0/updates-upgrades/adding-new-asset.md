---
sidebar_position: 1
---

# Adding New Asset

Provide the following asset details.
1. Update & Add new assets in your ```Game Assets``` and ```Game Asset Components``` Sheet.
2. Download the .csv files and mail to ```founders@gamespaces.xyz```
3. You will receive an updated ```SpacesAssets.cs``` file and additional Tracker and Loader Script for the new asset and its components.
4. Follow the same steps mentioned for the [Asset](/docs/unity-webgl/v1.5.0/integration/spaces-assets) & [CDN](/docs/unity-webgl/v1.5.0/integration/spaces-cdn) integration.
5. You can add asset Interactions by using the code snippet provided and following the Asset Integration steps [here](/docs/unity-webgl/v1.5.0/integration/spaces-assets). The code snippet will be similar to the one below
```csharp
spacesEngine.AssetUpdateInteraction(SpacesAssets.GetAssetId("your-asset-name"),interactionValue); //pass your interactionValue
```