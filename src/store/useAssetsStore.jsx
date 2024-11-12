// import { create } from "zustand";

// const useAssetStore = create((set) => ({
//   assets: {},
//   preloadAssets: (assetPaths) => {
//     const loadedAssets = {};
//     assetPaths.forEach((path) => {
//       const img = new Image();
//       img.src = path;
//       loadedAssets[path] = img.src; // Store the src after loading
//     });
//     set({ assets: loadedAssets });
//   },
//   getAsset: (path) => useAssetStore.getState().assets[path],
// }));

// export default useAssetStore;
// src/store/useAssetsStore.js
import { create } from "zustand";
import * as Assets from "../images/images"; // Import all assets

const useAssetStore = create((set) => ({
  assets: {},
  preloadAssets: () => {
    const loadedAssets = {};

    // Preload images and GIFs
    Object.keys(Assets).forEach((key) => {
      const asset = Assets[key];

      // Handle image and gif assets (create img element)
      if (
        asset.endsWith(".png") ||
        asset.endsWith(".jpg") ||
        asset.endsWith(".jpeg") ||
        asset.endsWith(".gif")
      ) {
        const img = new Image();
        img.src = asset;

        img.onload = () => {
          loadedAssets[key] = img.src; // Store by image name
          if (Object.keys(loadedAssets).length === Object.keys(Assets).length) {
            set({ assets: loadedAssets });
          }
        };

        img.onerror = () => {
          console.error(`Failed to load asset: ${key}`);
        };
      }

      // Handle audio files
      if (
        asset.endsWith(".mp3") ||
        asset.endsWith(".ogg") ||
        asset.endsWith(".wav")
      ) {
        const audio = new Audio(asset);

        audio.oncanplaythrough = () => {
          loadedAssets[key] = audio.src; // Store by audio name
          if (Object.keys(loadedAssets).length === Object.keys(Assets).length) {
            set({ assets: loadedAssets });
          }
        };

        audio.onerror = () => {
          console.error(`Failed to load asset: ${key}`);
        };
      }
    });
  },
  getAsset: (name) => {
    return useAssetStore.getState().assets[name];
  },
}));

export default useAssetStore;
